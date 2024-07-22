import { Container } from './components/Container';
import Header from './components/Header';
import Section from './components/Article';
import ProjectsSection from './components/ProjectsSection';
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
      <ProjectsSection />
    </Container>
  );
}

export default App;
