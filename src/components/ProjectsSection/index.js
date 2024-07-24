import {
    HeaderWrapper,
    GithubMark,
    Header,
    SubHeader,
    Grid,
    Tile,
    Title,
    Description,
    Links,
    Link,
} from "./styled";
import projects from "./projects";

const ProjectsSection = () => (
    <>
        <HeaderWrapper>
            <GithubMark />
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
        </HeaderWrapper>
        <Grid>
            {projects.map((project, index) => (
                <Tile key={index}>
                    <Title>{project.title}</Title>
                    <Description>{project.description}</Description>
                    <Links>
                        <Description>Demo: </Description>
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.demoLink}</Link>
                        <Description>Code: </Description>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">{project.codeLink}</Link>
                    </Links>
                </Tile>
            ))}
        </Grid>
    </>
);

export default ProjectsSection;
