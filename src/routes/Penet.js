import React, { useEffect, useRef, useState } from 'react';
import EachDetail from '../components/EachDetail';

import ent_1 from '../asset/penet/entrances1.jpg'
import ent_2 from '../asset/penet/entrances2.jpg'
import ent_3 from '../asset/penet/entrances3.png'

import sam_1 from '../asset/penet/sameAsBefore1.jpg'
import sam_2 from '../asset/penet/sameAsBefore2.jpg'
import sam_3 from '../asset/penet/sameAsBefore3.png'

import bou_1 from '../asset/penet/boundaries1.jpg'
import bou_2 from '../asset/penet/boundaries2.jpg'
import bou_3 from '../asset/penet/boundaries3.png'

import sha_1 from '../asset/penet/shadow1.jpg'
import sha_2 from '../asset/penet/shadow2.jpg'
import sha_3 from '../asset/penet/shadow3.png'

import spo_1 from '../asset/penet/spotlight1.jpg'
import spo_2 from '../asset/penet/spotlight2.jpg'
import spo_3 from '../asset/penet/spotlight3.png'

import gra_1 from '../asset/penet/grass.jpg'

// import penet_video from '../asset/penet/penet.mp4';
import penetStone from '../asset/penet/penet.jpg'

import penet_exhi_2 from '../asset/exhi/penet_exhi_2.jpg';
import penet_exhi_4 from '../asset/exhi/penet_exhi_4.jpg';
import penet_exhi_5 from '../asset/exhi/penet_exhi_5.jpg';
import "../style/web/penet.css";
import "../style/mobile/penet_m.css";

// const IMG_RECK = [
//   {
//     title:'Entrances',
//     caption: '. 한지에 수묵. 180.0 × 130.3cm. 2020',
//     src: ent_1,
//   },
//   {
//     title:'하던대로 해주세요',
//     caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
//     src: sam_1,
//   },
//   {
//     title:'Spotlight',
//     caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
//     src: spo_1,
//   },
//   {
//     title:'그림자놀이',
//     caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
//     src: sha_1,
//   },
//   {
//     title:'Boundaries',
//     caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
//     src: bou_1,
//   },
// ];


const Penet = () =>  {
  const ent1 = useRef();
  const sam1 = useRef();
  const bou1 = useRef();
  const sha1 = useRef();
  const spo1 = useRef();
  
  const ent2 = useRef();
  const sam2 = useRef();
  const bou2 = useRef();
  const sha2 = useRef();
  const spo2 = useRef();

  const ent3 = useRef();
  const sam3 = useRef();
  const bou3 = useRef();
  const sha3 = useRef();
  const spo3 = useRef();

  const gra1 = useRef();


  const PENET_RECK = [
      {
        title:'Entrances',
        caption: '. 한지에 수묵. 180.0 × 130.3cm. 2020',
        src: ent_1,
        ref: ent1,
      },
      {
        title:'모방명가화보-Entrances',
        caption: '. 종이에 유성판화. 20.0 × 30.0cm. 2020',
        src: ent_2,
        ref: ent2,
      },
      {
        title:'모방명가화보-하던대로 해주세요',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: sam_2,
        ref: sam2,
      },
      {
        title:'모방명가화보-Boundaries',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: bou_2,
        ref: bou2,
      },
      {
        title:'모방명가화보-Spotlight',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: spo_2,
        ref: spo2,
      },
      {
        title:'모방명가화보-그림자놀이',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: sha_2,
        ref: sha2,
      },
      {
        title:'죽란보-불이선란도',
        caption: '. 종이에 유성판화. 30.0 × 20.0cm. 2020',
        src: gra_1,
        ref: gra1,
      },


      {
        title:'Entrances_print',
        caption: '. 한지에 먹가루. 57.0 × 89.5cm. 2020',
        src: ent_3,
        ref: ent3,
      },
      {
        title:'하던대로 해주세요_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: sam_3,
        ref: sam3,
      },
      {
        title:'Boundaries_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: bou_3,
        ref: bou3,
      },
      {
        title:'Spotlight_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: spo_3,
        ref: spo3,
      },
      {
        title:'그림자놀이_print',
        caption: '. 한지에 먹가루. 89.5 × 57.0cm. 2020',
        src: sha_3,
        ref: sha3,
      },


      {
        title:'하던대로 해주세요',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: sam_1,
        ref: sam1,
      },
      {
        title:'Boundaries',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: bou_1,
        ref: bou1,
      },
      {
        title:'Spotlight',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: spo_1,
        ref: spo1,
      },
      {
        title:'그림자놀이',
        caption: '. 한지에 수묵채색. 130.3 × 180.0cm. 2020',
        src: sha_1,
        ref: sha1,
      },



  ];
  
  const [penetThumb, setPenetThumb] = useState();

  useEffect(() => {
    setPenetThumb("Entrances. 한지에 수묵. 180.0 × 130.3cm. 2020")
  }, [])
  // ref 정해놓은거 바꾸는 작업
  useEffect(() => {
    console.log(penetThumb, );
    if (penetThumb === ent1.current.alt){
      ent1.current.scrollIntoView({behavior: "smooth", inline: "center"});
    } else if (penetThumb === ent2.current.alt){
      ent2.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === ent3.current.alt){
      ent3.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === sam1.current.alt){
      sam1.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === sam2.current.alt){
      sam2.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === sam3.current.alt){
      sam3.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === bou1.current.alt){
      bou1.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === bou2.current.alt){
      bou2.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === bou3.current.alt){
      bou3.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === sha1.current.alt){
      sha1.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === sha2.current.alt){
      sha2.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === sha3.current.alt){
      sha3.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === spo1.current.alt){
      spo1.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === spo2.current.alt){
      spo2.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === spo3.current.alt){
      spo3.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    } else if (penetThumb === gra1.current.alt){
      gra1.current.scrollIntoView({behavior: "smooth", inline: "center"}); 
    }
  }, [penetThumb])

  const shiftPenetThumb = (e) => {
    const {target:{alt}} = e;
    setPenetThumb(alt)
  };

  const [penetDetail,setPenetDetail] = useState(false)
  const showPenetDetail = (e) => {
    setPenetDetail(!penetDetail)
    console.log(penetDetail);
  }
  const penet_detailDeck = 
    {
      detailExhi:[
        penet_exhi_2,
        penet_exhi_4,
        penet_exhi_5,
      ],
      title: "뚫린 벼루",
      author: "백필균(독립큐레이터, 비공개영역)",
      paper:
      <div>
        
        《Penetrating Stone》은 일상에서 수집한 장면들에 대한 회화적 탐구와 철학적 사유를 이어온 황규민의 작업을 조명하는 전시이다. 전시 제목은 ‘열 개의 벼루가 뚫렸고, 천 자루의 붓이 닳았다(磨穿十硏 禿盡千毫)’고 전해지는 추사 김정희의 고백에서 비롯되었으나, 위 문장이 일반적으로 함의하는 ‘노력’의 가치가 아닌, 기성 가치 체계를 문제의식 없이 맹목적으로 따르는 양상을 투영한 반어적 표현이다. 같은 맥락에서 황규민의 ‘뚫린 벼루’ 연작은 ‘복제’의 알레고리를 통해 작가가 ‘동양화’ 학제 내부에서 체험한 자전적인 성찰을 담고 있다.<br /><br />
            
        회화가 시간을 조직한 기록이라면, 황규민의 ‘뚫린 벼루’ 연작은 크게 세 가지 기록으로 분류된다. 시간의 선형적인 순서에 따라 작업을 제1, 제2, 제3으로 이름 붙이고 하나씩 살펴보면, 우선 첫 번째인 제1작업은 작가가 자신과 주위 사람들에게서 수집한 일상의 사진 이미지를 수묵매체로 옮기는 시간이었다. 앞선 경험들의 집합에서 그가 사진을 수집하는 취향의 기준은 가상의 서사를 상상할 수 있거나 임의의 형상을 포착할 수 있는 화면인 듯했다. 매체의 호흡을 실험해온 작가는 수묵으로 다양한 재질감을 표현하며 ‘사진적인 것’과 ‘회화적인 것’ 사이의 균형점을 찾고 있다. 특히 호분이 두껍게 채색되어 평평한 면을 이루는 부분은 ‘텅 빈 공간’처럼 작용한다. 수묵으로 표현된 부분들과 선명한 대비를 이루는 상대는 화판의 물질성과 평면성을 번갈아 환기하며 서술적인 요소들을 호출하는 동시에 와해하는 중이었다. 그럼으로써 작업의 시간은, 오로지 회화 그 자체의 시간으로, 실제와 분리된다.<br /><br />
            
        이어진 제2작업에서 황규민은 별도의 목판화 연작을 만들었다. 화면은 제1작업의 약 20분의 1크기로, 도상, 테두리, 부제가 중심부터 순서대로 위치하고 있어서 그가 참고한 ‘개자원화보(芥子園畵譜)’의 형식과 비슷하다. ‘동양화’의 전형(canon)으로 인식되는 전통화보의 양식을 차용하는 패러디(parody)의 차원에서 제2는 자기 그림(제1)을 신화화하는 전략을 선택했다. 제2가 제작된 시기로부터 400여 년 전에 출판된 화보의 양식을 빌림으로써 동시대적 사건과 간극을 벌려 허구적 서사를 끼워 넣은 것이다. 제1작업의 위상을 고전의 반열에 올려놓는 제2작업의 태도는 제3작업까지 이어진다. ‘뚫린 벼루’의 제2작업이 전통 화보를 전유했듯이, 제1~3작업으로 이어진 ‘그림의 연속체(pictorial continuum)’는 전통회화를 모사해온 거시적 역사를 반추한다. 이는 전이모사 교육에 내재된 법고주의를 긍정하기보다 양식을 지나치게 강조하는 부분에 대한 ‘미러링(mirroring)’ 전략에 가깝다. <br /><br />
            
        그 진실유무와 상관없이 제2ㆍ3작업은 제1작업의 그림이 변이될 수 있는 가능태를 분명히 제시하고 있다. 여기서 ‘뚫린 벼루’ 연작이 같은 유전적인 정보로 이어진 그림의 연속체임에 주목해본다. 유전은 같지만 제작시기가 다른 개체들의 연속, 즉 동일한 주체에 의해 복수의 매체가 중첩되는 사건은 무엇을 의미하는가? 그들 사이에 일어나는 점진적인 변화의 방향은 어디로 향하고 있는가?<br /><br />
            
        연이은 질문의 연장선에서 황규민이 고안한 특별한 기계 하나를 살펴본다. 이 기계는 구멍난 철판 위에서 아교로 굳힌 먹을 그대로 갈아 가루로 만든다. 사람이 직접 벼루 위에 먹을 갈아 만드는 수행 대신 기계의 작동으로 모은 먹 입자는 단지 기존의 것과 그 크기만 달라진 것이 아니다. 이전의 관행을 덜어낸 작업은 특정한 예술적 전통과 거리를 두는 태도로부터 나아간다. ‘기계는 그가 작동하는 체계 외부에서 일어나는 변화에 대해서 반응하지 않는다’는 작가노트의 구절처럼, 물질만 생산하는 기계의 작업은 기존의 수행적인 준비단계가 함의하는 정신적 가치를 생략한다. 그 가루들을 제3작업의 안료로 쓰는 설정은 앞의 맥락을 견지하는 기준 중 하나이다. <br /><br />
            
        개자원화보가 옛 화본의 양식을 원본으로 전제하며 그대로 모방한 복수제작물인 반면, 황규민의 제2작업은 제1작업과 같은 저자가 경험한 실제와 직결되는 또 다른 원작이다. 후자는 앞서 이미지를 재현하는 회화로서의 제1에 대한 ‘복제’의 함수였지만, 그 과정에서 원형과 동기화한 부분이 있었다. 실제보다 더 실재적으로 보이는 그 값은 여전히 이미지가 작가의 기억에 접속하고 있음을, 그리고 한편의 가능성을 지니고 있음을 드러낸다. 앞서 복사물로 인식된 제2는 실제에 대한 기억이 유입되는 상황을 통해 자기만의 독립성을 지니는 개별적 존재의 위상으로 나아간다. 제2에서 작가가 참조한 이미지의 범위를 오직 개자원화보와 전작으로 제한한 설정은 실상 모순으로 밝혀진다.<br /><br /> 
            
        제3작업에서 ‘제2작업만을 참조해서 제1작업을 모방한다’는 전제조건은 그 자체로 문제가 없었다. 하지만 황규민에게 이 조건은 제2와의 대면적 참조관계만 의지한 채, 제1에 대한 경험을 무시하는 동시에 그것을 재연해야하는 역설이 있었다. 작가는 제3에서 제1보다 어눌하거나 허술한 필획을 사용했고, 앞서 발명한 기계로 모은 먹 가루를 재료로 삼아 발묵 표현의 미숙한 결과를 유도했고, 배접한 종이의 외곽을 칼로 무심하게 자르며 나름의 ‘모르는 척’ 연기를 펼쳤다. 하지만 제2에서 유실된 제1의 일부 정보가 다음 장면에서 다시 구현되었다. 제1의 이미지를 흑백체계로 변환한 제2가 전작에서 일어난 일을 흔적으로 남겨 자기의 특징에 전이했듯이, 제3 또한 제2의 특징들을 일부 반영했다. ‘미필적 고의’로 복원된 그들의 귀환을 막을 수 있었을까? 매체의 변주는 어느새 그 귀환이 이루어질 틈을 더 벌려놓는다. 이미 원본과 복사물의 경계는 사라졌다. ‘뚫린 벼루’ 연작의 각 개체들은 실제와 이어진 세계(simulacre)였다.<br /><br />
            
        과거의 계보로부터의 일탈을 통해 기존의 ‘무언가’를 털어내어 한결 가벼워진 예술은 이제 그 빈자리에 ‘새로운’ 것을 담으려 시도한다. 예술의 아득한 근원과 미래를 바라볼 때, 종국에 그것이 익숙한 재귀로 이어질지라도. <br /><br />
  
      </div>
    };

  return (
    <section className="section_penet">
      <div className="penet_title">
        <h1>Penetrating Stone</h1>
        <button onClick={showPenetDetail}>i</button>
      </div>
      <div className="penet_reck">
        {/* <video 
          className="penet_reck_video"
          controls
          src={penet_video} 
          poster={penetStone}
          type="video/mp4" />  */}
        {PENET_RECK.map((each) => {
            return <img className="penet_reck_each" src={each.src} alt={each.title+each.caption} ref={each.ref} />
          })}
      </div>
      <div className="img_info">
        <span>{penetThumb}</span>
      </div>
      <div className="penet_thumbnail">
        {PENET_RECK.map((each) => {
            return <img className={penetThumb === each.title+each.caption ? "penet_thumbnail_each":"penet_thumbnail_each filter"} src={each.src} alt={each.title+each.caption} onClick={shiftPenetThumb} />
          })}
      </div>
      {
      penetDetail ? <EachDetail detailDeck={penet_detailDeck} showDetail={showPenetDetail} />
      :(
      <></>
      )}
    </section>
  );
}

export default Penet;

