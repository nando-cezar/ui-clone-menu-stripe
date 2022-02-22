import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Context from '../Model/Context';

import { useDimensions } from '../Model/useDimensions';

interface Props {
  name: string;
  content: React.FC;
  backgroundHeight: number;
}

declare global {
  interface Window {
    isMobile?: boolean;
  }
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
      const WrappedContent = () => {
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
        WrappedContent,
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
  const handleClose = () => setTargetId(0);
  const handleTouch = () => (window.isMobile = true);

  const handleClick = (e: any) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  return (
    <motion.button
      className="dropdown-option"
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => !window.isMobile && handleOpen()}
      onHoverEnd={() => !window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.button>
  );
};
export default DropdownOption;
