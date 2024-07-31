import { DecoratorAttributeConfiguration, attr } from "@microsoft/fast-element";
import { state } from './state';

/**
 * @AttributeState decorator
 * A decorator to define a property as both an attribute and a state on a WebComponent.
 * This combines the behavior of @attr and @State decorators.
 * 
 * @param {DecoratorAttributeConfiguration} options - Options to configure the attribute.
 * @returns {Function} - The decorator function.
 * 
 * @example
 * ```typescript
 * // Define an editable title component using the AttributeState decorator
 * 
 * customElement({
 *     name: 'editable-title',
 *     template : html`...`
 * })
 * class EditableTitle extends WebComponent {
 *     AttributeState() level: number = 2;
 *     AttributeState() editable: string = "false";
 *     State value: string = "Hello World";
 * 
 *     handleInput(event) {
 *         this.value = event.target.innerText;
 *     }
 * 
 *     connectedCallback() {
 *         super.connectedCallback();
 *     }
 * }
 * ```
 */
export function attrState( options:DecoratorAttributeConfiguration = {} ){

  return ( target, propertyKey: string ) => {
    attr( options )( target , propertyKey );
    state( target , propertyKey );
  }

}

export { attr };