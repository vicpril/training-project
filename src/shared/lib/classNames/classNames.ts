type Mods = Record<string, string | boolean>

export function classNames(baseClass: string, mods: Mods = {}, additionals: string[] = []): string {
  return [
    baseClass,
    ...additionals,
    ...Object.entries(mods)
      .filter(([_, bool]) => !!bool)
      .map(([classNames]) => classNames),
  ].join(' ')
}
