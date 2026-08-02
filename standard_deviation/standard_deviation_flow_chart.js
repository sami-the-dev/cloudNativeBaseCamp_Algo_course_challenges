let sd = (av = a = b = n = 0);
var x = [];

n = Number(prompt("n=? "));

for (let i = 0; i < n; i++) {
  x[i] = Number(prompt("x[" + i + "]"));
  av += x[i];
}

av = av / n;

for (let j = 0; j < n; j++) {
  a += (x[j] - av) ^ 2;
}

b = a / n;

sd = Math.sqrt(b);

console.log("sd", sd);
