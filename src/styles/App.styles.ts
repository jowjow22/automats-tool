import styled from 'styled-components';

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > canvas {
    border-radius: 10px;
  }
`