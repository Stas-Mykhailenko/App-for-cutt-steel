function Counter({ dataImport }) {
  let arr = [];
  dataImport.forEach((element) => {
    if (!isNaN(element[1])) {
      for (let index = 0; index < element[1]; index++) {
        arr.push(element[2]);
      }
    }
  });
  console.log(arr);
}

export { Counter };
