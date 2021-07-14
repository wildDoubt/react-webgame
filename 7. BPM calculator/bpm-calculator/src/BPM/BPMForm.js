import {Button, Slider} from 'antd';
import React, {useState, useRef, useEffect} from 'react';
import BPMCount from "./BPMCount";
import Title from "antd/es/typography/Title";
import BPMResult from "./BPMResult";

function BPMForm({style, key1, key2}) {
    const [inputValue, setInputValue] = useState({value: 50, minValue: 10, maxValue: 90});
    const [disabled, setDisabled] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [recorded, setRecorded] = useState(false);
    const [results, setResults] = useState([]);

    const start_time = useRef();
    const end_time = useRef();
    const result_bpm = useRef(0.0);



    useEffect(()=>{
        setResults((prevResults)=>(
            [...prevResults, result_bpm.current]
            )
        );
    }, [result_bpm.current]);

    const onKeyDown = (e) => {
        const keyDown = e.key.toUpperCase();

        if (keyCount === 0) {
            if (recorded === true) {
                // 기록 시작
                console.log('시작')
                setKeyCount(0);
                start_time.current = Date.now();
            }
        } else if (keyCount === inputValue.value) {
            console.log('끝')
            end_time.current = Date.now();
            result_bpm.current = inputValue.value * 60000 / (end_time.current - start_time.current);
            setRecorded(false);
            setDisabled(false);
            setKeyCount(0);
            return;
        }

        if ((keyDown === key1 || keyDown === key2) && recorded === true) {
            setKeyCount((prevKeyCount) =>
                (prevKeyCount + 1)
            )
            const temp_time = (keyCount * 60000 / (Date.now() - start_time.current));
            result_bpm.current = isNaN(temp_time)?0:temp_time;
        }

    }

    const onChangeSlider = (value) => {
        setInputValue((prevInputValue) => (
            {
                ...prevInputValue,
                value: value,
            }
        ));
    }

    const onClickStartButton = () => {
        setDisabled(true);
        setRecorded(true);
        setResults([]);
    }

    return (
        <>
            <Title
                level={2}
                style={style}>반복할 횟수를 설정해주세요.</Title>
            <Slider
                disabled={disabled}
                min={inputValue.minValue}
                max={inputValue.maxValue}
                defaultValue={inputValue.value}
                style={
                    {
                        width: '20%',
                        margin: '10px auto',
                    }
                }
                onChange={onChangeSlider}
                value={typeof inputValue.value === 'number' ? inputValue.value : 0}
            />
            <BPMCount
                disabled={disabled}
                valueInfo={inputValue}
                setValue={setInputValue}
                style={style}/>
            <br/>
            <Button
                onClick={onClickStartButton}
                style={{margin: '10px auto'}}
                onKeyDown={onKeyDown}>시작</Button>
            <BPMResult style={style} results={results}/>
        </>
    )
}

export default BPMForm;
