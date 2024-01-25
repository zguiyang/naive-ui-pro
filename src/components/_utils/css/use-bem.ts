/**
 * A function that generates BEM class names for a given component name (block) and namespace,
 * considering sub-elements and modifiers.
 *
 * @param {string} block - The base name of the component (block in BEM).
 * @param {string} namespace - The namespace prefix.
 * @return {object} An object containing methods for generating BEM class names.
 */
const defaultNamespace = 'np';
export function useBemNamespace(block: string, namespace = defaultNamespace) {
  const blockPrefix = `${namespace}-${block}`;

  // Helper to generate element class
  const elementClass = (element: string) => `${blockPrefix}__${element}`;

  // Helper to generate modifier class
  const modifierClass = (base: string, modifier: string) =>
    `${base}--${modifier}`;

  return {
    name: blockPrefix,
    // Example: "ns-block"
    b: () => blockPrefix,

    // Example: "ns-block__element"
    e: (element: string) => elementClass(element),

    // Example: "ns-block--modifier"
    m: (modifier: string) => modifierClass(blockPrefix, modifier),

    // Example: "ns-block__element--modifier"
    em: (element: string, modifier: string) =>
      modifierClass(elementClass(element), modifier),

    // Example: "ns-block--modifier1--modifier2"
    bm: (modifier1: string, modifier2: string) =>
      modifierClass(modifierClass(blockPrefix, modifier1), modifier2),

    // Example: "ns-block__element-subElement"
    eSub: (element: string, subElement: string) =>
      `${elementClass(element)}-${subElement}`,

    // Example: "ns-block__element-subElement--modifier"
    emSub: (element: string, subElement: string, modifier: string) =>
      modifierClass(`${elementClass(element)}-${subElement}`, modifier),

    // Example: "ns-block--modifier-state"
    s: (modifier: string, state: string) =>
      `${modifierClass(blockPrefix, modifier)}-${state}`,

    // Example: "ns-block__element--modifier-state"
    es: (element: string, modifier: string, state: string) =>
      `${modifierClass(elementClass(element), modifier)}-${state}`,
  };
}
