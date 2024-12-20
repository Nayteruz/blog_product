export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, value);
    }
  });

  return `?${searchParams.toString()}`;
};

/**
 * Function adds query params to url
 * Params are passed as object
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
