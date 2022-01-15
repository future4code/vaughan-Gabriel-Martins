import styled from "styled-components";

const MainContainerBox = styled.div`
  height: 80vh;
  width: 40vh;
  border: 1px solid black;
  box-shadow: 0 1px 50px 5px rgba(255, 255, 255, 0.4);
  background: rgba(220, 226, 192, 0.849);
  margin: 5% auto;
  position: relative;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: flex-end;
  border-radius: 20px
  overflow: scroll;
  // overflow: hidden;
`;

const MainContainer = ({ children, size }) => {
  return <MainContainerBox>{children}</MainContainerBox>;
};

export default MainContainer;
