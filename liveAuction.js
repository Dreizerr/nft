let timerDOM = document.querySelector(".auction__time-left");

function auctionTimer() {
  let aucDeadline = new Date(+new Date() + 18000 * 1000);

  return () => {
    let currentDate = new Date(),
      currentTime = Math.floor((aucDeadline - currentDate) / 1000),
      hours = Math.floor(currentTime / 60 / 60) % 24,
      minutes = Math.floor(currentTime / 60) % 60,
      seconds = currentTime % 60;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerDOM.innerHTML = `${hours} : ${minutes} : ${seconds} `;
    if (currentTime <= 0) {
      clearInterval(auctionTimerInterval);
    }
  };
}

let auctionTimer2 = auctionTimer();

auctionTimer2();

let auctionTimerInterval = setInterval(auctionTimer2, 1000);
