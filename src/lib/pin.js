

exports.makePin = (async (length) => {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let pin = "";

  for await(let i of length){
    pin += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return pin;
});