const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

days.innerHTML = 13
hours.innerHTML = 23
minutes.innerHTML = 59
seconds.innerHTML = 60

function comeDownTime(){
  let secondsDown = seconds.innerHTML -= 1

  if(secondsDown < 0){
    if(minutes.innerHTML != 0){
      minutes.innerHTML -= 1
    }else{
      minutes.innerHTML -= 0
    }
    console.log(seconds.innerHTML)
    if(days.innerHTML == 0 && hours.innerHTML == 0 && minutes.innerHTML == 0 && seconds.innerHTML == 0){
      
    }else{
      seconds.innerHTML = 59
    }
  }
  if(minutes.innerHTML == 0 && seconds.innerHTML == 0){
    if(hours.innerHTML != 0){
      minutes.innerHTML = 60
      hours.innerHTML -= 1
    } else{
      hours.innerHTML -= 0
    }
  }
  
  if(hours.innerHTML == 0 && minutes.innerHTML == 0 && seconds.innerHTML == 0){
    if(days.innerHTML != 0){
      hours.innerHTML = 24
      days.innerHTML -= 1
    } else{
      days.innerHTML -= 0
    }
  } 

  if(days.innerHTML == 0 && hours.innerHTML == 0 && minutes.innerHTML == 0 && seconds.innerHTML == 0){
    days.innerHTML = 0
    hours.innerHTML = 0
    minutes.innerHTML = 0
    seconds.innerHTML = 0
  }


}
setInterval(comeDownTime, 1000)