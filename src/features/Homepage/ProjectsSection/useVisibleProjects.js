import { useState, useEffect } from "react";

const useVisibleProjects = (projects, initialVisibleCount = 4) => {
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    const [isExpanded, setIsExpanded] = useState(false);

    const filteredProjects = projects.filter(project => project.description);

    useEffect(() => {
        setVisibleCount(initialVisibleCount);
    }, [filteredProjects.length]);

    const handleShowMore = () => {
        setIsExpanded(true);
        setVisibleCount(filteredProjects.length); // Показываем все проекты с описанием
    };

    const handleShowLess = () => {
        setIsExpanded(false);
        setVisibleCount(initialVisibleCount);
    };

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMoreProjects = filteredProjects.length > visibleCount;

    return {
        visibleProjects,
        hasMoreProjects,
        handleShowMore,
        handleShowLess,
        isExpanded
    };
};

export default useVisibleProjects;