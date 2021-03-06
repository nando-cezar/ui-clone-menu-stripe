import React, { useCallback, useEffect, useState } from 'react';

import Context, { OptionModel } from '../Model/Context';

const DropdownProvider: React.FC = ({ children }) => {

  const [registeredOptions, setRegisteredOptions] = useState<OptionModel[]>([]);
  const [targetId, setTargetId] = useState<number>(0);
  const [cachedId, setCachedId] = useState<number>(0);

  const registerOption = useCallback((model: OptionModel) => {
    setRegisteredOptions(items => [...items, model]);
  }, [setRegisteredOptions]);

  const updateOptionProps = useCallback((optionId: number, content: any) => {
    setRegisteredOptions((items) => items.map((item) => {
      if (item.id === optionId) {
        item = { ...item, ...content };
      }
      return item;
    }));
  }, [setRegisteredOptions]);

  const getOptionById = useCallback((optionId: number) => {
    return registeredOptions.find((item) => item.id === optionId) || null;
  }, [registeredOptions]);

  const deleteOptionById = useCallback((optionId: number) => {
    setRegisteredOptions((items) => items.filter((item) => item.id !== optionId));
  }, [setRegisteredOptions]);

  useEffect(() => {
    if (targetId !== 0) setCachedId(targetId);
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
      {children}
    </Context.Provider>
  );
};
export default DropdownProvider;
