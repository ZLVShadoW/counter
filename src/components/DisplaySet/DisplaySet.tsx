import React from 'react';

import cn from './DisplaySet.module.css'
import {Input} from '../Input/Input';

type DisplaySetType = {
    maxValue: number
    startValue: number
    onChangeMaxHandler: (value: string) => void
    onChangeStartHandler: (value: string) => void
}

export const DisplaySet: React.FC<DisplaySetType> = (
    {onChangeMaxHandler, onChangeStartHandler, maxValue, startValue}
) => {

    //TODO - для проверки
    const [state, setState] = React.useState<{secondM: string, secondV: string}>({
        secondM:'0',
        secondV:'0'
    })

    const func = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const val = e.currentTarget.value

        //TODO - почему нельзя динамически через e.currentTarget.name и e.currentTarget.value - выдаёт ошибку при втором вводе
        // числа либо следующем вводе на другом поле
        // setState(prevState => ({...prevState, [e.currentTarget.name]: e.currentTarget.value}))
        setState(prevState => ({...prevState, [name]: val}))
    }

    console.log(state)

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

            <hr style={{width: '100%'}} />

            <Input name={'secondM'}
                   text={'secondM'}
                   value={state.secondM}
                   error={maxValue <= startValue || maxValue < 0}
                   onChange={func}/>
            <Input name={'secondV'}
                   text={'secondV'}
                   error={startValue >= maxValue || startValue < 0}
                   value={state.secondV}
                   onChange={func}/>

        </div>
    )
}
