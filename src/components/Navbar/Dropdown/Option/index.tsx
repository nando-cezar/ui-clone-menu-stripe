import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Context from '../Model/Context';

import { Container } from './styles';
import { useDimensions } from '../Model/useDimensions';

interface Props {
  name: string;
  content: React.FC;
  backgroundHeight: number;
}

let lastOptionId = 0;

const DropdownOption: React.FC<Props> = ({ name, content: Content, backgroundHeight }) => {

  const idRef = useRef<number>(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    targetId,
    setTargetId,
    registerOption,
    updateOptionProps,
    deleteOptionById,
  } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrapperContent = () => {
        const contentRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
          const contentDimensions = contentRef.current?.getBoundingClientRect();
          updateOptionProps(id, { contentDimensions });
        }, []);

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }


      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrapperContent,
        backgroundHeight
      })

      setRegistered(true);
    } else if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    registerOption,
    id,
    registered,
    optionDimensions,
    updateOptionProps,
    deleteOptionById,
    backgroundHeight
  ]);

  useEffect(() => deleteOptionById(id), [deleteOptionById, id]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTouch = () => ((window as any).isMobile = true);

  const handleClick = (e: any) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  return (
    <Container>
      <motion.button
        className="dropdown-option"
        ref={optionHook}
        onMouseDown={handleClick}
        onHoverStart={() => !(window as any).isMobile && handleOpen()}
        onHoverEnd={() => !(window as any).isMobile && handleClose()}
        onTouchStart={handleTouch}
        onFocus={handleOpen}
        onBlur={handleClose}
      >
        {name}
      </motion.button>
    </Container>
  );
};
export default DropdownOption;
