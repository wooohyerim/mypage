
////////////////////홈 글자 타이핑/////////////////////////


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





///////////////////chatbot///////////////////////////

 function talk(){
  let know = {
      "안녕하세요" : "안녕하세요, 만나서 반갑습니다👊🏻",
      "사는 곳이 어딘가요?" : "저는 경기도 화성시에 거주하고 있습니다.",
      "무엇을 하고 있나요?" : "프론트엔드개발을 위해 공부하고 있습니다.",
      "개발을 시작하게 된 계기가 있나요?" : "10년, 20년후에도 계속 할 수 있는  분야를 알아보다가<br>웹디자인&웹퍼블리셔 교육을 듣게 되었는데,<br>그때 개발의 매력을 느끼면서 본격적으로 시작하게 됐습니다.",
      "취미가 뭐에요?" : "평소에 영화보는것을 좋아하고, <br> 스트레스 쌓일 땐 블럭조립 하는 것,<br> 날씨 맑을 때 걷는것을 좋아해요!",
      "대답해 주셔서 고맙습니다!" : "질문해주셔서 감사합니다🙏🏻",
      "안녕히 계세요" : "다음에 또 만나요👊🏻"
  };

  let user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
      if(user in know){
          document.getElementById('chatLog').innerHTML = know[user] + "<br>";            
      }else{
          document.getElementById('chatLog').innerHTML = "죄송합니다. 그 질문은 대답할 수 없습니다. <br>";
      }
}

document.getElementById('btn').addEventListener('click',function(){
  document.getElementById('glass').style.display = 'block'
});

document.getElementById('close').addEventListener('click',function(){
  document.getElementById('glass').style.display = 'none'
});











