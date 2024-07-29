import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Grid,
    Tile,
    Title,
    Description,
    Links,
    Link,
} from "./styled";
import { Head } from "./Head";

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/maxFadet/repos');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching data from GitHub", error);
            }
        };
        fetchProjects();
    }, []);

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