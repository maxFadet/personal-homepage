import { Loading } from "./Loading";
import { Error } from "./Error";
import useProjects from "./useProjects";
import useVisibleProjects from "./useVisibleProjects";
import {
    ProjectGrid,
    ProjectTile,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    ProjectLink,
    Button,
    SeeMoreButtonContainer,
} from "./styled";
import Header from "./Header";

const ProjectsSection = () => {
    const { projects, isLoading, isError } = useProjects();
    const {
        visibleProjects,
        handleShowMore,
        handleShowLess,
        isExpanded
    } = useVisibleProjects(projects);

    if (isLoading) return <Loading />;
    if (isError) return <Error />;

    const tilesWithFlags = visibleProjects.map((project, index) => {
        const isLastTwo = !isExpanded && (index >= visibleProjects.length - 2);
        const isHiddenOnTablet = !isExpanded && (index === visibleProjects.length - 2);
        return { ...project, isLastTwo, isHiddenOnTablet };
    });

    return (
        <>
            <Header />
            <ProjectGrid isExpanded={isExpanded}>
                {tilesWithFlags
                    .filter(project => project.description)
                    .map((project) => (
                        <ProjectTile
                            key={project.id}
                            isLastTwo={project.isLastTwo}
                            isHiddenOnTablet={project.isHiddenOnTablet}
                        >
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <ProjectLinks>
                                <ProjectDescription>Demo:</ProjectDescription>
                                <ProjectLink
                                    href={project.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.homepage}
                                </ProjectLink>
                                <ProjectDescription>Code:</ProjectDescription>
                                <ProjectLink
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.html_url}
                                </ProjectLink>
                            </ProjectLinks>
                        </ProjectTile>
                    ))}
            </ProjectGrid>
            <SeeMoreButtonContainer isExpanded={isExpanded}>
                <Button onClick={isExpanded ? handleShowLess : handleShowMore}>
                    {isExpanded ? 'Hide' : 'See more'}
                </Button>
            </SeeMoreButtonContainer>
        </>
    );
};

export default ProjectsSection;