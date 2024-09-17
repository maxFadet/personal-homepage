import { useState, useEffect } from "react";
import axios from "axios";
import { resources } from "../../../components/Resources/resources";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const response = await axios.get(resources.githubAPI);
                setProjects(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, isLoading, isError };
};

export default useProjects;