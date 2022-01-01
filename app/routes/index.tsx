import { Table, Container, Segment } from "semantic-ui-react";

const names = ["Schüler1", "Schüler2"];

export default function Index() {
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
            {names.map(name => (
              <Table.Row>
                <Table.Cell>{name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </Container>
  );
}
