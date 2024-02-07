const fahrenheitToCelsius = (temp) => {
	return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
	return temp * 1.8 + 32
}
let test = fahrenheitToCelsius(32)
module.exports = {
	fahrenheitToCelsius,
	celsiusToFahrenheit,
}
