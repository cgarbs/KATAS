// Impressive one-liner

const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f => f == e).length < x);