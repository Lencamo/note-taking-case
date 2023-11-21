export function isPrime(num: number): boolean {
  // for (let i = 2; i < num; i++) {
  //   // 判断是否能被除了 1 和 num本身 以外的数 整除
  //   if (num % i === 0) {
  //     return false
  //   }
  // }

  // 优化：O(n) => O(log n)
  const sqrt = Math.sqrt(num)
  for (let i = 2; i <= sqrt; i++) {
    // 判断是否能被除了 1 和 sqrt 以外的数 整除
    if (num % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(137))
console.log(isPrime(49))
console.log(isPrime(83))
