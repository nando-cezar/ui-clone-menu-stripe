import { motion } from 'framer-motion';
import React, { useContext, useMemo } from 'react';
import Context from '../../Model/Context';

import { Container } from './styles';

const refDuration = 0.22;

const DropdownBackground: React.FC = () => {
  
  const { cachedId, getOptionById } = useContext(Context);

  const cachedOption = useMemo(() => getOptionById(cachedId), [
    cachedId,
    getOptionById,
  ]);

  const backgroundHeight = cachedOption?.backgroundHeight || 0;

  return (
    <Container>
      <motion.div
        className="dropdown-background"
        animate={{
          height: backgroundHeight,
        }}
        transition={{
          ease: 'easeOut',
          duration: refDuration,
        }}
      />
    </Container>
  );
};

export default DropdownBackground;
