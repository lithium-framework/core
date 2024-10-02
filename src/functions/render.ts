import { ViewTemplate } from '@microsoft/fast-element/dist/esm';
import { ViewExecutionContext } from '../templateComponent/model';
import { WebComponent } from '../webComponent';

// Fonction pour observer les enfants ajoutés
const observeChilds = (
  container: HTMLElement,
  config: MutationObserverInit,
  callback: (node: Node) => void
) => {
  // Crée un MutationObserver
  const observer = new MutationObserver((mutationsList, observer) => {
    // Parcourt toutes les mutations détectées
    mutationsList.forEach(mutation => {
      if (mutation.type === 'childList') {
        // Vérifie si des nœuds ont été ajoutés
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            console.log('Nouvel élément ajouté :', node);
            callback(node);  // Exécute le callback avec le nœud ajouté
          }
        });
      }
    });
  });

  // Démarre l'observation
  observer.observe(container, config);

  // Retourne l'observer pour pouvoir le déconnecter si besoin
  return observer;
};

export function render< T extends Record<string , any> = {} , Storage extends Record<string , any> = Record<string , any> >(template: ViewTemplate<ViewExecutionContext<any, Record<string, any>>, any>, container: HTMLElement = document.body , data = {} ) {

  let context = ViewExecutionContext.init(data);

  let observer = observeChilds( 
    container, 
    {
      childList: true,  // Observe les ajouts et suppressions d'enfants
      subtree: false    // Si true, observe tous les descendants du parent
    },
    ( node ) => {

      if( node instanceof WebComponent == false ){
        if(context["effects"])context["effects"].execute();
      }

      observer.disconnect();
    }
  );

  let element = template.render( context , container);

  return element;

}