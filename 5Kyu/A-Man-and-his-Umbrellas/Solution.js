const minUmbrellas = (weather) => {
  let umbrellas = 0;
  let atWork = 0;
  let atHome = 0;
  
  for(let i = 0; i < weather.length; i++) {
    if((i % 2 === 0) && (weather[i] === "rainy" || weather[i] === "thunderstorms")) {
      atWork++;
      atHome > 0 ? atHome-- : umbrellas++;
    } else if ((i % 2 !== 0) && (weather[i] === "rainy" || weather[i] === "thunderstorms")) {
      atHome++;
      atWork > 0 ? atWork-- : umbrellas++
    }
  }
  return umbrellas
}