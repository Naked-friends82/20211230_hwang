import React from 'react';

const Exhi_INFO = (index) => {
  // EXHI_INFO[0]는 Work.js를 위한 데이터
  // EXHI_INFO[1]는 Group.js 를 위한 데이터
  const EXHI_INFO = [
    [
      {
        title: "MUH EMDAP INAM MO",
        date: "2019.08.01-2019.08.11",
        place: "서교예술실험센터 - 서울 마포구 잔다리로6길 33 지하",
        donat: "서울문화재단 서교예술실험센터"
      },
      {
        title: "Penetrating Stone",
        date: "2020.04.23-2020.05.27",
        place: "KSD 갤러리 - 서울시 영등포구 여의나루로4길 23",
        donat: "서울문화재단 서교예술실험센터",
      },
      {
        title: "Eternal classics",
        date: "준비 중",
        place: "OCI 미술관",
        donat: "OCI 2021 YOUNG CREATIVES"
      },
      {
        title: "Group Exhibitions",
        date: "나의 사인이 너와 같다면 외 3회",
        place: "",
        donat: ""
      },
      {
        title: "Exhibition Detail",
        date: "Statement",
        place: "Installation View",
        donat: "Review"
      },
    ],
    [
      {
        title: "나의 사인이 너와 같다면",
        date: "2021.05.10-2021.05.20",
        place: "로지은, 오윤, 황규민",
        donat: "서한국예술종합학교 미술원 2F 복도 갤러리"
      },
      {
        title: "P는 그림을 걸었다",
        date: "2021.10.05-2021.11.06",
        place: "황규민 외 20명",
        donat: "디피 d/p, 서울 종로구 삼일대로 428, 낙원악기상가 417호",
      },
      {
        title: "노래하던 새들도 지금은 사라지고",
        date: "2020.08.12-2020.08.31",
        place: "박지은, 진지현, 차현욱, 황규민",
        donat: "산수문화, 서울시 관악구 조원로 154"
      },
      {
        title: "어쨌든 아주 배가 고팠던 모양이구나",
        date: "2020.01.22-2020.01.30",
        place: "이은정, 황규민",
        donat: "SPACE 55, 서울시 은평구 증산로 19길 9-1"
      }
    ]
  ];

  return EXHI_INFO[index]

};

export default Exhi_INFO;