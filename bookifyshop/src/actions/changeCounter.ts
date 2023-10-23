export const INCREMENT_COUNTER_TO_CART = (isbn13: string, counter: number) => ({
  type: 'INCREMENT_COUNTER_TO_CART',
  payload: { isbn13, counter },
});

export const DECREMENT_COUNTER_TO_CART = (isbn13: string, counter: number) => ({
  type: 'DECREMENT_COUNTER_TO_CART',
  payload: { isbn13, counter },
});
