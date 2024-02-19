export function findMenuValue(options: any, path: string) {
  for (const option of options) {
    if (option.children) {
      const value: any = findMenuValue(option.children, path);

      if (value) return value;
    }

    if (option.path === path) {
      return option.key;
    }
  }

  return undefined;
}
