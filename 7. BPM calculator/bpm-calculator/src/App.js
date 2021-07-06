import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import BPMTitle from './BPM/BPMTitle';
import BPMForm from './BPM/BPMForm';
import BPMCount from './BPM/BPMCount';
import BPMKeyInput from './BPM/BPMKeyInput';

const style = {padding: '8px 0', textAlign: 'center'};

const App = () => (
    <>
        <Row>
            <Col
                span={24}
                style={style}>
                <BPMTitle/>
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
                <BPMForm/>
            </Col>
        </Row>
        <Row>
            <Col
                span={24}
                style={style}>
                <BPMCount/>
            </Col>
        </Row>
    </>
);

export default App;
