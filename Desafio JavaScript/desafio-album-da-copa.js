// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const numTotal = parseInt(gets())
const numFigCompradas = parseInt(gets())
const setFig = new Set()

for(i = 0; i < numFigCompradas; i++){
  let x = parseInt(gets());

  if(!setFig.has(x)){
    const fig = x;
    setFig.add(fig);
  }
}

print(numTotal - setFig.size)