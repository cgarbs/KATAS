const count = (string) => { return string.split("").reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {}); }

// Refactored to one line!