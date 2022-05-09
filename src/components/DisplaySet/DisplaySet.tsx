import React from 'react';

import cn from './DisplaySet.module.css'
import {Input} from '../Input/Input';

type DisplaySetType = {
    maxValue: number
    startValue: number
    onChangeMaxHandler: (value: string) => void
    onChangeStartHandler: (value: string) => void
}

export const DisplaySet: React.FC<DisplaySetType> =
    ({onChangeMaxHandler, onChangeStartHandler, maxValue, startValue}) => {
        return (
            <div className={cn.wrapper}>
                <Input name={'maxValue'}
                       text={'max'}
                       value={maxValue}
                       error={maxValue <= startValue || maxValue < 0}
                       onChangeCb={onChangeMaxHandler}/>
                <Input name={'startValue'}
                       text={'start'}
                       error={startValue >= maxValue || startValue < 0}
                       value={startValue}
                       onChangeCb={onChangeStartHandler}/>
            </div>
        )
    }
