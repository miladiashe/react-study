import React from "react";

const MyComponent = ({name, children}) => {
    return (
        <div>
            프롭스 사용 연습: {name}<br />
            칠드런 사용 연습: {children}
        </div>)
};

MyComponent.defaultProps = {
    name: "기본 이름"
};

export default MyComponent;
