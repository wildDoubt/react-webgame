import {InputNumber} from 'antd';

function BPMCount({style,disabled, valueInfo, setValue}) {

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
                        color: style.color,
                        width: '50px',
                        marginLeft:'10px',
                    }
                }
                onChange={onChangeInputNumber}/>
        </>
    )
}

export default BPMCount;
