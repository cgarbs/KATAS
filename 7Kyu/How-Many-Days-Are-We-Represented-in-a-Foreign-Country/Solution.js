function daysRepresented(trips) {
    const set = new Set();
    trips.map(([a, b]) => {
      for (let i = a; i <= b; ++i) {
        set.add(i);
      }
    });
    return set.size;
  }

//   NOT ORIGINAL SOLUTION.