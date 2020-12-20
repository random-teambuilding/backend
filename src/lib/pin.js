

exports.makePin = (async (length) => {
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let pin = "";

  for await(let i of length){
    pin += string.charAt(Math.floor(Math.random() * string.length));
  }

  return pin;
});