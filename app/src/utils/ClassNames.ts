// type ClassNamesType = {[key: string]: boolean} | string;
type ClassNamesType = {[key: string]: boolean} | string;

export function ClassNames (props: ClassNamesType): string {
  return [
    ...Object.entries(props)
      .filter(([cl, bol]) => bol || Boolean(bol) || typeof cl === "string")
      .map(([cl]) => cl)
  ].join(' ');
}