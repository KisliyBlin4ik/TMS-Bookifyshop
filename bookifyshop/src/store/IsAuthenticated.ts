export function IsAuthenticated(state: any = false, action: any) {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return (state = action.payload);
    default:
      return state;
  }
}
