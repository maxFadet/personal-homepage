import React from 'react';
import {
    Container,
    Content,
    Header,
    ProjectsGrid,
    ProjectCard,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    ProjectLink,
    Mark,
    Wrapper,
    SubHeader
} from "./styled";

const projects = [
    {
        title: "Movies Browser",
        description: "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
        demoLink: "https://link.demo.com",
        codeLink: "https://link.code.com"
    },
    {
        title: "Movies Browser",
        description: "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
        demoLink: "https://link.demo.com",
        codeLink: "https://link.code.com"
    },
    {
        title: "Movies Browser",
        description: "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
        demoLink: "https://link.demo.com",
        codeLink: "https://link.code.com"
    },
    {
        title: "Movies Browser",
        description: "Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.",
        demoLink: "https://link.demo.com",
        codeLink: "https://link.code.com"
    },
];

const ProjectsSection = () => {
    return (
        <Container>
            <Content>
                <Wrapper>
                    <Mark />
                    <Header>
                        Portfolio
                    </Header>
                    <SubHeader>
                        My recent projects
                    </SubHeader>
                </Wrapper>
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <ProjectLinks>
                                <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo: {project.demoLink}</ProjectLink>
                                <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">Code: {project.codeLink}</ProjectLink>
                            </ProjectLinks>
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </Content>
        </Container>
    );
};

export default ProjectsSection;
