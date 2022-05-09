 'use strict'; 


 const content = "안녕하세요,  우혜림입니다.";           //효과를 주고자 하는 텍스트 선언
 const text = document.querySelector(".text");     //효과를 주고자 하는 태그 선택
 let i = 0;                      //문자열 하나하나의 인덱스 접근을 하기 위한 사용하는 숫자열 데이터

 function typing(){                  
   text.textContent += content[i++];    //h1태그에 컨텐츠 내용을 추가 i가 올라가면서 하나씩 추가
   if(i > content.length){     //i가 컨텐츠의 길이보다 길어졌을 때 멈추기 위해
    text.textContent = ""   // 모든것을 초기화하고 다시 시작하도록 만들기 위해 컨텐츠는 없애고
     i = 0;                  //i는 0으로 리셋
   }
 }
 setInterval(typing, 300);   //(주기적으로 동작해주고 싶은 함수 이름, millisecond)