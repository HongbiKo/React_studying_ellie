import React, { useState } from 'react';
import './AppXY.css'

export default function AppXY() {
  const [xy, setXY] = useState({x: 0, y: 0, z:0});

  return (
    <div className="container" onPointerMove={(e) => {
      // setXY({x:e.clientX, y:e.clientY});

      //  수평으로 이동하기 -> 이전 상태값 이용
      // setXY( (prev) => ({x: e.clientX, y: prev.y}));

      // 상태에 여러 값을 사용 -> spread 연산자 이용
        setXY((prev) => ({...prev, x:e.clientX}));
    }}>
      <div className='pointer' style={{transform : `translate(${xy.x}px, ${xy.y}px)`}}/>
    </div>
  );
}

