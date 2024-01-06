
    const hourHand = document.getElementById('hours');
    const minuteHand = document.getElementById('minutes');
    const secondHand = document.getElementById('seconds');



    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      const hourRotation = (hours * 30) + (minutes * 0.5) - 90;
      const minuteRotation = minutes * 6 - 90;
      const secondRotation = seconds * 6 - 90;
  
      hourHand.style.transform = `rotate(${hourRotation}deg)`;
      minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
      secondHand.style.transform = `rotate(${secondRotation}deg)`; 
    }
  
    setInterval(updateClock, 1000);
    updateClock()