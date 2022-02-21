import React, { useCallback, useEffect, useState } from 'react';

import Context, { OptionModel } from '../Context';

import { Container } from './styles';

const DropdownProvider: React.FC = ({ children }) => {

  const [registeredOptions, setRegisteredOptions] = useState<OptionModel[]>([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);

  const registerOption = useCallback((model: OptionModel) => {
    setRegisteredOptions(items => [...items, model]);
  }, [setRegisteredOptions]);

  const updateOptionProps = useCallback((optionId: any, props: OptionModel) => {
    setRegisteredOptions((items) => items.map((item) => {
      if (item.id === optionId) {
        item = { ...item, ...props };
      }
      return item;
    }));
  }, [setRegisteredOptions]);

  const getOptionById = useCallback((optionId: any) => {
    registeredOptions.find((item) => item.id === optionId)
  }, [registeredOptions]);

  const deleteOptionById = useCallback((optionId: any) => {
    setRegisteredOptions((items) => items.filter((item) => item.id !== optionId));
  }, [setRegisteredOptions]);

  useEffect(() => {
    if (targetId !== null) setTargetId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registeredOptions,
        targetId,
        cachedId,
        setTargetId,
        setCachedId,
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById
      }}
    >
      <Container>
        {children}
      </Container>
    </Context.Provider>
  );
};

export default DropdownProvider;
