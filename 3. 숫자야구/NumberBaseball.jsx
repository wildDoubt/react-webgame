const React = require('react')
const Component = React.Component;
const Try = require('./Try').default

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

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    initState = () => {
        this.setState({
            result: '',
            value: '',
            answer: getNumbers(),
            tries: [],
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.tries.length >= 9) {
            alert(`10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}입니다.`)
            alert('게임을 다시 시작합니다.')
            this.initState();
        } else {
            if (this.state.value === this.state.answer.join('')) {
                this.setState({
                    result: '홈런!',
                    // push를 사용하면 react에서 바뀌지 않았다고 판단해서 render하지 않음.
                    tries: [...this.state.tries, {try: this.state.value, result: '홈런!'}],
                });
                alert(`축하합니다. ${this.state.tries.length+1}번 만에 맞추셨습니다!`);
                alert('게임을 다시 시작합니다.')
                this.initState();
            } else {
                let strike = 0, ball = 0;
                const value_arr = this.state.value.split('');
                value_arr.forEach((v, i) => {
                    if (this.state.answer.includes(parseInt(value_arr[i]))) {
                        if (parseInt(value_arr[i]) === this.state.answer[i]) {
                            strike++;
                        } else {
                            ball++;
                        }
                    }
                });
                const temp_result = `${strike} 스트라이크 ${ball} 볼`;
                this.setState({
                    result: temp_result,
                    tries: [...this.state.tries, {try: this.state.value, result: temp_result}],
                });
            }
        }

        this.setState({
            value: '',
        })
    }

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        console.log(this.state.answer)
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((item, i) => {
                        return (
                            <Try key={item + i} value={item} index={i + 1}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

// key에는 중복되지 않는 고유한 값을 설정해줘야 함.
// => 성능 최적화와 관련된 문제

// module.exports랑 default랑 다름
// 노드에서 사용하는 방법이랑 다르다. => 바벨이 변환
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;

// module.exports = NumberBaseball
export default NumberBaseball
