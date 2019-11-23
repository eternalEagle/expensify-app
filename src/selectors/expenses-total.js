export default expenses => {
  return expenses.reduce((acum, val) => acum + val.amount, 0);
};
