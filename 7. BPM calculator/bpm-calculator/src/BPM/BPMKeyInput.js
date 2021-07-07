import {Input} from 'antd';
import React from 'react';

function BPMKeyInput({keyValue, setKey}) {

    const onChangeInput = (event) => {
        setKey(event.target.value.toUpperCase())
    }

    return (
        <Input
            value={keyValue}
            style={{width: 120, textAlign: 'center'}}
            maxLength={1}
            placeholder="Choose a key"
            defaultValue={keyValue}
            onChange={onChangeInput}/>
    )
}

export default BPMKeyInput;
