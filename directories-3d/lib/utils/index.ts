export const getSortInfoFromJql = (jql: string = 'ORDER BY created ASC') => {
  return (jql.split('ORDER BY')[1] ?? 'created ASC')
    .trim()
    .split(',')[0]
    .trim()
    .split(' ');
};

export const getUrlWithNewJql = (
  urlPath: string,
  sortKey: string,
  sortDirection: string,
) => {
  let url;
  try {
    url = new URL('https://temp.com' + urlPath);
  } catch (e) {
    url = new URL('https://temp.com');
  }
  if (url.searchParams.get('jql') !== `ORDER BY ${sortKey} ${sortDirection}`) {
    url.searchParams.set('jql', `ORDER BY ${sortKey} ${sortDirection}`);
    url.searchParams.set('page', '1');
  }
  return `${url.pathname}?${url.searchParams.toString()}`;
};
