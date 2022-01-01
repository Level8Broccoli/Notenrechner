import { Client } from "faunadb";

export const db = new Client({
  domain: process.env.FAUNADB_DOMAIN,
  secret: process.env.FAUNADB_SECRET!,
});
