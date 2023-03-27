//================================= Задача 2 ====================================
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
const N = parseInt(prompt('N-'))
const obj = {
	day: 25,
	month: 3,
	year:2023,
}
const newYear = getYear(obj,N)

function getYear({ month,year }, N) {
	let curentYear = Math.floor((month + N) / 12)
	let willYear = year + curentYear
	return willYear
}
console.log(`Через ${N} місяців буде ${newYear} рік`)

//=================================================================================
 
