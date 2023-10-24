export function books(state: any = [], action: any) {
  switch (action.type) {
    case 'GET_BOOKS':
      return (state = action.payload);
    default:
      return state;
  }
}
