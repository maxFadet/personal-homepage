import Header from "./Header";
import Section from "../../components/SkillSet";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import { resources } from "../../components/Resources/resources";
import { Container } from "../../components/Container";

const Homepage = ({ darkMode, toggleTheme }) => (
    <Container>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Section title="My skillset includes 🛠️" skills={resources.currentSkills} />
        <Section title="What I want to learn next 🚀" skills={resources.futureSkills} />
        <ProjectsSection />
        <Footer />
    </Container>
);

export default Homepage;