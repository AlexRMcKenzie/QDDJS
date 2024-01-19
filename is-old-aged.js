function is_old_aged(age) {
  if (age >= 60) {
    return 'old'
  } else {
    return 'young'
  };
}

var res1 = is_old_aged(61)
var res2 = is_old_aged(60)
var res3 = is_old_aged(59)

console.log(res1)
console.log(res2)
console.log(res3)
