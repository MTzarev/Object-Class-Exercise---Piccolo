function piccolo(input) {
    let parking = {};
  
    for (let line of input) {
      line = line.split(", ");
      let command = line[0];
      let carNumber = line[1];
  
      if (command === "IN") {
        parking[carNumber] = 1;
      } else {
        parking[carNumber] = 0;
      }
    }
    let arr = [];
    for (let key of Object.keys(parking)) {
      let carQuantity = parking[key];
      if (carQuantity !== 0) {
        arr.push(key);
      }
    }
    arr = arr.sort((a, b) => a.localeCompare(b));
    let arrLength = arr.length;
    if (arrLength === 0) {
      console.log("Parking Lot is Empty");
    } else {
      for (let carNumber of arr) {
        console.log(carNumber);
      }
    }
  }