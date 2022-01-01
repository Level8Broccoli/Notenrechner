import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  ActionFunction,
} from "remix";
import { Table, Container, Segment, Input } from "semantic-ui-react";
import { createPerson, getPeople, Person } from "~/person";
import invariant from "tiny-invariant";

type NameError = {
  name?: boolean;
};

export const loader = () => {
  return getPeople();
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");

  const errors: NameError = {};
  if (!name || name.toString().trim().length === 0) errors.name = true;
  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof name === "string");

  await createPerson({ name });

  return redirect("/");
};

export default function Index() {
  const people = useLoaderData<Person[]>();
  const errors = useActionData();
  return (
    <Container>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Namen</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {people.map((person) => (
              <Table.Row key={person.name}>
                <Table.Cell>{person.name}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell>
                <Form method="post">
                  <Input placeholder="Neue Person..." name="name" />
                </Form>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Container>
  );
}
