import React,{useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    // 배열 비구조화 할당을 통하여 각 원소를 추출
    //const numberState = useState(0);
    //const number = numberState[0];
    //const setNumber = numberState[1];

    const onIncrease = () => {
        // 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주는 대신
        // 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 업데이트 가능
        setNumber(prevNumber => prevNumber+1)
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber-1)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>+2</button>
        </div>
    );
}

export default Counter;