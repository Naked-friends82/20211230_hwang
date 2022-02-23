import { useState } from 'react';

const ShiftInfo = (EXHI) => {
  const [info, setInfo] = useState('');

  const shiftInfo = (e) => {
    const {target: {alt}} = e;
    for(let i=0; i < EXHI.length; i++){
      if (alt === EXHI[i].title){
        setInfo(EXHI[i])
      }
    }
  }

  const shiftInfoPack = [info, shiftInfo]

  return shiftInfoPack
}

export default ShiftInfo;