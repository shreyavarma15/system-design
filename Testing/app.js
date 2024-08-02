const data = [
  {
    name: "Jyoti",
    age: 50,
  },
  {
    name: "Shreya",
    age: 28,
  },
  {
    name: "Aashay",
    age: 22,
  },
  {
    name: "Nikita",
    age: 30,
  },
];

function sortingDataFn() {
  let sortedData = data.sort((a, b) => a.age - b.age);
  console.log(sortedData);
  return sortedData;
}

sortingDataFn();
module.exports = sortingDataFn;
