export const assembleQueryString = (sortBy, limit, sortOrder) => {
  let queryString = '';
  if(sortBy) {
    queryString += `sort_by=${sortBy}&`
  }
  if(limit) {
    queryString += `limit=${limit}&`
  }
  if(sortOrder) {
    queryString += `sort_order=${sortOrder}&`
  }
  return queryString ? `?${queryString}` : '';
}