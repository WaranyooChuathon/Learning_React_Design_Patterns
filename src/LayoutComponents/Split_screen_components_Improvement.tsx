import styled from 'styled-components';
import type { FC } from 'react';

const Container = styled.div`
  display: flex;
`;

interface PanelProps {
  weight: number;
}

const Panel = styled.div<PanelProps>`
  flex: ${props => props.weight};
`;

interface SplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
    leftWeight?: number;
    rightWeight?: number;
    childen?: React.ReactNode;
}

export const SplitScreenImprovent: FC<SplitScreenProps> = ({leftWeight = 1,rightWeight = 1, childen }) => {
    const [left, right] = childen as [React.ReactNode, React.ReactNode];
  return (
    <Container >
      <Panel weight={leftWeight}>
        {left}
      </Panel>
      <Panel weight={rightWeight}>
        {right}
      </Panel>
    </Container>
  );
};