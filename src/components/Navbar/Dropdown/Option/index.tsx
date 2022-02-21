import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
  content: React.FC;
}

const DropdownOption: React.FC<Props> = ({ name, content }) => {
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
};

export default DropdownOption;
