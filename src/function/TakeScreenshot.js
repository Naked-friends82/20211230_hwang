import { useEffect, useState } from 'react';
import { useScreenshot } from 'use-react-screenshot';


const TakeScreenshot = (ref) => {
  const [screenshot, takeScreenShot] = useScreenshot();
  const [screenshotReck, setScreenshotReck] = useState([]);


  const takeescreenshot = () => {
    if (ref.current.className === "eter_spreadH"){
      alert("Change Mode");
    }else{
      takeScreenShot(ref.current);
    }
  };

  useEffect(()=>{
    if(screenshotReck.length < 4){
      const newScreenshotReck = [...screenshotReck, screenshot];
      setScreenshotReck(newScreenshotReck);
    } else{
      alert("Sorry, You can only get 3 screenshot Images")
    }
  },[screenshot]);

  const TakeScreenshotPack = [screenshot, screenshotReck, takeescreenshot]

  return TakeScreenshotPack
}

export default TakeScreenshot;