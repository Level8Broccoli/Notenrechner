import * as crypto from "crypto";
import {
  Client,
  Create,
  Collection,
  Map as FaunaMap,
  Index,
  Lambda,
  Match,
  Paginate,
  Get,
} from "faunadb";

const client = new Client({
  domain: process.env.FAUNADB_DOMAIN,
  secret: process.env.FAUNADB_SECRET!,
});

export type Person = {
  id: number;
  name: string;
};

export async function getPeople() {
  const data: { data: { data: Person }[] } = await client.query(
    FaunaMap(
      Paginate(Match(Index("people")), {
        size: 10,
      }),
      Lambda((ref) => Get(ref))
    )
  );
  return data.data.map((entry: any) => entry.data);
}

export async function createPerson(name: string) {
  await client.query(
    Create(Collection("people"), {
      data: { name, id: crypto.randomUUID() },
    })
  );
}
