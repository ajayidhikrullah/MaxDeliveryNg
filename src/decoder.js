const  MORSE_CODE = require('./morse');

module.exports = function (sentence_from_moores_data) {
	let words = sentence_from_moores_data.split("   ");
	for (let i = words.length - 1; i >= 0; i--) {
		let characters = words[i].split(" ");
		for (let j = characters.length - 1; j >= 0; j--) {
			if (MORSE_CODE[characters[j]]) {
				characters[j] = MORSE_CODE[characters[j]];
			} else {
				characters[j] = "";
			}
		}
		words[i] = characters.join("");
	}
	let returned_sentence = words.join(" ");
	return returned_sentence;
}
// console.log(decodeMorse("-- .- -..-   -. --- .--"));