import { useEffect, useState } from 'react';
import { scrollIntoView } from "seamless-scroll-polyfill";


const ShiftThumb = (initial_value, ref_deck) => {
  const [thumb, setThumb] = useState(initial_value);

  useEffect(() => {
    for(let i = 0; i < ref_deck.length; i++ ){
      if (thumb === ref_deck[i].current.alt){
        // safari, chrome 둘 다 작동한다.
        scrollIntoView(ref_deck[i].current,{behavior: "smooth", block: "center", inline: "center"});
        // ref_deck[i].current.scrollIntoView({behavior: "smooth", inline: "center"});
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