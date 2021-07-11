import React from 'react';
import Tr from "./Tr";

const Table = ({onClick, tableData, dispatch})=>{
    return (
        <table onClick={onClick}>
            {Array(tableData.length).fill().map((tr, i)=>{
                // return <Tr rowData={tr}/>;
                // undefined에서 map을 하기 때문에 위에 쓴거처럼 사용 X
                return <Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]}/>;
            })}
        </table>
    )
}

export default Table;
