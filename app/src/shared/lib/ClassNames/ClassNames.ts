declare namespace classNamesNamespace {
  type Value = string | number | boolean | undefined | null | { [key: string]: boolean | unknown };
  type Mapping = Record<string, unknown>;
  interface ArgumentArray extends Array<Argument> {}
  type Argument = Value | Mapping | ArgumentArray;
}

export function ClassNames (...props: classNamesNamespace.ArgumentArray): string {
  const filterClass = (item: classNamesNamespace.Argument) => {

    if(typeof item === "string") return true;
    if(!!item && typeof item === "object") {
      const [bol] = Object.values(item);
      return !!bol;
    }
    return false;
  }
  const mapClass = (cl: classNamesNamespace.Argument) => {
    if(typeof cl === "string") return cl;
    if(!!cl && typeof cl === "object") {
      const listClass: string[] = Object.entries(cl).reduce((accum, [className, bol]) => {
        if (!!bol) accum.push(className)
        return accum
      }, Array<string>())

      return listClass.join(" ");
    }
    return false;
  }

  return [...props.filter(filterClass).map(mapClass)].join(' ');
};