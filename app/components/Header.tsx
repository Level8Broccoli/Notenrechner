import { Menu, Container } from "semantic-ui-react";

export default function Header() {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item as='a' header>
          Notenrechner
        </Menu.Item>
      </Container>
    </Menu>
  );
}
