function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      document.getElementById('advice').innerText = data.slip.advice;
    });
}

window.onload = getAdvice;
