const React = require('react')
const {useRef, useState, useCallback, memo} = React;

const Try = require('./TryHook').default

function getNumbers() {
    // 숫자 네 개 랜덤하게 뽑는 함수
    const candidate = Array.from({length: 10}, (v, i) => i);
    const arr = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        arr.push(chosen);
    }
    return arr;
}

const NumberBaseball = memo(() => {
    const [answer, setAnswer] = useState(getNumbers());
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [tries, setTries] = useState([]);
    const inputEl = useRef(null);

    const initState = () => {
        setResult('');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
    }

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (tries.length >= 9) {
            alert(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}입니다.`)
            alert('게임을 다시 시작합니다.')
            initState();
        } else {
            if (value === answer.join('')) {
                setResult('홈런');
                setTries((t) => ([
                    ...t,
                    {
                        try: value,
                        result: '홈런',
                    }
                ]));
                alert(`축하합니다. ${tries.length + 1}번 만에 맞추셨습니다!`);
                alert('게임을 다시 시작합니다.')
                initState();
            } else {
                let strike = 0, ball = 0;
                const value_arr = value.split('');
                value_arr.forEach((v, i) => {
                    if (answer.includes(parseInt(value_arr[i]))) {
                        if (parseInt(value_arr[i]) === answer[i]) {
                            strike++;
                        } else {
                            ball++;
                        }
                    }
                });
                const temp_result = `${strike} 스트라이크 ${ball} 볼`;
                setResult(temp_result);
                setTries((t) => ([
                    ...t,
                    {
                        try: value,
                        result: temp_result,
                    }
                ]));

            }
        }
        setValue('');
        inputEl.current.focus();
    }, [value, answer]);

    const onChangeInput = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((item, i) => {
                    return (
                        <Try key={`${i + 1}차 시도 : ${item.try}`} tryInfo={item} index={i}/>
                    )
                })}
            </ul>
        </>
    )
})

// key에는 중복되지 않는 고유한 값을 설정해줘야 함.
// => 성능 최적화와 관련된 문제

// module.exports랑 default랑 다름
// 노드에서 사용하는 방법이랑 다르다. => 바벨이 변환
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;

// module.exports = NumberBaseball
export default NumberBaseball
