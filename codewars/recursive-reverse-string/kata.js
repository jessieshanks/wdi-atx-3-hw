function reverse(str) {
  if(str.length>1){
    return str.slice(-1)+reverse(str.slice(0,-1));
  }else{
    return str;
  }
}
