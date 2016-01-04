function checkCoupon(entereddCode, correctCode, currentDate, expirationDate){
  return ((Date.parse(currentDate)<=Date.parse(expirationDate)) && (entereddCode===correctCode))
}
