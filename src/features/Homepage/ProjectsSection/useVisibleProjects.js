import { useState } from "react";

const useVisibleProjects = (projects, initialVisibleCount = 4) => {
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowMore = () => {
        setIsExpanded(true);
        setVisibleCount(projects.length);
    };

    const handleShowLess = () => {
        setIsExpanded(false);
        setVisibleCount(initialVisibleCount);
    };

    const visibleProjects = projects.slice(0, visibleCount);
    const hasMoreProjects = projects.length > visibleCount;

    return {
        visibleProjects,
        hasMoreProjects,
        handleShowMore,
        handleShowLess,
        isExpanded
    };
};

export default useVisibleProjects;