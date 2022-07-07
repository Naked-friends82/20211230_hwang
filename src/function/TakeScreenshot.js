import React from 'react';
import { useScreenshot } from 'use-react-screenshot';


const TakeScreenshot = (ref,screenshotRef) => {
  const [screenshot, takeScreenShot] = useScreenshot();

  const takeescreenshot = () => {
    console.log(screenshotRef.current)
    takeScreenShot(screenshotRef.current);
    alert('화보가 완성되었습니다.');
    alert('저장하고 싶다면 화면 오른쪽 하단 저장 버튼을 누르세요.');
    // if (ref.current.className === "eter_spreadH"){
    //   alert("카메라 왼쪽 버튼을 눌러 화면을 전환하세요.");
    // }else{
    //   console.log(screenshotRef.current)
    //   takeScreenShot(screenshotRef.current);
    //   alert('화보가 완성되었습니다.');
    //   alert('저장하고 싶다면 화면 오른쪽 하단 저장 버튼을 누르세요.');
    // }
  };
  const preventEmpty = (e) => {
    if(screenshot === null){
      alert('그림을 화면에 배치한 후 카메라 버튼을 눌러 화면을 저장하세요.')
    }
  }

  const TakeScreenshotPack = [screenshot, takeescreenshot, preventEmpty]

  return TakeScreenshotPack
}

export default TakeScreenshot;