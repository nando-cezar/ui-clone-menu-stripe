import React from 'react';

import { Company, Developers, Products } from '../Content';
import { DropdownOption, DropdownProvider, DropdownRoot } from './Dropdown';
import { Container, DropdownStyles } from './styles';

const Navbar: React.FC = () => {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Products"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Developers"
                content={Developers}

                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="Company"
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
};

export default Navbar;
