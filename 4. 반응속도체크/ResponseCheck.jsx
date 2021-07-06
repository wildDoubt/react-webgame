const React = require('react')
const {useRef, useState, useCallback, useMemo} = React;

function ResponseCheck() {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const timeout = useRef();
    const start_time = useRef();
    const end_time = useRef();

    const onClickScreen = useCallback((e) => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.')
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                start_time.current = Date.now();
            }, Math.floor(Math.random() * 1000 + 2000));
        } else if (state === 'ready') {
            // 성급하게 클릭
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('초록색이 된 후에 클릭하세요!!!!!!!!!');
        } else if (state === 'now') {
            // 반응속도 체크
            end_time.current = Date.now();
            setState('waiting');
            setResult((prevResult) => ([
                ...prevResult,
                end_time.current - start_time.current,
            ]));
            setMessage('클릭해서 시작하세요.')
            console.log(result)
        }
    })

    const onReset = () => {
        setResult([]);
    }

    const renderAverage = useCallback(() => {
        return result.length === 0
            ? null
            : <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
    })

    return (
        <>
            <div>
                <p>{result.length===0 ? null : `${result[result.length - 1]}ms`}</p>
            </div>
            <button
                id="screen"
                className={state}
                onClick={onClickScreen}>
                {message}
            </button>
            <br/>
            <button
                onClick={onReset}>
                RESET
            </button>
            {renderAverage()}
        </>
    )
}

export default ResponseCheck;
