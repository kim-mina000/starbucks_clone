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
  searchInput.setAttribute("placeholder","통합검색")
});

// input 요소에 포커스 해제(blur)되면 placeholder 초기화 
searchInput.addEventListener('blur',function () {
  searchInput.setAttribute("placeholder","")
});