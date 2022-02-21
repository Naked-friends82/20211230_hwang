import { useState } from 'react';

const ToggleDetail = () => {
  const [detail,setDetail] = useState(false);
  const showDetail = (e) => {
    setDetail(!detail)
  };
  const toggleDetailPack = [detail, showDetail]
  return toggleDetailPack;
}

export default ToggleDetail;