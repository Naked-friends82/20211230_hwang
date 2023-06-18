import React from 'react';
import hungry from '../asset/group/poster_hungry.jpg';
import sing from '../asset/group/poster_sing.jpg';
import hang from '../asset/group/poster_hang.jpg';
import death from '../asset/group/poster_death.jpg';
import carve from '../asset/group/poster_carve.jpg';
import shinjin from '../asset/group/poster_shinjin.jpg';
import ilmin from '../asset/group/poster_ilmin.jpg';

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
        place: "KSD 갤러리 - 서울 영등포구 여의나루로4길 23",
        donat: "서울문화재단 서교예술실험센터",
      },
      {
        title: "황씨화보 (Eternal classics)",
        date: "2022.07.01-2022.07.30",
        place: "OCI 미술관 - 서울 종로구 수송동 우정국로 45-14",
        donat: "OCI 2022 YOUNG CREATIVES"
      },
      {
        title: "Group Exhibitions",
        date: "다시 그린 세계: 한국화의 단절과 연속",
        place: "믿음(しんじん, Belief)",
        donat: "배 위에 새겨 두고",
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
        title: "다시 그린 세계: 한국화의 단절과 연속",
        date: "2022.10.28-2023.1.8",
        place: "황규민, 노한솔, 로랑 그라소 (총 13명)",
        donat: "일민미술관",
        imgSrc: ilmin
      },
      {
        title: "믿음(しんじん, Belief)",
        date: "2022.04.30-2022.05.29",
        place: "손승범, 황규민",
        donat: "SPACE 55, 서울 은평구 증산로19길 9-3",
        imgSrc: shinjin
      },
      {
        title: "배 위에 새겨 두고",
        date: "2022.02.15-2022.03.08",
        place: "임재형, 황규민",
        donat: "ART SPACE O, 서울 마포구 잔다리로 65",
        imgSrc: carve
      },
      {
        title: "나의 사인이 너와 같다면",
        date: "2021.05.10-2021.05.20",
        place: "로지은, 오윤, 황규민",
        donat: "서한국예술종합학교 미술원 2F 복도 갤러리",
        imgSrc: death
      },
      {
        title: "P는 그림을 걸었다",
        date: "2021.10.05-2021.11.06",
        place: "황규민 외 20명",
        donat: "디피 d/p, 서울 종로구 삼일대로 428, 낙원악기상가 417호",
        imgSrc: hang
      },
      {
        title: "노래하던 새들도 지금은 사라지고",
        date: "2020.08.12-2020.08.31",
        place: "박지은, 진지현, 차현욱, 황규민",
        donat: "산수문화, 서울시 관악구 조원로 154",
        imgSrc: sing
      },
      {
        title: "어쨌든 아주 배가 고팠던 모양이구나",
        date: "2020.01.22-2020.01.30",
        place: "이은정, 황규민",
        donat: "SPACE 55, 서울시 은평구 증산로 19길 9-1",
        imgSrc: hungry
      }
    ]
  ];

  return EXHI_INFO[index]

};

export default Exhi_INFO;