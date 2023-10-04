import React from 'react';

function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {/* 컴포넌트 태그 사이에 넣은값을 조회할때는 props.children */}
            {children}
        </div>
    )
}

export default Wrapper