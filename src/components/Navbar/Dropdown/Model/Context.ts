import React from 'react';

export interface OptionModel {
    id: number;
    optionDimensions: any;
    contentDimensions?: any;
    optionCenterX: number;
    WrappedContent: () => JSX.Element;
    backgroundHeight: number;
}
 
interface Context {
    registeredOptions: OptionModel[];
    targetId: any;
    cachedId: any;
    setTargetId: any;
    setCachedId: any;
    registerOption: (model: OptionModel) => void;
    updateOptionProps: (optionId: number, content: any) => void;
    getOptionById: (optionId: number) => OptionModel | null;
    deleteOptionById: (optionId: number) => void;
} 

export default React.createContext<Context>({} as Context);