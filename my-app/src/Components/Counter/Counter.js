function Counter({ dataImport }) {
  const mokoValueCustomSize = 6000;
  // const mokoValueWitdSize = 3;
  // const mokoValueRemainderSize = 800;

  const sizes = dataImport.reduce((accumulator, currentItem, index) => {
    if (index === 0) {
      return accumulator;
    }
    const quantity = currentItem[1];
    if (typeof quantity === "number" && !isNaN(quantity)) {
      return accumulator.concat(new Array(quantity).fill(currentItem[2]));
    }
    return accumulator;
  }, []);

  const findCustomSize = (arraySize, customSize) => {
    const sum = arraySize.reduce((acc, element) => acc + element, 0);
    const averageNumber = sum / customSize;
    const roundedAverage = Math.ceil(averageNumber);
    const arrayCustomSize = Array.from(
      { length: roundedAverage },
      () => customSize
    );
    return arrayCustomSize;
  };

  const arrayCustomSize = findCustomSize(sizes, mokoValueCustomSize);
  const cutMap = (array) => {
    const cutMap = array.map(() => []);

    return cutMap;
  };

  const dataCutMap = cutMap(arrayCustomSize);
  console.log(dataCutMap);

  return sizes;
}

export { Counter };
