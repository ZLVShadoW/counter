import React from 'react';

import cn from './Counter.module.css'

import {DisplayInfo} from '../DisplayInfo/DisplayInfo';
import {ButtonsGroup} from '../ButtonsGroup/ButtonsGroup';
import {Button} from '../Button/Button';

type CounterType = {
    isEditSet: boolean
    maxValue: number
    startValue: number
    count: number
    inc: () => void
    reset: () => void
    error: boolean
}

export const Counter: React.FC<CounterType> = (
    {isEditSet, maxValue, startValue, count, inc, reset, error}
) => {
    return (
        <div className={cn.wrapper}>
            <DisplayInfo maxValue={maxValue} startValue={startValue} count={count}
                         isEditSet={isEditSet} error={error}
            />
            <ButtonsGroup>
                <Button onClick={inc} disabled={count === maxValue || isEditSet}>
                    inc
                </Button>
                <Button onClick={reset} disabled={isEditSet}>
                    reset
                </Button>
            </ButtonsGroup>
        </div>
    )
}
