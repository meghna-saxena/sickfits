export default function formatMoney(amount: number = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  };

  const formatter = Intl.NumberFormat('en-US', options);

  // check if the amount is clean
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  //amount / 100
  return formatter.format(amount);
}
