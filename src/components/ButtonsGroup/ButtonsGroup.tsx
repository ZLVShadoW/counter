import React from 'react';

import cn from './ButtonsGroup.module.css'

type ButtonsGroupType = {

}

export const ButtonsGroup: React.FC<ButtonsGroupType> = ({children}) => {
    return (
        <div className={cn.buttonsGroup}>
            {children}
        </div>
    )
}