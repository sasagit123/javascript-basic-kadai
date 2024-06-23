// 変数numに1以上のランダムな整数を代入する
let num = Math.floor(Math.random() * 20) + 1;
// 3と5の倍数
if (num % 15 === 0) {
  console.log('3と5の倍数');
  //console.log(num);
}
// 3の倍数
else if (num % 3 === 0) {
  console.log('3の倍数');
  //console.log(num);
}
// 5の倍数
else if (num % 5 === 0) {
  console.log('5の倍数');
  //console.log(num);
}
// それ以外の数字
else {
  console.log(num);
}
