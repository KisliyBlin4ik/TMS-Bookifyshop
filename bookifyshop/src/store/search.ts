export function search(state: any = [], action: any) {
  switch (action.type) {
    case 'SEARCH_POST':
      return (state = action.payload);
    default:
      return state;
  }
}
