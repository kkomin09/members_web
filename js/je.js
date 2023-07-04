const ver = navigator.userAgent;
console.log(ver);

const isIE = /edg/i.test(ver);
console.log(isIE);
// 문장안에 trident 단어를 찾아라
// i은 대소문자 상관없다는 뜻임

if (isIE) {
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요!!');
};