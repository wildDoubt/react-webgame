import {Input, InputNumber} from 'antd';
import React, {useState, useRef} from 'react';

function BPMCount({disabled, valueInfo, setValue}) {
    const onChangeInputNumber = (value) => {
        setValue({value: value});
    }

    return (
        <InputNumber
            disabled={disabled}
            min={valueInfo.minValue}
            max={valueInfo.maxValue}
            maxLength={2}
            value={valueInfo.value}
            onChange={onChangeInputNumber}/>
    )
}

export default BPMCount;
