// questão 02

function Fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
      return `O número ${num} pertence a sequência de Fibonacci.`;
  }

  let c = a + b;
  while (c <= num) {
      if (c === num) {
          return `O número ${num} pertence a sequência de Fibonacci.`;
      }
      a = b;
      b = c;
      c = a + b;
  }

  return `O número ${num} não pertence a sequência de Fibonacci.`;
}


const numero = 21; // modifique pelo numero que deseja testaer
console.log(Fibonacci(numero));
