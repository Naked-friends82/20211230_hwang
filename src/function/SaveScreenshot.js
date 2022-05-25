import { useState } from 'react';

const SaveScreenshot = (screenshot) => {
  const [loadImg, setLoadImg] = useState(null);
  const [toLoad, setToLoad] = useState();

  const setClickedImgToLoad = (e) => {
    const {target:{src,alt}} = e;
    setLoadImg(src)
    setToLoad(alt)
  }

  const SaveScreenshotPack = [toLoad, setClickedImgToLoad, loadImg]

  return SaveScreenshotPack
}

export default SaveScreenshot;