const inventors = [
  { first: "Thomas", last: "Edison", year: 1847, passed: 1931 },
  { first: "Nikola", last: "Tesla", year: 1856, passed: 1943 },
  { first: "Alexander", last: "Bell", year: 1847, passed: 1922 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Leonardo", last: "da Vinci", year: 1452, passed: 1519 },
  { first: "James", last: "Watt", year: 1736, passed: 1819 },
  { first: "Wright", last: "Brothers", year: 1871, passed: 1948 },
  { first: "Johannes", last: "Gutenberg", year: 1400, passed: 1468 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
];

const inventorBody = document.getElementById("inventors-body");

inventors.forEach((inventor) => {
  const row = document.createElement("tr");
  const nameField = document.createElement("td");
  nameField.textContent = inventor.first;
  row.appendChild(nameField);

  const lastNameField = document.createElement("td");
  lastNameField.textContent = inventor.last;
  row.appendChild(lastNameField);

  const birthYearField = document.createElement("td");
  birthYearField.textContent = inventor.year;
  row.appendChild(birthYearField);

  const deathYearField = document.createElement("td");
  deathYearField.textContent = inventor.passed;
  row.appendChild(deathYearField);

  inventorBody.appendChild(row);
});

// sorted list by birth year
// const orderedList = inventors.sort((a,b) => a.year > b.year? 1 : -1)  
// console.log(orderedList, 'orderedList')

// sorted by lived year

const newList = inventors.reduce((acc, curr) => {
  const newObject = {... curr, livedYear: curr.passed - curr.year}
  acc.push(newObject)
  return acc.sort((a,b) => a.livedYear > b.livedYear ? 1 : -1)
}, [])
console.log(newList)