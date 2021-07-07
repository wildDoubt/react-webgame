import {Input} from 'antd';
import React, {useState} from 'react';

function BPMKeyInput({keyValue}) {
    const [value, setValue] = useState(keyValue)

    const onChangeInput = (event) => {
        setValue(event.target.value);
    }

    return (
        <Input
            {...value}
            style={{width: 120, textAlign: 'center'}}
            maxLength={1}
            placeholder="Choose a key"
            defaultValue={keyValue}
            onChange={onChangeInput}/>
    )
}

export default BPMKeyInput;
