export type Person = {
  name: string;
};

export function getPeople() {
  const people: Person[] = [
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
  return people;
}
