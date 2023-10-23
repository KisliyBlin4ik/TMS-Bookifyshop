export function searchOnPage(state: any = [], action: any) {
  switch (action.type) {
    case 'SEARCH_ON_PAGE':
      return (state = action.payload);
    default:
      return state;
  }
}
