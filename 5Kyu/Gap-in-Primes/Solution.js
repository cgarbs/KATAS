function primeNum(x) {
	if (x === 2) return true;
	if (x % 2 !== 0) {
		for (let i = 2; i <= x / 2; i++) {
			if (x % i === 0) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function gap(g, m, n) {
	let cache = null;
	for(let i = m; i < n; i++) {
		if(primeNum(i)) {
			if(cache === null) {
				cache = i;
			} else if(i - cache === g) {
				return [cache, i];
			} else {
				cache = i;
			}
		}
	}
	return null;
}