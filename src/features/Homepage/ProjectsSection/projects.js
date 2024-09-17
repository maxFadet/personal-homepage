import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from "./Loading";
import { Error } from "./Error";
import {
    ProjectGrid,
    ProjectTile,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    ProjectLink,
} from "./styled";
import { fetchProjects } from './projectsSlice';
import Header from "./Header";

const ProjectsSection = () => {
    const dispatch = useDispatch();
    const { projects, isLoading, isError } = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <>
            <Header />
            {isLoading && <Loading />}
            {isError && <Error />}
            {!isLoading && !isError && (
                <ProjectGrid>
                    {projects
                        .filter(project => project.description)
                        .map(project => (
                            <ProjectTile key={project.id}>
                                <ProjectTitle>{project.name}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <ProjectLinks>
                                    <ProjectDescription>Demo: </ProjectDescription>
                                    <ProjectLink href={project.homepage} target="_blank" rel="noopener noreferrer">
                                        {project.homepage}
                                    </ProjectLink>
                                    <ProjectDescription>Code: </ProjectDescription>
                                    <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
                                        {project.html_url}
                                    </ProjectLink>
                                </ProjectLinks>
                            </ProjectTile>
                        ))}
                </ProjectGrid>
            )}
        </>
    );
};

export default ProjectsSection;