const React = require('react')
const Component = React.Component;

class Try extends Component{
    render(){
        return (
            <li>
                <b>{this.props.index}번 째 시도</b>
                <br/>
                {this.props.value.try}: {this.props.value.result}
            </li>
        )
    }
}

export default Try;
