export const assembleQueryString = (sortBy, limit, sortOrder) => {
  const qNames = ['sort_by', 'limit', 'sort_order'];
  const qValues = [sortBy, limit, sortOrder];

  let queries = qNames.reduce((acc, curr, i) => {
    if (qValues[i]) acc.push(`${curr}=${qValues[i]}`);
    return acc;
  }, [])

  return queries.length ?  `?${queries.join('&')}` : '';
}