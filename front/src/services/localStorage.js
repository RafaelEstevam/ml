export const getCategoriesOfLocaStorage = () => {
  const categories = localStorage.getItem('searchedCategories');
  if(categories){
    return categories.split(',');
  }else{
    return null;
  }
}

export const setCategoriesOnLocalStorage = (categories) => {
  if(categories){
    localStorage.setItem('searchedCategories', categories.toString())
  }else{
    localStorage.removeItem('searchedCategories')
  }
}