import React from 'react';
import { Company, Developers, Products } from '../Content';
import { DropdownOption } from './Dropdown';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <DropdownOption 
            name="Products"
            content={Products}
          />
        </li>
        <li>
          <DropdownOption 
            name="Developers"
            content={Developers}
          />
        </li>
        <li>
          <DropdownOption 
            name="Company"
            content={Company}
          />
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
