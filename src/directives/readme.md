# Guide de Création de Directives Lithium

## Introduction

Les directives dans Lithium permettent de manipuler le DOM et de lier des données de manière flexible. Ce guide explique comment créer deux types de directives :

- **Directives de Contenu** : Utilisées pour insérer du contenu dynamique dans le DOM ou comme attributs.
- **Directives d'Attribut Attaché** : Utilisées pour attacher des comportements ou des valeurs à des éléments HTML.

## Structure Générale d'une Directive

Une directive dans Lithium se compose des éléments suivants :

- **Binding** : Gère la logique de liaison des données et des changements.
- **Directive** : Contrôle la logique de rendu et de mise à jour du DOM.
- **HTMLDirective.define** : Enregistre la directive pour son utilisation dans les templates HTML.

### Implémentation d'un Binding

```tsx
export class CustomBinding extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any> {
        // Logique de comportement lors de la création de l'observer
        console.log({ subscriber, directive });

        return {
            bind(controller) {
                // Logique de comportement lors de la liaison
                console.log({ controller });
            }
        };
    }
}
```

## Directives de Contenu et d'Attribut Attaché

### Implémentation de la Directive de Contenu

```tsx
import { HTMLDirective, BindingDirective, HTMLView } from '@microsoft/fast-element';

// Directive de Contenu
export class ContentDirective extends BindingDirective {

    constructor(/* parameters */) {
        super(new CustomBinding()); // Utilisation du CustomBinding
        // Logique de traitement des paramètres
    }

    createBehavior(): any {
        return {
            bind(source: HTMLView) {
                // Logique de comportement lors de la liaison
                console.log('Content Directive bind');
            },
            unbind(source: HTMLView) {
                // Logique de nettoyage lors de la séparation
                console.log('Content Directive unbind');
            }
        };
    }

    static use(/* parameters */): ContentDirective {
        return new ContentDirective(/* parameters */);
    }
}

// Enregistrement de la directive de Contenu
HTMLDirective.define(ContentDirective);

// Fonction utilitaire pour utiliser facilement la directive de Contenu dans les templates
export const contentDirective = (/* parameters */): ContentDirective => ContentDirective.use(/* parameters */);
```

### Implémentation de la Directive d'Attribut Attaché

```tsx
import { HTMLDirective, StatelessAttachedAttributeDirective, HTMLView } from '@microsoft/fast-element';

// Interface générique pour les options de la directive
export interface IDirectiveOptions<T> {
    // Définissez ici les propriétés nécessaires pour votre directive
}

// Directive d'Attribut Attaché
export class AttachedDirective<T> extends StatelessAttachedAttributeDirective<T> {

    options: T;

    constructor(options: T) {
        super(options);
        this.options = options;
    }

    bind(controller: HTMLView): void {
        // Logique de liaison à l'élément HTML
        console.log('Attached Directive bind');
    }

    unbind(controller: HTMLView): void {
        // Logique de nettoyage lorsque la directive est retirée
        console.log('Attached Directive unbind');
    }

    static use<T>(options: T): AttachedDirective<T> {
        return new AttachedDirective<T>(options);
    }
}

// Enregistrement de la directive d'Attribut Attaché
HTMLDirective.define(AttachedDirective);

// Fonction utilitaire pour utiliser facilement la directive d'Attribut Attaché dans les templates
export const attachedDirective = <T>(options: IDirectiveOptions<T>): AttachedDirective<T> => AttachedDirective.use<T>(options);
```

### Utilisation dans un Template HTML

### Exemples d'Utilisation

```tsx
import { html } from '@lithium-framework/core';
import { contentDirective, attachedDirective } from '../path/to/custom/directives';

let template = html`
    <div>
        <!-- Utilisation de la directive de Contenu -->
        <p attribute=${contentDirective({ /* options spécifiques à la directive */ })}></p>
        <p>${contentDirective({ /* options spécifiques à la directive */ })}</p>
        <!-- Utilisation de la directive d'Attribut Attaché -->
        <div ${attachedDirective({ /* options spécifiques à la directive */ })}></div>
    </div>
`;
```

### Explication du Code

- **IDirectiveOptions** : Interface générique pour définir les options nécessaires à chaque type de directive.
- **CustomBinding** : Classe de base pour gérer la logique de liaison des données.
- **ContentDirective** : Directive de Contenu qui utilise `BindingDirective` pour le rendu dans le DOM ou comme attribut.
- **AttachedDirective** : Directive d'Attribut Attaché qui utilise `StatelessAttachedAttributeDirective` pour fonctionner comme un attribut attaché à un élément HTML.
- **HTMLDirective.define** : Enregistrement des directives pour leur utilisation dans les templates HTML.
- **contentDirective** et **attachedDirective** : Fonctions utilitaires pour faciliter l'utilisation des directives dans les templates.