export const assembleQueryString = (sortBy, limit, sortOrder, page) => {
  const qNames = ['sort_by', 'limit', 'order', 'p'];
  const qValues = [sortBy, limit, sortOrder, page];
  
  const queries = qNames.reduce((acc, curr, i) => {
    if (qValues[i]) acc.push(`${curr}=${qValues[i]}`);
    return acc;
  }, [])

  return queries.length ?  `?${queries.join('&')}` : '';
}

export const timestampToDate = (created_at) => {
  const timestamp = created_at.toString();
  return new Date(timestamp).toString().replace(/ GMT.*/, '');
}