import './App.css';
import { Container } from './components/Container';
import { Caption, Content, Image, Tile, Title, Text, Button, Table, List, Item } from './components/Tile';
import personalPhoto from './images/personal-photo.jpg'

function App() {
  return (
    <Container>
      <Tile>
        <Image src={personalPhoto} alt="" />
        <Content>
          <Caption>
            THIS IS
          </Caption>
          <Title>
            Maksim Padrabinkin
          </Title>
          <Text>
            👨🏻‍💻  I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.
          </Text>
          <Button>
            Hire me
          </Button>
        </Content>
      </Tile>
      <Tile variant>
        <Content>
          <Title h2>My skillset includes 🛠️</Title>
          <Table>
            <List>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
              <Item>
              Semantic & accessible HTML
              </Item>
            </List>
          </Table>
        </Content>
      </Tile>
    </Container >
  );
}

export default App;
