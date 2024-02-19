const year = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

year.innerHTML = 13
hours.innerHTML = 23
minutes.innerHTML = 60
seconds.innerHTML = 60


let minutesDown = minutes.innerHTML -= 1
function comeDownTime(){
  let secondsDown = seconds.innerHTML -= 1
  if(secondsDown == 0){
    minutes.innerHTML -= 1
    seconds.innerHTML = 59
  }


  if(minutes.innerHTML == 0){
    hours.innerHTML -= 1
    minutes.innerHTML = 59
  }

  if(hours.innerHTML == 0 && minutes.innerHTML == 0 && seconds.innerHTML == 0){
    year.innerHTML -= 1
    hours.innerHTML = 23
  } 
}
setInterval(comeDownTime, 1000)