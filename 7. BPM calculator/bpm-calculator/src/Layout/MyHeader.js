import React from 'react';
import {Switch} from "antd";

function MyHeader({setStyle}) {
    const body = document.body;

    const onChange = (e) => {
        if (e) {
            // console.log("light로 전환")
            setStyle((prevStyle) => ({
                ...prevStyle,
                color: '#000000',
            }));
            body.style.background = "#c0c0c0";
        } else {
            // console.log("dark로 전환")
            setStyle((prevStyle) => ({
                ...prevStyle,
                color: '#c0c0c0',
            }));
            body.style.background = "#282c34";
        }

    }
    return (
        <>
            <Switch
                checkedChildren="light"
                unCheckedChildren="dark"
                defaultChecked
                style={{margin: '20px'}}
                onChange={onChange}/>
        </>
    )
}

export default MyHeader;
