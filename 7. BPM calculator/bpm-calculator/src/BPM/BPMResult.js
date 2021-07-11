import Title from "antd/es/typography/Title";
import {Line} from "react-chartjs-2"
import {memo, useCallback} from "react";

const BPMResult = memo(function BPMResult({style, results}) {

    const renderResultText = () => {
        return results[results.length - 1] > 0
            ? <Title style={style}>
                당신은 1분 동안 {results[results.length - 1].toFixed(1)}번 누를 수 있습니다.
            </Title>
            : <Title style={style}>
                측정 중입니다...
            </Title>;
    }

    const renderGraph = useCallback(() => {
        const data = {
            labels: Array.from({length: results.length-1}, (v, i) => i),
            datasets: [{
                label: 'BPM',
                data: results.slice(1, -1),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }],
        };
        const options = {
            animation: {
                duration: 0
            }
        }
        return <div
            style={
                {
                    textAlign: 'center',
                    width:'80%',
                    justifyContent:'center',
                    margin:'auto'
                }
            }>
            <Line
                data={data}
                type='line'
                options={options}
                width={4}
                height={1}/>
        </div>
    }, [results])

    return (
        <>
            {renderResultText()}
            {renderGraph()}
        </>
    )
})

export default BPMResult;
