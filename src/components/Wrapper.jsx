import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  transition: padding 0.3s ease;

  @media (max-width: 1068px) {
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

export default Wrapper;
