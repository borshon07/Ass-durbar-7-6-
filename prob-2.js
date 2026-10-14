function calculateCartTotal(items, taxRate) {
  const subtotal = items.reduce((sum, item) => {
    const itemCost = item.price * item.quantity * (1 - item.discount / 100);
    return sum + itemCost;
  }, 0);

  const total = subtotal * (1 + taxRate / 100);

  return Math.round(total * 100) / 100;
}

console.log(
  calculateCartTotal(
    [
      { price: 10, quantity: 2, discount: 10 },
      { price: 20, quantity: 1, discount: 0 },
    ],
    5,
  ),
);
console.log(
  calculateCartTotal(
    [
      { price: 100, quantity: 2, discount: 10 },
      { price: 50, quantity: 1, discount: 0 },
    ],
    10,
  ),
);
