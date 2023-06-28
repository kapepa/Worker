declare namespace classNamesNamespace {
  type Value = string | number | boolean | undefined | null;
  type Mapping = Record<string, unknown>;
  interface ArgumentArray extends Array<Argument> {}
  type Argument = Value | Mapping | ArgumentArray | {[key: string]: boolean } ;
}

export function ClassNames (...props: classNamesNamespace.ArgumentArray): string {
  const filterClass = (item: classNamesNamespace.Argument) => {
    if(typeof item === "string") return true;
    if(!!item) {
      const [bol] = Object.values(item);
      return bol;
    }
    return false;
  }
  const mapClass = (cl: classNamesNamespace.Argument) => {
    if(typeof cl === "string") return cl;
    if(!!cl) {
      const [name] = Object.keys(cl);
      return name;
    }
    return false;
  }

  return [...props.filter(filterClass).map(mapClass)].join(' ');
};