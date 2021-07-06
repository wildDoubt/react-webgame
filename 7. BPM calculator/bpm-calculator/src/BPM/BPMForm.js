import {Button, Slider} from 'antd';
import React, {useState} from 'react';

function BPMForm() {
    const [inputValue, setInputValue] = useState(50);

    const onChangeSlider = (value) => {
        setInputValue(value);
    }

    return (
        <>
            <Slider
                min={10}
                max={90}
                defaultValue={50}
                style={
                    {
                        width: '20%',
                        margin: '10px auto',

                    }
                }
                onChange={onChangeSlider}
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
            {inputValue}회
            <Button>시작</Button>
        </>
    )
}

export default BPMForm;
