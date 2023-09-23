const UseUpdateParam = <T,>(key: keyof T, val: string): void => {
  const searchParam: URLSearchParams = new URLSearchParams(window.location.search);
  const toKey: string = key.toString();
  searchParam.set(toKey, `${val}`);
  const newQuery: string = `${window.location.pathname}?${searchParam}`;
  window.history.pushState(null, "", newQuery);
}

export { UseUpdateParam };