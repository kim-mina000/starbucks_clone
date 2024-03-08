// 검색 영역(.search)클릭 시 강제 포커스 및 제어
// 검색 영역 div와 input 찾기

const divSearch = document.querySelector('div.search');
//const searchInput = document.querySelector('div.search input'); // 문서 전체에서 찾게됨 아래와 같이 최적화
const searchInput = divSearch.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스 하도록 실행
divSearch.addEventListener('click',function () {
  searchInput.focus(); //요소에 포커스 강제 적용
});

// input 요소에 포커스focus 되면 placeholder추가 setAttribute
searchInput.addEventListener('focus',function () {
  searchInput.setAttribute("placeholder","통합검색");
  // divSearch.classList.add('focused');
  // 또는 focused 클래스 추가 없이 선택하는 법
  // css로 input에 :focus 됐을때 바로 다음으로 오는 형제 아이콘을 선택
});

// input 요소에 포커스 해제(blur)되면 placeholder 초기화 
searchInput.addEventListener('blur',function () {
  searchInput.removeAttribute("placeholder");
  // divSearch.classList.remove('focused');
});


// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체 (js를 사용하여 브라우저 전체를 제어 가능)

window.addEventListener('scroll',function () {
  // y축으로 얼마나 스크롤 했는지(페이지 스크롤 위치)
  console.log(window.scrollY);

  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기!
  if (window.scrollY < 500) {
    // badgeEl.style.opacity = 1;
    // badgeEl.style.visibility = "visible";
    // 애니메이션 라이브러리 사용 gsap cdn
  // gsap.to (애니메이션처리를 할 '요소' , 애니메이션 '지속시간','옵션(데이터 타입 객체':{}) css속성을 통해 애니메이셔 처리
    gsap.to(badgeEl,0.6,{
    opacity: 1 ,
    display: "block"
  });  

} else {
    // badgeEl.style.opacity = 0;
    // badgeEl.style.visibility = "hidden";
      gsap.to(badgeEl,0.6,{
      opacity: 0 ,
      display: "none"
    });
  }
  // opacity visibility => 애니메이션 가능 display => 애니메이션 불가능
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index) {
  // console.log(item,index);
  // fadeEl.classList.remove('fade-in');
  // gsap.to(요소, 지속시간,옵션:{});
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index+1)*0.7
  });
});

// const itemContents = document.querySelector('.main-menu .item__contents');

// itemContents.addEventListener('mouseenter',function () {
//   console.log(`dd`);
//   gsap.to(itemContents,0.7,{ height:'500px'});
// });

// 공지사항 수직 슬라이드 기능
// new 키워드로 swiper 객체를 생성=>슬라이드 기능을 생성
// new Swiper (요소,{ 옵션: });
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(API 페이지 참고)

new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical', //수직슬라이드 <-> 수평:horizental
  loop: true, //반복재생여부
  autoplay: true //자동재생여부
});

// 프로모션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal', //수직슬라이드 <-> 수평:horizental
  loop: true, //반복재생여부
  autoplay: {delay:5000}, //5초마다 슬라이드 바뀜 (기본값 3000)
  slidesPerView:3, //한 번에 보여줄 슬라이드 개수 (기본값 1)
  spaceBetween:10, // 슬라이드 사이 여백(간격)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination:{
    el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: { // 슬라이드의 이전/다음 버튼사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  }
});

// 프로모션 섹션 토글 기능
  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn =  document.querySelector('.toggle-promotion');
  const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

  promotionToggleBtn.addEventListener('click', function () {
    if ( promotionEl.classList.contains('hide') == true ) {
      promotionEl.classList.remove('hide');
      promotionToggleIcon.innerHTML = "upload"
    } else if ( promotionEl.classList.contains('hide') == false ) {
      promotionEl.classList.add('hide');
      promotionToggleIcon.innerHTML = "download"
    }
  });



const mainMenuItem = document.querySelectorAll('.item');
const mainMenuItemContents = document.querySelectorAll('.item__contents');

console.log(mainMenuItem);
console.log(mainMenuItemContents);



