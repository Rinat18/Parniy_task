export const getlocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};
export const calcSubPrice = (elem) => {
  console.log(elem);
  return elem.item.price * elem.count;
};

