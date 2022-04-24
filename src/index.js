const retryBtn = document.getElementsByClassName("retry-btn");
const submitBtn = document.getElementsByClassName("submit-btn");

let correctArr = [];
//스티커 개수가 동적으로 들어올 수 있게 변경
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sliceNumber = random(0, 8);

shuffle(arr);
let answerArr = arr.slice(0, sliceNumber);

answerArr.sort();
console.log(answerArr);

for (
  let i = 1;
  i <= 8;
  i++ // (function (i)
) {
  let btn = document.getElementById("img" + i);
  //온클릭 html에 걸기
  btn.onclick = function () {
    btn.classList.toggle("clicked");

    if (correctArr.includes(i)) {
      correctArr = correctArr.filter((element) => element !== i);
      console.log("bye");
    } else {
      correctArr.push(i);
      console.log("hi");
    }
    console.log(correctArr);
    correctArr.sort();
  };
}

retryBtn[0].addEventListener("click", function () {
  //고른것 초기화
  correctArr.length = 0;
  for (let i = 1; i <= 8; i++) {
    let btn = document.getElementById("img" + i);
    btn.classList.remove("clicked");
  }

  //다시 정답 배열 셔플하기
  shuffle(arr);
  sliceNumber = random(1, 8);
  answerArr = arr.slice(0, sliceNumber);
  answerArr.sort();
  console.log(answerArr);
});
submitBtn[0].addEventListener("click", function () {
  console.log(answerArr, correctArr);
  if (JSON.stringify(answerArr) === JSON.stringify(correctArr)) {
    alert("정답입니다!");
  } else {
    alert("오답입니다!");
  }
});

//input & label로 구현하면 toggle css로 구현 가능
