function rentalCarCost(d) {
  var discount=0;
  if (d>=7) {
    discount=50;
  } else if (d>=3) {
    discount=20;
  }
  return (d*40-discount);
}
