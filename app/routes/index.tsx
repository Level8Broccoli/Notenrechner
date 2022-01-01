import { useLoaderData } from "remix";
import { Table, Container, Segment } from "semantic-ui-react";
import { getPeople, Person } from "~/person";

export const loader = () => {
  return getPeople();
};

export default function Index() {
  const people = useLoaderData<Person[]>();
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
            {people.map(person => (
              <Table.Row>
                <Table.Cell>{person.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </Container>
  );
}
