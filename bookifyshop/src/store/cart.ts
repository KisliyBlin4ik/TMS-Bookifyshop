import { IAddCart } from 'src/utils/interface';

export function cart(state: any = [], action: any) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.concat(action.payload);
    case 'ADD_TO_CART_AGAIN': {
      const updatedCart = state.map((item: IAddCart) => {
        if (item.isbn13 === action.payload.isbn13) {
          const newCounter = item.counter + 1;
          return { ...item, counter: newCounter };
        }
        return item;
      });

      return (state = updatedCart);
    }
    case 'REMOVE_FROM_CART': {
      return state.filter(
        (post: IAddCart) => post.isbn13 !== action.payload.isbn13
      );
    }
    case 'INCREMENT_COUNTER_TO_CART': {
      const updatedCart = state.map((item: IAddCart) => {
        if (item.isbn13 === action.payload.isbn13) {
          const newCounter = item.counter + 1;
          return { ...item, counter: newCounter };
        }
        return item;
      });
      return (state = updatedCart);
    }
    case 'DECREMENT_COUNTER_TO_CART': {
      const updatedCart = state
        .map((item: IAddCart) => {
          if (item.isbn13 === action.payload.isbn13) {
            const newCounter = item.counter - 1;
            if (newCounter >= 1) {
              // Возвращаем обновленный объект товара
              return { ...item, counter: newCounter };
            }
            return null; /* Исключаем товар */
          }
          return item;
        })
        // метод filter создаст новый массив, исключая пост, у которого newCounter меньше 1
        .filter((item: IAddCart | null) => item !== null);

      return (state = updatedCart);
    }
    default:
      return state;
  }
}
