//module.exports = leftpad;
//function leftpad (str, len, ch) {
//  str = String(str);
//  var i = -1;
//  if (!ch && ch !== 0) ch = ' ';
//  len = len - str.length;
//  while (++i < len) {
//    str = ch + str;
//  }
//  return str;
//}
 leftpad = (str, len, ch)=> String(str).padStart(Number(len),String(ch));
 leftpad('123',8,'2');