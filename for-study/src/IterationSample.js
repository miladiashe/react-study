import React from "react";

const IterationSample = () => {
    const names = ['미카엘라', '렌', '미나'];
    const nameList = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>
};

export default IterationSample;