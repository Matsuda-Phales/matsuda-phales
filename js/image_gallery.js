'use strict'; //厳格モードで実行

// 画像を切り替える際にフェード効果を加える関数
function changeImage(newSrc) {
  const bigImg = document.getElementById("bigimg");

  // フェードアウトさせる
  bigImg.classList.add("fade-out");

  // フェードアウトが完了した後に画像を変更
  setTimeout(function() {
    bigImg.src = newSrc;
    
    // フェードインさせる
    bigImg.classList.remove("fade-out");
  }, 300); // 0.3秒後に画像を切り替え
}

// それぞれの画像がクリックされた時の処理
function Img1() {
  changeImage("images/img1.jpg");
}

function Img2() {
  changeImage("images/img7.jpg");
}

function Img3() {
  changeImage("images/img3.jpg");
}

function Img4() {
  changeImage("images/img4.jpg");
}

function Img5() {
  changeImage("images/img5.jpg");
}

function Img6() {
  changeImage("images/img6.jpg");
}

function Img7() {
  changeImage("images/img7.jpg");
}

function Img8() {
  changeImage("images/img8.jpg");
}
