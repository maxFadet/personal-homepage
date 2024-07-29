import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
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
    const { data: projects, loading, error } = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Head />
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
        </>
    );
};

export default ProjectsSection;
