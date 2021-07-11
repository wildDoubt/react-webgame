import React, {useState} from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import BPMTitle from './BPM/BPMTitle';
import BPMForm from './BPM/BPMForm';
import BPMKeyInput from './BPM/BPMKeyInput';
import Title from "antd/es/typography/Title";
import MyHeader from "./Layout/MyHeader";

const App = () => {
    const [key1, setKey1] = useState('Z');
    const [key2, setKey2] = useState('X');
    const [style, setStyle] = useState({
        padding: '8px 0',
        textAlign: 'center',
        color:'#000000',
        backgrounds:'#282c34',
    })
    return (
        <>
            <MyHeader
                style={style}
                setStyle={setStyle}/>
            <Row>
                <Col
                    span={24}
                    style={style}>
                    <BPMTitle style={style}/>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={24}>
                    <Title level={3} style={style}>누를 키를 설정해주세요.</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={4} style={style}><BPMKeyInput style={style} keyValue={key1} setKey={setKey1}/></Col>
                <Col span={4} style={style}><BPMKeyInput style={style} keyValue={key2} setKey={setKey2}/></Col>
            </Row>
            <Row>
                <Col
                    span={24}
                    style={style}>
                    <BPMForm style={style} key1={key1} key2={key2}/>
                </Col>
            </Row>
        </>
    )
};

export default App;
