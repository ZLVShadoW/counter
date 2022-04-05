import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {PanelSet} from './components/PanelSet/PanelSet';
import {Button} from './components/Button/Button';

type ValuesType = {
    maxValue: number
    startValue: number
}

export const App = () => {
    const [count, setCount] = React.useState(0)
    const [maxValue, setMaxValue] = React.useState(0)
    const [startValue, setStartValue] = React.useState(0)
    const [isEditSet, setIsEditSet] = React.useState(true)



    React.useEffect(() => {
        const val = localStorage.getItem('values')
        if (val) {
            let newVal: ValuesType = JSON.parse(val)
            setMaxValue(newVal.maxValue)
            setStartValue(newVal.startValue)
        }
    }, [])

    const inc = () => {
        count <= maxValue && setCount(prevState => prevState + 1)
    }

    const reset = () => {
        setCount(startValue)
    }

    const updateCount = () => {
        setCount(startValue)
        setIsEditSet(false)
        saveToLocalStorage()
    }

    const saveToLocalStorage = () => {
        const values = JSON.stringify({maxValue: maxValue, startValue: startValue})
        localStorage.setItem('values', values)
    }

    const onChangeMaxHandler = (value: string) => {
        setMaxValue(Number(value))
        setCount(0)
        setIsEditSet(true)
    }
    const onChangeStartHandler = (value: string) => {
        setStartValue(Number(value))
        setIsEditSet(true)
        setCount(0)
    }

    // ------------- 2
    // -------------- 2
    const [error, setError] = React.useState(false)
    React.useEffect(() => {
        if (count === maxValue || startValue === maxValue || maxValue < startValue || maxValue < 0 || startValue < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }, [count, startValue, maxValue])

    return (
        <div className="App">
            <header className="App-header">
                <PanelSet
                    maxValue={maxValue} startValue={startValue}
                    onChangeMaxHandler={onChangeMaxHandler} onChangeStartHandler={onChangeStartHandler}
                    updateCount={updateCount} isEditSet={isEditSet}
                />
                <Counter
                    isEditSet={isEditSet}
                    count={count}
                    maxValue={maxValue} startValue={startValue}
                    inc={inc} reset={reset}
                    error={error}
                />
                <div style={{position: 'absolute', left: 100, top: 100}}>
                    <Button onClick={() => localStorage.clear()} >Clear localStorage</Button>
                </div>
            </header>
        </div>
    );
}
