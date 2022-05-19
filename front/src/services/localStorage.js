export const getCategoriesOfLocaStorage = () => {
  return localStorage.getItem('searchedCategories').split(',');
}