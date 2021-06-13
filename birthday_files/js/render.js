//render.js

//ボタンが押された時
function clickBtn() {
  var selectNum = document.getElementById("myNum").value;
  oneYear(selectNum, 4649);
}

//html内のanswer,captionを書き換える
function relight(room_member,abr,abrRnd) {
  var myanswer = document.getElementById("answer");
  if(abr == 100){
    myanswer.innerHTML = `<p id="answer"><mark>ほぼ</mark>100%</p>`;//JSの小数点の都合で頭打ちの100パーセントになってしまっとき
  }else{
    myanswer.innerHTML = `<p id="answer">${abr}%</p>`;//正しくはこちら
  }
  var mycaption = document.getElementById("caption");
  var nokori = 100-abrRnd;
  mycaption.innerHTML = `<p>${room_member}人の教室が100個あった場合</p>
  <p id="pair">ペアのいる教室：${abrRnd}/100個<p>
  <p>全員誕生日が違う教室：${nokori}/100個</p>`;
  // mycaption.innerHTML = `<p id="caption">${room_member}人のクラスが100クラスあった時<p>そのうち${abrRnd}クラスが<em  class="br">同じ誕生日の人がいるクラス</em></p><p>(${room_member}人全員の誕生日が違うのは${nokori}クラス)</p></p>`;
}

function potion(){
  $('body').css({
    'align-items':'start',
    'top':'20vh'
  });
};

//解説ボタンの表示
$(function(){
  $('#fff').on('click', function() {
    $('#mybtn').fadeIn(1000);
  });
});

//解説の表示
$(function(){
  $('#mybtn').on('click', function() {
    $('#slide').fadeIn(1000);
  });
});