import Title from "antd/es/typography/Title";
import {useState} from 'react';

function BPMResult({style, result}) {
    const [state, setState] = useState('waiting');

    const renderResult = () => {
        return state === 'waiting'
            ? <Title style={style}>
                당신은 1분 동안 {result.toFixed(1)}번 누를 수 있습니다.
            </Title>
            : null;
    }

    return (
        <>
            {renderResult()}
        </>
    )
}

export default BPMResult;
