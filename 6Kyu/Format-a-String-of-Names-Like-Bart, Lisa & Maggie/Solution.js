function list(names) {
  let arr = names.map(e => e.name)
  let last = arr.pop()
  return arr.length ? arr.join(", ") + " & " + last : last || ""
}