import * as crypto from "crypto";
import { PersonCollection } from "./storage/PersonCollection";

export type Person = {
  uuid: string;
  name: string;
};

export async function getPeople() {
  return await PersonCollection.readAll();
}

export async function createPerson(name: string) {
  const person = { name, uuid: crypto.randomUUID() };
  await PersonCollection.create(person);
}
