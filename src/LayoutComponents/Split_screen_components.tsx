import styled from 'styled-components';
import type { FC } from 'react';

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
`;

interface SplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
}

export const SplitScreen: FC<SplitScreenProps> = ({ left: Left, right: Right }) => {
  return (
    <Container className="flex h-screen">
      <Panel>
        <Left />
      </Panel>
      <Panel className="w-1/2 p-4 bg-gray-200">
        <Right />
      </Panel>
    </Container>
  );
};