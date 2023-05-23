const dateForm = () => {
  // console.log(document.querySelector("input"));
  const inputYear = document.querySelector("#target-year").value; // input에 입력된 값 가져오기 querySelector를 사용할 경우 태그는 상관없이 그대로 적으면 되지만, id인지 class인지 명시필요.
  const inputMonth = document.querySelector("#target-month").value; //
  const inputDate = document.querySelector("#target-date").value; //
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};
const counterMaker = () => {
  const targetDateInput = dateForm(); // 해당 함수의 return데이터인 dateFormat이 담김.
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 기본 한국시간 오전 9시를 기준으로 시간이 나옴. 따라서 자정을 기준으로 나오게 변경해보자.
  console.log(targetDate - nowDate); // target까지의 밀리초. 1ms는  0.001초 , 1초는 1000ms
  const remain = (targetDate - nowDate) / 1000; // * 0.001과 동일 => 남은 초를 알 수 있음

  // 1분은 60초, 1시간은 60분이며 60분은 3600초, 1일은 24시간.
  // 24 * 60 = 1440분
  // 1440 * 60 = 86400초 => 하루는 86400초
  const remainDate = Math.floor(remain / 3600 / 24); // 남은 일
  const remainHours = Math.floor((remain / 3600) % 24); // 남은 시간. 나머지값을 사용..
  const remainMins = Math.floor((remain / 60) % 60); //  1분은 60초
  const remainSec = Math.floor(remain % 60); // 남은 초.. 분이 되는 몫은 제외하고 그 나머지 값이 초가됨.
  //   const newSpan = document.createElement("div");
  //   document.body.appendChild(newSpan); // body의 아이임
  //
  document.getElementById("dates").innerText = remainDate;
  document.getElementById("hours").innerText = remainHours;
  document.getElementById("mins").innerText = remainMins;
  document.getElementById("secs").innerText = remainSec;
};
