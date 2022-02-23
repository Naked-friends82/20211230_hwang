import { useState } from 'react';

const SaveScreenshot = (screenshot) => {
  const [loadImg, setLoadImg] = useState(null);
  const [toLoad, setToLoad] = useState();

  const setClickedImgToLoad = (e) => {
    const {target:{src,alt}} = e;
    setLoadImg(src)
    setToLoad(alt)
  }
  const banEmpty = () => {
    if (screenshot === null){
      alert("Take screenshot with camera button")
    } else if (loadImg === null){
      alert("Choose one of them")
    }
  }

  const SaveScreenshotPack = [toLoad, setClickedImgToLoad, banEmpty, loadImg]

  return SaveScreenshotPack
}

export default SaveScreenshot;