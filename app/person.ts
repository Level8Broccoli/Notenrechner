export type Person = {
  name: string;
};

let people = [
  {
    name: "Schüler1",
  },
  {
    name: "Schüler2",
  },
  {
    name: "Schüler3",
  },
];

export function getPeople() {
  console.log("get People", people);
  return people;
}

export function createPerson(person: Person) {
  people = [...people, person];
  console.log("create Person", people);
}
