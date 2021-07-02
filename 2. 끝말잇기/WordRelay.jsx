const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
    const [word, setWord] = useState('최원영')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const inputRef = useRef(null)

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (word[word.length - 1] === value[0]) {
            setResult('정답')
            setWord(value)
        } else {
            setResult('오답')
        }
        setValue('')
        inputRef.current.focus()
    }


    const onChange = (e) => {
        setValue(e.target.value)
    }


    return <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
            <input ref={inputRef} value={value} onChange={onChange}/>
            <button>입력!</button>
        </form>
        <div>{result}</div>
    </>

}

module.exports = WordRelay
