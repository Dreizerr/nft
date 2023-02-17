//---------------  trending cards

document.addEventListener("DOMContentLoaded", function () {
  let trendingCards = document.querySelectorAll(".trending__card");
  trendingCards = [...trendingCards];
  let timerMaxTimeHour = 300;
  let timerRefresher = setInterval(() => {
    trendingCards.forEach((elem, index) => {
      trendingTimer(elem);
    });
  }, 1000);

  let deadlineDate = new Date(+new Date() + timerMaxTimeHour * 1000);

  function trendingTimer(elem) {
    let deadline = deadlineDate;
    let presentDate = new Date();
    let currentAucTime = Math.floor(Math.floor(deadline - +presentDate) / 1000);
    let hours = Math.floor(currentAucTime / 60 / 60) % 24;
    let minutes = Math.floor(currentAucTime / 60) % 60;
    elem.querySelector(".card-nft__time").innerHTML = `${hours}h ${minutes}Min`;
    let timeScale = 100 - Math.floor((currentAucTime / timerMaxTimeHour) * 100);
    elem.querySelector(".card-nft__progress-line").style.width = timeScale + "%";
    if (currentAucTime <= 0) {
      clearInterval(timerRefresher);
      elem.querySelector(".card-nft__time").innerHTML = "Ended";
    }
  }
});
