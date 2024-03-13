const squareElement = document.querySelector('.square')
console.log(squareElement)
const stringNum = 10;
const Numsquares = stringNum ** 2;

for (let i = 0; i < Numsquares; ++i) {
	let num = i + 1;
	console.log(num);
	
	const cellElement = document.createElement('div');
	cellElement.className = 'numeri';
	cellElement.innerHTML = num;

	squareElement.append(cellElement)
}