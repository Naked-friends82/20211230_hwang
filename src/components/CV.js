import React from 'react';
import cvImg from '../asset/main/cvImg.jpg';

const CV = ({showDetail}) => {

  const CV_DETAIL={
    name:"황규민",
    school:"학력",
    school_cont: 
      <p>
        홍익대학교 미술대학 동양화과 졸업. 2019 <br/>
        서울대학교 미술대학원 동양화과 석사과정 졸업. 2023 <br/>
      </p>,
    solo:"개인전",
    solo_cont: 
      <p>
        황씨화보 (Eternal classics). 2022.07.01.-2022.07.30. OCI미술관, 서울 <br/>
        Penetrating Stone. 2020.04.23.-2020.05.27. KSD갤러리, 서울 <br/>
        Muh Emdap Inam Mo. 2019.08.01.-2019.08.11. 서교예술실험센터, 서울 <br/>
      </p>,
    group:"단체전",
    group_cont: 
      <p>
        물, 길. 2023.06.15.-2023.08.11. 한원미술관. 서울 <br />
        Exclusive: Mr.lawrence. 2022.12.15.-2023.02.26. GCS 개오망 크리에이티브 스튜디오. 서울 <br />
        다시 그린 세계: 한국화의 단절과 연속. 2022.10.28.-2023.01.08. 일민미술관. 서울 <br />
        믿음. 2022.04.30.-2022.05.29. SPACE55. 서울 <br />
        배 위에 새겨 두고. 2022.02.15.-2022.03.08. 아트스페이스 영. 서울 <br />
        P는 그림을 걸었다. 2021.10.05.-2021.11.06. d/p. 서울 <br />
        나의 사인(死因)이 너와 같다면. 2021.05.10.-2021.05.20. 복도갤러리, 한국예술종합학교 미술원, 서울 <br />
        너무 작은 심장. 2021.01.01.-2021.02.15. 광화문 교보문고, 서울 <br />
        노래하던 새들도 지금은 사라지고. 2020.08.12.-2020.08.31. 산수문화, 서울 <br />
        발화시發話時: 시간, 말이 되다. 스터디그룹 SNS. 2020.04.29.-2020.05.17. 공간:일리, 서울 <br />
        어쨌든 아주 배가 고팠던 모양이구나.이은정✕황규민 2인전. 2020.01.22.-2020.01.30. SPACE55, 서울 <br />
        AG 신진작가대상 선정작가전. 2019.05.21.-2019.06.28. 안국약품 AG갤러리, 서울 <br />
        제3회 뉴 드로잉 프로젝트. 2018.02.13.-2018.04.08. 양주시립장욱진미술관, 양주 <br />
      </p>,
    institut:"작품소장",
    institut_cont: 
      <p>
        OCI미술관 <br/>
        국립현대미술관 정부미술은행 <br/>
        안국약품 AG갤러리 <br/>
        양주시립장욱진미술관 <br/>
        서산시 <br/>
      </p>,
    
  }
  return(
    <>
    <div className="CV">
      <img className="CVImg" src={cvImg} alt="CV main"/>
      <div className="CVInfo">
        <div className="CVInfo_title">
          <h1>{CV_DETAIL.name}</h1>
          <button className="CVInfo_out" onClick={showDetail} ><i className='fa-solid fa-angle-left' /></button>
        </div>
        <h3>{CV_DETAIL.school}</h3>
        {CV_DETAIL.school_cont}
        <h3>{CV_DETAIL.solo}</h3>
        {CV_DETAIL.solo_cont}
        <h3>{CV_DETAIL.group}</h3>
        {CV_DETAIL.group_cont}
        <h3>{CV_DETAIL.institut}</h3>
        {CV_DETAIL.institut_cont}
        <button className="CVInfo_out" onClick={showDetail} ><i className='fa-solid fa-angle-left' /></button>
      </div>
    </div>
    <div className="CVInfo_back"></div>
    </>
  )
}

export default CV;