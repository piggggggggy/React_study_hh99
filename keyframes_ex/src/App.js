import React from "react";
import styled, {keyframes} from "styled-components";

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const move = keyframes`
  0%{
    top: 20px;
    opacity: 1;
    left: 20px;
    background-color: green;
    border-radius: 50px;
  }
  30%{
    top: 300px;
  }
  50%{
    top: 600px;
    opacity: 0;
    left: 400px;
    background-color: purple;
    border-radius: 150px;
  }
  80%{
    top: 300px;
  }
  100%{
    top: 20px;
    opacity: 1;
    left: 20px;
    background-color: green;
    border-radius: 50px;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  border-radius: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${move} 2s 1s infinite;
`;




export default App;
