function inverter(s) {
  let invertida = "";
  for (let i = s.length - 1; i >= 0; i--) {
      invertida += s[i];
  }
  return invertida;
}

// Entrada da string
const entrada = "amarelo";
console.log("string invertida:", inverter(entrada));
