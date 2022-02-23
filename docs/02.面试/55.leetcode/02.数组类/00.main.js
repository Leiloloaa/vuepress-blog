var plusOne = function(digits) {
  return ((BigInt(digits.join('')) + 1n) +'').split('');
};

console.log([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join(''));
console.log(BigInt([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join(''))+1n);
