import {
  Collection,
  Create,
  Get,
  Index,
  Lambda,
  Map as FaunaMap,
  Match,
  Paginate,
} from "faunadb";
import { db } from "~/db";
import { Person } from "~/person";

async function getPeople() {
  const data: { data: { data: Person }[] } = await db.query(
    FaunaMap(
      Paginate(Match(Index("people")), {
        size: 10,
      }),
      Lambda((ref) => Get(ref))
    )
  );
  return data.data.map((entry: any) => entry.data);
}

async function createPerson(person: Person) {
  await db.query(
    Create(Collection("people"), {
      data: person,
    })
  );
}
export const PersonCollection = {
  create: createPerson,
  readAll: getPeople,
};
