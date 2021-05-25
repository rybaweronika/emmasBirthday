const countdown = () => {
    const countDate = new Date("June 25, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    //How does the time work
    const second = 1000;
    const minute = second * 60; //60000
    const hour = minute * 60; //3600000
    const day = hour * 24;
  
    //Calculate 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
  
    //Update our actual HTML
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
  };
  
  setInterval(countdown, 1000); 