var end = new Date("11/10/2022 12:00:00 AM");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown-text").innerHTML = "鸡米24岁啦!";
    document.getElementById("button-container").style.display = "flex";

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  document.getElementById("countdown-text").innerHTML = "鸡米，<br>距离你的24岁生日还有...";
  document.getElementById("countdown-timer").innerHTML = days + "天零";
  document.getElementById("countdown-timer").innerHTML += hours + "个小时";
  document.getElementById("countdown-timer").innerHTML += minutes + "分";
  document.getElementById("countdown-timer").innerHTML += seconds + "秒。";
  document.getElementById("pregame-form").innerHTML = `<br>我准备了一份礼物给你，但我需要你的帮助。在倒计时结束之前请到<a href="https://forms.gle/HjhF2ad9asZMsE9a9" target="blank" class="form">这里</a>回答一个问题... 今晚十二点见。<br><br>—王强`;
}

timer = setInterval(showRemaining, 1000);