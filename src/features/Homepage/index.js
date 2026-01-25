import Header from "./Header";
import Section from "../../components/SkillSet";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import { resources } from "../../components/Resources/resources";
import { Container } from "../../components/Container";
import { ScrollToTopButton } from "../../components/Button"
import { scrollToTop } from "../../components/utils/scrollToTop"

const Homepage = () => {

    return (
        <Container>
            <Header />
            <Section title="My skillset includes 🛠️" skills={resources.currentSkills} />
            <Section title="What I want to learn next 🚀" skills={resources.futureSkills} />
            <ProjectsSection />
            <Footer />
            <ScrollToTopButton onClick={scrollToTop}>
                ↑
            </ScrollToTopButton>
        </Container>
    );
};


export default Homepage;