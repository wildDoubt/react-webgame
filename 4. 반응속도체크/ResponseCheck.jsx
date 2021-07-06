const React = require('react')
const {useRef, useState, useCallback, useMemo} = React;

function ResponseCheck() {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const timeout = useRef();
    const start_time = useRef();
    const end_time = useRef();
    const reset_button = useRef();
    const response_button = useRef();

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
            setState('result');
            setResult((prevResult) => ([
                ...prevResult,
                end_time.current - start_time.current,
            ]));
            setMessage('결과')
        } else if (state === 'result') {
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
        }
    })

    const onReset = () => {
        setState('waiting');
        setMessage('클릭해서 시작하세요.')
        setResult([]);
    }

    const renderAverage = useCallback(() => {
        return result.length === 0
            ? null
            : <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
    })

    const renderResetButton = useCallback(() => {
        return state === 'result'
            ? <button
                id="resetButton"
                ref={reset_button}
                onClick={onReset}>
                RESET
            </button>
            : null
    })

    return (
        <>
            <div
                style={{display: "flex"}}>
                <p style={{margin: "auto"}}>{result.length === 0 ? 'ㅤ' : `${result[result.length - 1]}ms`}</p>
            </div>
            <button
                ref={response_button}
                id="screen"
                className={state}
                onClick={onClickScreen}>
                {message}<br/>{renderAverage()}
            </button>
            {renderResetButton()}

        </>
    )
}

export default ResponseCheck;
