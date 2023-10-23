export function book(state: any = [], action: any) {
  switch (action.type) {
    case 'GET_BOOK':
      return (state = action.payload);
    default:
      return state;
  }
}
