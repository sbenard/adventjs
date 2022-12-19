function distributeGifts(packOfGifts, reindeers) {
  const getLength = (word: string) => word.length;
  const multiply2 = (value: number) => value * 2;
  const sum = ((sum: number, value: number) => sum + value)

  let totalForce = reindeers
    .map(getLength)
    .map(multiply2)
    .reduce(sum,0);

  let giftPayload = packOfGifts
    .map(getLength)
    .reduce(sum,0);

  return Math.floor(totalForce / giftPayload)
}

