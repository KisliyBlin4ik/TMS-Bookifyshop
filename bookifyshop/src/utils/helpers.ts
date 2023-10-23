import { IAddCart } from 'src/utils/interface';

export function findUserInStorage() {
  const getStorage = localStorage.getItem('users');
  const getStorage2 = localStorage.getItem('user');
  const userArr = getStorage !== null ? JSON.parse(getStorage) : [];
  const userArr2 = getStorage2 !== null ? JSON.parse(getStorage2) : [];
  const user = userArr.find((item: any) => {
    return item.email === userArr2.email;
  });
  return user;
}

export function calculateTotalCost(props: IAddCart) {
  const priceNumber = parseFloat(props.price.replace('$', ''));
  return (priceNumber * props.counter).toFixed(2);
}

export const generatePageNumbers = (
  currentPage: number,
  totalPages: number
) => {
  const pageNumbers = [currentPage];
  for (let i = 1; i <= 2; i++) {
    if (currentPage - i > 0) {
      pageNumbers.unshift(currentPage - i);
    }
    if (currentPage + i <= totalPages) {
      pageNumbers.push(currentPage + i);
    }
  }
  if (pageNumbers[0] !== 1) {
    pageNumbers.unshift(1);
  }
  if (pageNumbers[pageNumbers.length - 1] !== totalPages) {
    pageNumbers.push(totalPages);
  }
  return pageNumbers;
};

export function getUserDataFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : [];
}
