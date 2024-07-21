import Section from './components/Article';
import { Container } from './components/Container';
import Header from './components/Header';
import { Content, Tile, Title, Table, List, Item } from './components/Tile';
import { myCurrentSkills, myFutureSkills } from './features/Homepage/skills';


function App() {
  return (
    <Container>
      <Header />
      <Section
        title="My skillset includes 🛠️"
        body={myCurrentSkills}
      />
      <Section
        title="What I want to learn next 🚀"
        body={myFutureSkills}
      />
    </Container >
  );
}

export default App;
