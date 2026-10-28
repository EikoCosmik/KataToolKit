export function mulberry32(seed = Date.now() ^ (Math.random() * 0xffffffff))
{
	seed |= 0;
	return function ()
	{
		seed = (seed + 0x6D2B79F5) | 0;
		let c = Math.imul(seed ^ (seed >>> 15), seed | 1);
		c ^= c + Math.imul(c ^ (c >>> 7), c | 61);
		return ((c ^ (c >>> 14)) >>> 0) / 4294967296;
	}
};

export function splitMix32(seed = Date.now())
{
	return function ()
	{
		seed |= 0;
		seed = (seed + 0x9E3779B9) | 0;
		let c = seed;
		c = (c ^ c >>> 16) | 0;
		c = Math.imul(c, 0x85EBCA6B) | 0;
		c = (c ^ c >>> 13) | 0;
		c = Math.imul(c, 0xC2B2AE35) | 0;
		c = (c ^ c >>> 16) | 0;
		return c >>> 0;
	}
}

export function sfc32(a = splitDefault() | 0, b = splitDefault() | 0, c = splitDefault() | 0, d = splitDefault() | 0)
{
	return function ()
	{
		a >>>= 0; 
		b >>>= 0; 
		c >>>= 0; 
		d >>>= 0;

		let t = (a + b) | 0;
		a = b ^ b >>> 9;
		b = (c + (c << 3)) | 0;
		c = (c << 21 | c >>> 11) | 0;
		d = (d + 1) | 0;
		t = (t + d) | 0;
		c = (c + t) | 0;

		return (t >>> 0) / 4294967296;
	}
}

export function createSFC32(seed = Date.now())
{
	let sm = splitMix32(seed);
	return sfc32(sm(), sm(), sm(), sm());
}