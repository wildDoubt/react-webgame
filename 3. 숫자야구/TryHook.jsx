const React = require('react')
const {memo} = React;

const Try = memo(({tryInfo, index}) => {
    return (
        <li>
            <b>{index+1}번 째 시도</b>
            <br/>
            {tryInfo.try}: {tryInfo.result}
        </li>
    );
});

export default Try;
