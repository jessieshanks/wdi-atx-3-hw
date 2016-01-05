
var splitInParts = function(s, partLength) {
  if (s.length>partLength) {
    return (s.substr(0,partLength)+" "+splitInParts(s.substr(partLength), partLength))
  } else {
    return s
  }
}
