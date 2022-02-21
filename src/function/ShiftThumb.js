import { useEffect, useState } from 'react';

const ShiftThumb = (initial_value, ref_deck) => {
  const [thumb, setThumb] = useState(initial_value);

  useEffect(() => {
    for(let i = 0; i < ref_deck.length; i++ ){
      if (thumb === ref_deck[i].current.alt){
        ref_deck[i].current.scrollIntoView({behavior: "smooth", inline: "center"});
      }
    }
  }, [thumb])

  const changeThumb = (e) => {
    const {target:{alt}} = e;
    setThumb(alt)
  };
  const shiftThumbPack = [thumb, changeThumb]

  return shiftThumbPack
}

export default ShiftThumb;