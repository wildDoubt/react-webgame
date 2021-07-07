import {InputNumber} from 'antd';

function BPMCount({disabled, valueInfo, setValue}) {

    const onChangeInputNumber = (value) => {
        setValue((prevValue) => (
            {
                ...prevValue,
                value: value,
            }
        ));
    }

    return (
        <>
            <InputNumber
                disabled={disabled}
                min={valueInfo.minValue}
                max={valueInfo.maxValue}
                bordered={false}
                maxLength={2}
                value={valueInfo.value}
                style={
                    {
                        color: 'white',
                        width: '50px',
                    }
                }
                onChange={onChangeInputNumber}/>
        </>
    )
}

export default BPMCount;
