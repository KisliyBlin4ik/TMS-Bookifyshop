export function postAutosuggest(state: any = [], action: any) {
  switch (action.type) {
    case 'SET_SEARCH_WITH_AUTOSUGGEST':
      return (state = action.payload);
    default:
      return state;
  }
}
