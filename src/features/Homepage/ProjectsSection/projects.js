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
    SeeMoreButton,
    SeeLessButton,
} from "./styled";
import Header from "./Header";

const ProjectsSection = () => {
    const { projects, isLoading, isError } = useProjects();
    const {
        visibleProjects,
        hasMoreProjects,
        handleShowMore,
        handleShowLess,
        isExpanded
    } = useVisibleProjects(projects);

    if (isLoading) return <Loading />;
    if (isError) return <Error />;

    const showMoreButton = (
        !isExpanded && hasMoreProjects && (
            <SeeMoreButton onClick={handleShowMore}>
                See more
            </SeeMoreButton>
        )
    );

    const showLessButton = (
        isExpanded && (
            <SeeLessButton onClick={handleShowLess}>
                Hide
            </SeeLessButton>
        )
    );

    return (
        <>
            <Header />
            <ProjectGrid>
                {visibleProjects
                    .filter(project => project.description)
                    .map(project => (
                        <ProjectTile key={project.id}>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <ProjectLinks>
                                    <ProjectDescription>
                                        Demo:
                                    </ProjectDescription>
                                <ProjectLink
                                    href={project.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.homepage}
                                </ProjectLink>
                                    <ProjectDescription>
                                        Code:
                                    </ProjectDescription>
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
            {showMoreButton}
            {showLessButton}
        </>
    );
};

export default ProjectsSection;