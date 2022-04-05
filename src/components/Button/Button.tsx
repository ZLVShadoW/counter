import React from 'react';

import cn from './Button.module.css'

type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {

}

export const Button: React.FC<ButtonType> = ({children, ...rest}) => {
    return (
        <>
         <button className={cn.default} {...rest}>
             {children}
         </button>
        </>
    )
}