import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import BPMTitle from './BPM/BPMTitle';
import BPMForm from './BPM/BPMForm';
import BPMKeyInput from './BPM/BPMKeyInput';
import Title from "antd/es/typography/Title";

const style = {
    padding: '8px 0',
    textAlign: 'center',
    color:'#DFDFDF',
};

const App = () => (
    <>
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
            <Col span={4} style={style}><BPMKeyInput keyValue='Z'/></Col>
            <Col span={4} style={style}><BPMKeyInput keyValue='X'/></Col>
        </Row>
        <Row>
            <Col
                span={24}
                style={style}>
                <BPMForm style={style}/>
            </Col>
        </Row>
    </>
);

export default App;
