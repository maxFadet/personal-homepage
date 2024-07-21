import { Container } from './components/Container';
import Header from './components/Header';
import { Content, Tile, Title, Table, List, Item } from './components/Tile';


function App() {
  return (
    <Container>
      <Header />
      <Tile variant>
        <Content>
          <Title h2>My skillset includes 🛠️</Title>
          <Table>
            <List>
              <Item>Semantic & accessible HTML</Item>
              <Item>Responsive Web Design</Item>
              <Item>Teamwork</Item>
              <Item>Markdown</Item>
              <Item>Immutability</Item>
              <Item>CSS BEM convention</Item>
              <Item>CSS Grid</Item>
              <Item>CSS Flexbox</Item>
              <Item>React Router</Item>
              <Item>Redux-Saga</Item>
              <Item>Redux (Toolkit)</Item>
              <Item>React Hooks</Item>
              <Item>Error handling</Item>
              <Item>Working with API (fetch, axios)</Item>
              <Item>JavaScript: ES6+</Item>
              <Item>Promises, Async/Await</Item>
              <Item>GitHub Pull Requests & Review</Item>
              <Item>Trello</Item>
              <Item>Scrum</Item>
              <Item>NPM</Item>
              <Item>React</Item>
              <Item>Git</Item>
            </List>
          </Table>
        </Content>
      </Tile>
      <Tile variant>
        <Content>
          <Title h2>What I want to learn next 🚀</Title>
          <Table>
            <List>
              <Item>React ContextL</Item>
              <Item>Node.js</Item>
              <Item>Cypress</Item>
              <Item>Unit testing</Item>
              <Item>TypeScript</Item>
              <Item>JS classes</Item>
            </List>
          </Table>
        </Content>
      </Tile>
    </Container >
  );
}

export default App;
