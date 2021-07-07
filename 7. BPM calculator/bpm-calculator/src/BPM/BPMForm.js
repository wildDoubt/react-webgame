import {Button, Slider} from 'antd';
import React, {useState, useRef} from 'react';
import BPMCount from "./BPMCount";
import Title from "antd/es/typography/Title";
import BPMResult from "./BPMResult";

function BPMForm({style, key1, key2}) {
    const [inputValue, setInputValue] = useState({value: 50, minValue: 10, maxValue: 90});
    const [disabled, setDisabled] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [recorded, setRecorded] = useState(false);
    const start_time = useRef();
    const end_time = useRef();
    const result_bpm = useRef(0.0);

    const onKeyPress = (e) => {
        const keyPress = String.fromCharCode(e.charCode).toUpperCase();

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

        if ((keyPress === key1 || keyPress === key2) && recorded === true) {
            setKeyCount((prevKeyCount) =>
                (prevKeyCount + 1)
            )
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
                setValue={setInputValue}/>
            <br/>
            <Button
                onClick={onClickStartButton}
                style={{margin: '10px auto'}}
                onKeyPress={onKeyPress}>시작</Button>
            <BPMResult style={style} result={result_bpm.current}/>
        </>
    )
}

export default BPMForm;