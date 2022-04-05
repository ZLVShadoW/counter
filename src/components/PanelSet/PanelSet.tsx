import React from 'react';

import cn from './PanelSet.module.css'

import {DisplaySet} from '../DisplaySet/DisplaySet';
import {ButtonsGroup} from '../ButtonsGroup/ButtonsGroup';
import {Button} from '../Button/Button';

type PanelSetType = {
    isEditSet?: boolean
    maxValue: number
    startValue: number
    updateCount: () => void
    onChangeMaxHandler: (value: string) => void
    onChangeStartHandler: (value: string) => void
}

export const PanelSet: React.FC<PanelSetType> = (
    {
        maxValue, startValue,
        updateCount, onChangeMaxHandler, onChangeStartHandler,
        isEditSet
    }) => {

    const isTrue = maxValue === startValue || maxValue < startValue || maxValue < 0 || startValue < 0  || !isEditSet

    return (
        <div className={cn.wrapper}>
            <DisplaySet onChangeMaxHandler={onChangeMaxHandler}
                        onChangeStartHandler={onChangeStartHandler}
                        maxValue={maxValue} startValue={startValue}
            />
            <ButtonsGroup>
                <Button onClick={updateCount} disabled={isTrue}>
                    set
                </Button>
            </ButtonsGroup>
        </div>
    )
}
