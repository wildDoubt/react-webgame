import React, {Component} from 'react'

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
}

const scores = {
    바위: 1,
    가위: 0,
    보: -1,
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

class RSPClass extends Component {
    state = {
        result: '',
        imgCoord: '0',
        score: 0,
        ended: false,
    };

    interval;

    changeHand = () => {
        const {imgCoord} = this.state;
        if (imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord: rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.바위,
            });
        }
    }

    componentDidMount() {
        // render가 처음에 성공적으로 실행되면 이거 실행
        // rerendering이 일어나면 실행하지 않음.
        // 주로 비동기 요청을 한다.
        if (!this.state.ended) {
            this.interval = setInterval(this.changeHand, 50);
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 리렌더링 후
        // console.log(this.state.ended);
    }

    componentWillUnmount() {
        // 컴포넌트가 제거되기 직전
        // 비동기 요청 정리를 주로 함.
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {
        clearInterval(this.interval);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.state.imgCoord)];
        const diff = cpuScore - myScore;
        if(this.state.ended){
            return;
        }else{
            this.setState({ended:true});
            if (diff === 0) {
                this.setState({
                    result: '비겼습니다!',
                });
            } else if ([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: '이겼습니다!',
                        score: prevState.score + 1,
                    }
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: '졌습니다!',
                        score: prevState.score - 1,
                    }
                });
            }
        }

        if (!this.state.ended) {
            setTimeout(() => {
                {
                    this.interval = setInterval(this.changeHand, 50);
                    this.setState({ended:false});
                }
            }, 2000);
        }
    }

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer"
                     style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
                <div>
                    <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>

        )
    }
}

export default RSPClass;
