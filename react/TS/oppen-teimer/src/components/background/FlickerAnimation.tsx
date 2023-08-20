import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const flickerAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.1; }
  100% { opacity: 1; }
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: orange;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle, yellow, orange 1px, black 1px);
  background-size: 50px 50px;
  opacity: 0.5;
  animation: ${flickerAnimation} 0.2s infinite;
`;

interface LayerProps {
    style?: React.CSSProperties;
}

// Interface for MultiLayerContainer component
interface MultiLayerContainerProps {
    children?: React.ReactNode;
}

const MultiLayerContainer: FC<MultiLayerContainerProps> = ({ children }) => (
    <Container>
        <Layer />
        <Layer style={{ animationDelay: '0.1s' }}/>
        <Layer style={{ animationDelay: '0.2s' }}/>
        {children}
    </Container>
);


const App: FC = () => {
    return (
        <MultiLayerContainer>
            {/* ... your other components */}
        </MultiLayerContainer>
    );
}

export default App;