export const loadingReducer = (state, action) => {
    switch(action.type){
      case 'show':
        return state = true;
      case 'hide':
        return state = false;
      default:
        return state;
    }
}