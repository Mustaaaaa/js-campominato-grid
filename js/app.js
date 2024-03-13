const gridElement = document.querySelector('.grid');
console.log(gridElement);
const stringNum = 10;
const Numsquares = stringNum ** 2;

for (let i = 0; i < Numsquares; ++i) {
	let num = i + 1;
	console.log(num);
	
	const cellElement = document.createElement('div');
	cellElement.className = 'cell';
	cellElement.innerHTML = num;

	gridElement.append(cellElement)
}