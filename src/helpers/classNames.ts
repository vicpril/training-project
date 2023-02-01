type Mods = Record<string, string | boolean>

export function classNames(baseClass: string, mods: Mods, additionals: string[]): string {
  return [
    baseClass,
    ...Object.entries(mods)
      .filter(([className, bool]) => !!bool)
      .map(([classNames]) => classNames),
    ...additionals
  ].join(' ')
}