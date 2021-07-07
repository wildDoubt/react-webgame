import {Button, Slider} from 'antd';
import React, {useState, useRef} from 'react';
import BPMCount from "./BPMCount";
import Title from "antd/es/typography/Title";
import BPMResult from "./BPMResult";

function BPMForm({style}) {
    const [inputValue, setInputValue] = useState({value:50, minValue:10, maxValue:90});
    const [disabled, setDisabled] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [keyRecord, setKeyRecord] = useState(false);

    const onChangeSlider = (value) => {
        setInputValue({value:value});
    }

    const onClickStartButton = ()=>{
        setDisabled(true);
        setKeyRecord(true);
    }

    return (
        <>
            <Title level={2} style={style}>반복할 횟수를 설정해주세요.</Title>
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
            <BPMCount disabled={disabled} valueInfo={inputValue} setValue={setInputValue}/>
            <br/>
            <Button onClick={onClickStartButton} style={{margin:'10px auto'}}>시작</Button>
            <BPMResult style={style}/>
        </>
    )
}

export default BPMForm;
