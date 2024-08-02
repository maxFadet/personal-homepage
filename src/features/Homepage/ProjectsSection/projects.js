import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from "./Loading"
import { Error } from "./Error"
import {
    Grid,
    Tile,
    Title,
    Description,
    Links,
    Link,
} from "./styled";
import { fetchDataRequest } from './projectsSlice';
import { Head } from "./Head";

const ProjectsSection = () => {
    const dispatch = useDispatch();
    const { data: projects, isLoading, isError } = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, [dispatch]);

    return (
        <>
            <Head />
            {isLoading && <Loading />}
            {isError && <Error />}
            {!isLoading && !isError && (
                <Grid>
                    {projects.map(project => (
                        <Tile key={project.id}>
                            <Title>{project.name}</Title>
                            <Description>{project.description}</Description>
                            <Links>
                                <Description>Demo: </Description>
                                <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                                    {project.homepage}
                                </Link>
                                <Description>Code: </Description>
                                <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    {project.html_url}
                                </Link>
                            </Links>
                        </Tile>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default ProjectsSection;