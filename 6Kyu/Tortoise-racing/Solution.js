//FIRST SOLUTION WORKS BUT TIMES OUT

// function race(v1, v2, g) {
//     let v1PerSecond = (v1 / 60) / 60;
//     let v2PerSecond = (v2 / 60) / 60;
//     let v1Distance = g;
//     let v2Distance = 0;
//     let time = 0;
//     while(v2Distance < v1Distance) {
//       v1Distance += v1PerSecond;
//       v2Distance += v2PerSecond;
//       time++
//     } 
//     let seconds = Math.floor(time % 60);
//     let hours = Math.floor((time / 60) / 60);
//     let minutes = Math.floor((time / 60) - (hours * 60))
//     return [hours, minutes, seconds - 1]
//   }

const race = (v1, v2, g) => {
    let time = g / (v2 - v1);
    return v2 > v1 ? [Math.floor(time), Math.floor((time * 60) % 60), Math.floor((time * 3600) % 60)] : null;
  }