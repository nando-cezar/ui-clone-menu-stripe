import React, { Dispatch, SetStateAction } from 'react';

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
    targetId: number;
    cachedId: number;
    setTargetId: Dispatch<SetStateAction<number>>;
    setCachedId: Dispatch<SetStateAction<number>>;
    registerOption: (model: OptionModel) => void;
    updateOptionProps: (optionId: number, content: any) => void;
    getOptionById: (optionId: number) => OptionModel | null;
    deleteOptionById: (optionId: number) => void;
} 

export default React.createContext<Context>({} as Context);