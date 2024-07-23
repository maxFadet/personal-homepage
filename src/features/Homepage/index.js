import React from 'react';
import Header from '../../components/Header';
import Section from '../../components/Article';
import Footer from '../../components/Footer';
import ProjectsSection from '../../components/ProjectsSection';
import { currentSkills, futureSkills } from './skills';
import { Container } from '../../components/Container/index';

const Homepage = () => (
    <Container>
        <Header />
        <Section title="My skillset includes 🛠️" skills={currentSkills} />
        <Section title="What I want to learn next 🚀" skills={futureSkills} />
        <ProjectsSection />
        <Footer />
    </Container>
);

export default Homepage;