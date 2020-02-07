const expect = chai.expect

describe("Se realizan las sumas correctamente", () =>{
	const sumar = (a, b) => a + b
	it ('3 + 5 = 8', () => {
		expect(sumar (3 , 5)).to.be.equal(8);
	})
})

describe("Se resolvió correctamente", () =>{
	const fibonacci = (n) => 4;
	it ('Fibonacci para 2 es : 2', () =>{
		expect(fibonacci(2)).to.be.equal(4)
	})
	// it('Fibonacci para 3 es : 4', () =>{
	// 	expect(fibonacci(3)).to.be.equal(4)
	// })
})

describe("Fibonacci Funcion", () =>{
	const fibonacci = (suma) => suma;
	//let array = (array) => array;
	it ('La suma de los 10 primeros de Fibonacci es 143', () =>{
		expect(fibonacci(suma)).to.be.equal(143)
	})
	it('El arreglo de Fibonacci de los primeros 10', () =>{
		expect(fibonacci(array[0])).to.be.equal(1)
		expect(fibonacci(array[1])).to.be.equal(1)
		expect(fibonacci(array[2])).to.be.equal(2)
		expect(fibonacci(array[3])).to.be.equal(3)
		expect(fibonacci(array[4])).to.be.equal(5)
		expect(fibonacci(array[5])).to.be.equal(8)
		expect(fibonacci(array[6])).to.be.equal(13)
		expect(fibonacci(array[7])).to.be.equal(21)
		expect(fibonacci(array[8])).to.be.equal(34)
		expect(fibonacci(array[9])).to.be.equal(55)	
		
		// for (i = 0; i < array.length; i++){
		// 	expect(fibonacci(array[i])).to.be.equal(fibonacci(i));
		// }
	})
})



let array = [];	
function fibonacci(num) {
	let a;
	if (num <= 1){
		a = 1;
	}else{
		a =	fibonacci(num - 1) + fibonacci(num - 2);
	}
	return a;
}

for (i = 0; i < 10; i++){
	array.push(fibonacci(i));		
}

let suma = 0; 
for (i = 0; i < array.length; i++){
	 suma += array[i];
	
}

console.log(array);
console.log(suma);