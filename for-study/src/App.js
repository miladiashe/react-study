import React from 'react';
import MyComponent from "./MyComponent";
import MyClassComponent from "./MyClassComponent";
import Say from "./Say";

function App() {
  return (
    <div>
        <MyComponent>칠드런</MyComponent>
        <MyClassComponent>칠드런1</MyClassComponent>
        <Say />
    </div>
  );
}

export default App;
