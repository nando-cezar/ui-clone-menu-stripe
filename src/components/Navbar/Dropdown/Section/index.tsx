import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import Context from '../Model/Context';

import { Container } from './styles';

interface Props{
  option: any;
}

const DropdownSection: React.FC<Props> = ({ option }) => {

  const { cachedId } = useContext(Context);

  const { id, optionCenterX, contentDimensions } = option;

  const contentWidth = contentDimensions?.width || 0;
  const x = optionCenterX - contentWidth / 2;

  const isActive = cachedId === id;

  return (
    <Container>
      <motion.div
        className="dropdown-section"
        initial={{
          x,
        }}
        animate={{
          x,
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'unset' : 'none',
        }}
        transition={{
          ease: 'easeOut',
          opacity: { duration: 0.2 },
        }}
      >
        <option.WrappedContent />
      </motion.div>
    </Container>
  );
};

export default DropdownSection;
