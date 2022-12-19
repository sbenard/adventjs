// Exo
function wrapping(gifts: string[]) {

  function wrappingFn(word:string) {
    const base = '*'.repeat(word.length+2)
    return `${base}\n*${word}*\n${base}`
  }

  return gifts.map(wrappingFn);
}

// Exemple
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
