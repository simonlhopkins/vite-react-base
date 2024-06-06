import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <StyledApp>
      <img src="/cat-no.gif" alt="" />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: url("/greenmesh.gif");
`;

export default App;
