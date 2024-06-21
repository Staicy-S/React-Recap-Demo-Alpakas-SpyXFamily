import styles from "./Arrays.module.css";

const spyFamilyCharacters = [
  { name: "Loid Forger", gender: "male", age: 29 },
  { name: "Anya Forger", gender: "female", age: 6 },
  { name: "Yor Forger", gender: "female", age: 27 },
  { name: "Damian Desmond", gender: "male", age: 8 },
  { name: "Becky Blackbell", gender: "female", age: 6 },
  { name: "Henry Henderson", gender: "male", age: 35 },
  { name: "Sylvia Sherwood", gender: "female", age: 28 },
  { name: "Franky Franklin", gender: "male", age: 30 },
  { name: "Yuri Briar", gender: "male", age: 20 },
  { name: "Handler", gender: "female", age: 45 },
];

export default function Arrays() {
  const adults = spyFamilyCharacters.filter((character) => character.age > 18);
  const sortedByAge = spyFamilyCharacters.sort((a, b) => a.age - b.age);
  console.log(sortedByAge);

  return (
    <>
      <h2>Array methods explained with Spy x Family</h2>
      <h4>Characters</h4>
      <ul>
        {spyFamilyCharacters.map(({ name, gender, age }) => {
          return (
            <li key={name}>
              {name}, {gender}, is {age} years old.
            </li>
          );
        })}
      </ul>
      <h4>Adult Characters</h4>
      <ul>
        {adults.map(({ name }, index) => {
          return <li key={index}>{name} is over 18 years old.</li>;
        })}
      </ul>
      <h4>Characters sorted by age</h4>
      <ul>
        {sortedByAge.map(({ name, age }, index) => {
          return (
            <li key={index}>
              {name}, {age}
            </li>
          );
        })}
      </ul>
    </>
  );
}
