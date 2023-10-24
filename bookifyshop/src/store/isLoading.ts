export function isLoading(state: any = false, action: any) {
  switch (action.type) {
    case 'SET_LOADING':
      return (state = action.payload);
    default:
      return state;
  }
}
