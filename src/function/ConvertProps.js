// savedReck_rdx의 변화가 있을때마다 확인
const convertProps = (savedReck_rdx,IMG_RECK) => {
  const tmp = []
  for (const each of savedReck_rdx){
    tmp.push(each.imgId)
  }
  for (const eachImg of IMG_RECK){
    if (tmp.includes(eachImg.id)){
      if (eachImg.className[0] === 'dragablImg'){
        eachImg.func(['dragablImg filter', 'false']);
      }
    } else{
      if (eachImg.className[0] = 'dragablImg filter'){
        eachImg.func(['dragablImg', 'img']);
      }
    }
  }
};

export default convertProps;