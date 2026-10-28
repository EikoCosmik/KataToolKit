import { mulberry32, createSFC32 } from "./RandomisationFunctions.js";

export const random = mulberry32();

export const randomHighQuality = createSFC32();

export function getRandomInt(min, max) 
{
	min = Math.ceil(min);
	max = max | 0;
	return (random() * (max - min) | 0) + min;
};

export function getRandomIntInclusive(min, max) 
{
	min = Math.ceil(min);
	max = max | 0;
	return (random() * (max - min + 1) | 0) + min;
};

export function getRandomIntSecure(type = "UI32", amt = 1)
{
	let A;
	switch (type)
	{
		case "I8":
			A = new Int8Array(amt);
			break;
		case "UI8":
			A = new Uint8Array(amt);
			break;
		case "UI8C":
			A = new Uint8ClampedArray(amt);
			break;
		case "I16":
			A = new Int16Array(amt);
			break;
		case "UI16":
			A = new Uint16Array(amt);
			break;
		case "I32":
			A = new Int32Array(amt);
			break;
		case "UI32":
			A = new Uint32Array(amt);
			break;
		case "I64":
			A = new BigInt64Array(amt);
			break;
		case "UI64":
			A = new BigUint64Array(amt);
			break;
	}
	return crypto.getRandomValues(A);
};

export function getRandomFloat(min, max)
{
	return random() * (max - min) + min;
};

export function getCoinFlip() 
{
	return (random() * 2 | 0);
};

export function getRandomDirection()
{
	let x
	let y
	let d;
	do
	{
		x = random() * 2 - 1;
		y = random() * 2 - 1;
		d = x * x + y * y;
	}
	while (d > 1);
	return [x, y];
};

export function fYScramble(arr)
{
	let curIdx = arr.length;
	let randIdx;

	while (curIdx !== 0)
	{
		randIdx = getRandomInt(0, curIdx);
		curIdx--;
		[arr[curIdx], arr[randIdx]] = [arr[randIdx], arr[curIdx]];
	}

	return arr;
};