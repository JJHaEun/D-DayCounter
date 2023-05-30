const messageContainer = document.querySelector("#default");
const container = document.querySelector("#d-day-container");

// container.style.display = "none"; // 처음에는 시간나타내는 부분 보이지 않게 처리.(js의 style로 css에 접근하는것.)
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>";
// textContent는 태그에 직접 텍스트를 추가해줌.
// innerHTML은 해당하는 태그 안쪽에 직접 html를 추가해준다.

const dateForm = () => {
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
  // remain이 0이 된다면 현재인것. 즉, 목표시간에 도달한거서.

  // 만약, remain이 0이라면 타이가 종료되었습니다
  // 음수일 경우도 같이 체크하기
  if (remain <= 0) {
    // document.getElementById("default").innerText = "타이머가 종료되었습니다";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다</h3>";
    // innerHTML의 경우에는 기존에 있던 것도 없앰. 따라서 새로 추가해줘도 기존것은 없어지는것(기존에 D-Day를 입력해 주세요 부분의 태그와 텍스트 대신 얘가 들어감.
  } else if (isNaN(remain)) {
    // 잘못된 시간대는 NaN이라고 나홈. isNaN이라는 함수를 사용해 NaN안 경우를 판별함
    // 만약 잘못된 날짜가 들어왔다면 유효한 시간이 아닙니다ㅏ
    // console.log("유효한 시간대가 아닙니다");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
  }
  // 1분은 60초, 1시간은 60분이며 60분은 3600초, 1일은 24시간.
  // 24 * 60 = 1440분
  // 1440 * 60 = 86400초 => 하루는 86400초

  // const remainDate = Math.floor(remain / 3600 / 24); // 남은 일
  // const remainHours = Math.floor((remain / 3600) % 24); // 남은 시간. 나머지값을 사용..
  // const remainMins = Math.floor((remain / 60) % 60); //  1분은 60초
  // const remainSec = Math.floor(remain % 60); // 남은 초.. 분이 되는 몫은 제외하고 그 나머지 값이 초가됨.
  //   const newSpan = document.createElement("div");
  //   document.body.appendChild(newSpan); // body의 아이임
  //
  // container.style.display = "block";
  // messageContainer.style.display = "none";

  // 변수로 만들어진 remain들을 객체로 묶기
  const remainObj = {
    remainDate: Math.floor(remain / 3600 / 24), // 남은 일
    remainHours: Math.floor((remain / 3600) % 24),
    remainMins: Math.floor((remain / 60) % 60),
    remainSec: Math.floor(remain % 60),
  };

  // document.getElementById("dates").textContent = remainObj["remainDate"];
  // document.getElementById("hours").textContent = remainObj["remainHours"];
  // document.getElementById("mins").textContent = remainObj["remainMins"];
  // document.getElementById("secs").textContent = remainObj["remainSec"];

  const documentObj = {
    dates: document.getElementById("dates"),
    hours: document.getElementById("hours"),
    mins: document.getElementById("mins"),
    secs: document.getElementById("secs"),
  };

  documentObj["dates"].textContent = remainObj["remainDate"];
  documentObj["hours"].textContent = remainObj["remainHours"];
  documentObj["mins"].textContent = remainObj["remainMins"];
  documentObj["secs"].textContent = remainObj["remainSec"];
};
