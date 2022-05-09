import React from 'react';

import cn from './DisplayInfo.module.css'

type DisplayInfoType = {
    isEditSet: boolean
    count: number
    maxValue: number
    startValue: number
    error: boolean
}

export const DisplayInfo: React.FC<DisplayInfoType> =
    ({isEditSet, count, maxValue, startValue, error}) => {
    // const cln = count === maxValue || startValue === maxValue || maxValue < startValue || maxValue < 0 || startValue < 0
    //     ? `${cn.displayInfo} ${cn.maxValue}`
    //     : `${cn.displayInfo}`

    // if (maxValue === startValue || maxValue < startValue || maxValue < 0 || startValue < 0) {
    //     return (
    //         <div className={cln}>
    //             incorrect value
    //         </div>
    //     )
    // }

    //-------------------- 2 variant
    const cln = error
        ? `${cn.displayInfo} ${cn.maxValue}`
        : `${cn.displayInfo}`

    if (error) {
        return (
            <div className={cln}>
                incorrect value
            </div>
        )
    }
    if (isEditSet) {
        return (
            <div className={cln}>
                enter values and press 'set'
            </div>
        )
    }
    return (
        <div className={cln}>
            {count}
        </div>
    )
}
