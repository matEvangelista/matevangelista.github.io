export default function Icons({ tech }) {
    return (
        <i
            className={`devicon-${tech}-plain${
                tech === "javascript" ? "" : "-wordmark"
            }`}
        ></i>
    );
}
