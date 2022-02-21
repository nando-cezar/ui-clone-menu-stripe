import React from 'react';

export interface OptionModel {
    id: any;
    optionDimensions: any;
    optionCenterX: any;
    wrapperContent: any;
    backgroundHeight: any;
}

interface Context {
    registeredOptions: OptionModel[];
    targetId: any;
    cachedId: any;
    setTargetId: any;
    setCachedId: any;
    registerOption: (model: OptionModel) => void;
    updateOptionProps: (optionId: any, props: OptionModel) => void;
    getOptionById: (optionId: any) => void;
    deleteOptionById: (optionId: any) => void;
} 

export default React.createContext<Context>({} as Context);