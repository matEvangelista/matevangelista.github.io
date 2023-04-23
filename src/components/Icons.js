export default function Icons({ tech }) {
    return (
        <i  key={tech}
            className={`devicon-${tech}-plain${
                tech === "javascript" ? "" : "-wordmark"
            }`}
        ></i>
    );
}
