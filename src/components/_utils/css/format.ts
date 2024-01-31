export function formatCssUnit(value?: string | number | null): string {
  if (value === null || value === undefined) {
    return '0';
  }

  if (value === 0 || value === '0') {
    return value.toString();
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (typeof value === 'string') {
    const hasUnit = /(\d+)(px|em|rem|%)$/.test(value);
    return hasUnit ? value : `${value}px`;
  }
  return String(value);
}
