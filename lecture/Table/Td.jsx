import React, {useCallback} from 'react';
import {CLICK_CELL, CHANGE_TURN} from "../TicTacToe";

const Td = ({rowIndex, cellIndex, dispatch, cellData})=>{
    const onClickTd = useCallback(()=>{
        console.log(rowIndex, cellIndex);
        // dispatch를 하면 reducer에서 잘 처리해줘야 한다.
        dispatch({type:CLICK_CELL, row:rowIndex, cell:cellIndex})
        dispatch({type:CHANGE_TURN});
    }, [])

    return (
        <td onClick={onClickTd}>{cellData}
        </td>
    )
}

export default Td;
