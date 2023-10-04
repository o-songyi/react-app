import React from 'react';

/* 비구조화 할당(구조분해) 문법 */
function Hello({color, name}) {
    return <div style={{color}}>Hello {name}</div>
}

/* defaultProps로 기본값 설정 */
Hello.defaultProps = {
    name: "이름없음"
}
export default Hello;