function getInitialPrice(amount, percent){
    return Math.floor(amount * (1 + percent / 100));
}

function savedAmount(initialPrice, amount){
    return initialPrice - amount;

}

function generateRandomNumber(num, products){
    const shuffled = [...products].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
  }

export {getInitialPrice, savedAmount, generateRandomNumber}