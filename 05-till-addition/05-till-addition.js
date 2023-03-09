/*

Cash up the cafe's till at the end of the day

The challenge is to implement a function which cashes up a till at the end of the day. The function should always return a string.

Examples
The till can contain the following denominations:

1p piece 2p piece 5p piece 10p piece 20p piece 50p piece £1 coin £2 coin £5 note £10 note £20 note £50 note

The till contents should be a javascript object in this format:

const till = {
  "1p": 1,
  "2p": 1,
  "5p": 1,
  "10p": 1,
  "20p": 1,
  "50p": 1,
  "£1": 1,
  "£2": 1,
  "£5": 1,
  "£10": 1,
  "£20": 1,
  "£50": 1
};
You can use these examples to start building up your test suite

till({ "1p": 1, "2p": 1 });
// should return "£0.03"
till({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 });
// should return "£0.38"
till({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 });
// should return "£1.85"
*/

function tillAddition(cash) {
  
  let penceTotal = 0;

  // with Intl.NumberFormat()
  // const gbp = new Intl.NumberFormat('en-GB', {
  //   style: 'currency',
  //   currency: 'GBP'
  // });
  
  for (const [denomination, amount] of Object.entries(cash)) {
    if (denomination.includes("p")) {
      penceTotal += parseInt(denomination) * amount;
    } else if (denomination.includes("£")) {
      penceTotal += parseInt(denomination.slice(1)) * amount * 100;
    }  
  }
  
  // without Intl.NumberFormat()
  const totalInPounds = (penceTotal / 100).toFixed(2);
  const result = `£${totalInPounds}`;

  // with Intl.NumberFormat()
  // const result = gbp.format(penceTotal / 100);
  
  return result;
};

module.exports = tillAddition;
