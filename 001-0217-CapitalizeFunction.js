const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  };
  
  const shortStr = "hi there";
  toCapital(shortStr); // Hi There
  console.log(shortStr);
  console.log(toCapital(shortStr));

  
  const longStr = "the quick brown fox jumped over the lazy dog";
  toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog
  console.log(longStr);
  console.log(toCapital(longStr));
  
console.log(shortStr.toUpperCase())

const capLet = (shortStr.slice(0, 1).toUpperCase())
console.log(capLet)