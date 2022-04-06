import React from 'react';

import cn from './Input.module.css'

type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    text: string
    error: boolean
    onChangeCb?: (value: string) => void
}

export const Input: React.FC<InputType> = ({text, error, onChangeCb, ...rest}) => {

    const oChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeCb && onChangeCb(e.currentTarget.value)


    }

    const cln = !error ? `${cn.default}` : `${cn.default} ${cn.error}`

    return (
        <div className={cn.groupIEl}>
            <div>{text} value:</div>
            <div className={cn.rightEl}>
                <input
                    onChange={oChangeHandler}
                    className={cln}
                    type={'number'}
                    {...rest}
                />
            </div>
        </div>
    )
}
