export function forceMod(number, mod)
{
	return ((number % mod) + mod) % mod;
};

export function clamp(number, min, max)
{
	return Math.max(min, Math.min(max, number));
};

export function absolute(number)
{
	const mask = number >> 31;
	return (number + mask) ^ mask;
};

export function getDigit(number, digit)
{
	return (number / 10 ** digit) % 10 | 0;
};

export function dotProduct(arrayOne, arrayTwo, strictSize = true)
{
	if (arrayOne.length !== arrayTwo.length && strictSize)
		throw new Error("Invalid Array Sizes. ArrayOne.length must = ArrayTwo.length");

	let outNum = 0;
	const length = strictSize ? arrayOne.length : Math.max(arrayOne.length, arrayTwo.length);

	for (let i = 0; i < length; i++) outNum += (arrayOne[i] ?? 0) * (arrayTwo[i] ?? 0);

	return outNum;
}

export function matrixTranspose(matrix)
{
	const rows = matrix.length;
	const columns = matrix[0].length;
	const outMatrix = new Array(columns);

	for (let i = 0; i < columns; i++)
	{
		const outRow = new Array(rows);

		for (let j = 0; j < rows; j++) outRow[j] = matrix[j][i];

		outMatrix[i] = outRow;
	}

	return outMatrix;
}

export function matrixMultiplyRowVector(matrixOne, matrixTwo, strictSize = true)
{
	if (matrixOne[0].length !== matrixTwo.length && strictSize) throw new Error("Invalid Matrix Sizes. Need: MatrixOne = MxN, MatrixTwo = NxP");

	const transposedMatrixTwo = matrixTranspose(matrixTwo);
	const outMatrix = new Array(matrixOne.length);

	for (let i = 0; i < matrixOne.length; i++)
	{
		const outRow = new Array(transposedMatrixTwo.length);

		for (let j = 0; j < transposedMatrixTwo.length; j++) outRow[j] = dotProduct(matrixOne[i], transposedMatrixTwo[j], strictSize);

		outMatrix[i] = outRow;
	}

	return outMatrix;
}

export function matrixMultiplyColumnVector(matrixOne, matrixTwo, strictSize = true)
{
	if (matrixOne.length !== matrixTwo[0].length && strictSize) throw new Error("Invalid Matrix Sizes. Need: MatrixOne = MxN, MatrixTwo = NxP");

	const transposedMatrixOne = matrixTranspose(matrixOne);
	const outMatrix = new Array(matrixOne[0].length);

	for (let i = 0; i < transposedMatrixOne.length; i++)
	{
		const outRow = new Array(transposedMatrixOne.length);

		for (let j = 0; j < matrixTwo.length; j++) { outRow[j] = dotProduct(matrixTwo[j], transposedMatrixOne[i], strictSize); }

		outMatrix[i] = outRow;
	}

	return outMatrix;
}

export function scalarMultiply(matrix, scalar)
{
	const outMatrix = new Array(matrix.length);

	for (let i = 0; i < matrix.length; i++)
	{
		const curRow = matrix[i];
		const outRow = new Array(curRow.length);

		for (let j = 0; j < curRow.length; j++) outRow[j] = scalar * curRow[j];

		outMatrix[i] = outRow;
	}

	return outMatrix;
}

export function numToLetter(num)
{
	return String.fromCharCode(65 + num - 10);
}

export function toDecimal(inputNum, inputBase)
{
	if (typeof (inputNum) != "number") throw new Error("inputNum != number");
	if (typeof (inputBase) != "number") throw new Error("inputBase != number");

	const digits = Array.from(String(inputNum), Number);

	let currentPower = 1;
	let total = 0;

	for (let i = digits.length - 1; i > -1; i--)
	{
		total += digits[i] * currentPower;
		currentPower *= inputBase;
	}

	return total;
}

export function convertTo(inputNum, outputBase, inputBase = 10)
{
	if (typeof (inputNum) != "number") throw new Error("inputNum != number");
	if (typeof (outputBase) != "number") throw new Error("outputBase != number");
	if (typeof (inputBase) != "number") throw new Error("inputBase != number");
	const iNum = (inputBase == 10) ? inputNum : this.toDecimal(inputNum, inputBase);

	let currentOutput = "";
	let currentPower = outputBase;
	let lastPower = 1;
	let lastRemainder = 0;

	while (true)
	{
		const nextRemainder = (iNum % currentPower);
		let nextDigit = ((nextRemainder - lastRemainder) / lastPower);
		if (nextDigit >= 10)
		{
			nextDigit = this.numToLetter(nextDigit);
		}
		currentOutput = nextDigit + currentOutput;
		lastRemainder = nextRemainder;
		lastPower = currentPower;
		currentPower *= outputBase;
		if (nextRemainder == iNum) break;
	}

	return (outputBase < 11) ? Number(currentOutput) : currentOutput;
}