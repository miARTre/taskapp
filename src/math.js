const calculateTip = (total, tipPrecent = 0.25) => total + total * tipPrecent;
//{
//const tip = total * tipPrecent
//return total + tip;
//};


const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit
};
