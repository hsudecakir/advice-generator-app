function generateAdvice(){
  const max = quotes.length;
  let randomId = Math.floor(Math.random() * max);
  const container = document.querySelector('.container');
  container.classList.add('animation');
  setTimeout(() => {
    container.classList.remove('animation');
  }, 2000);
  container.innerHTML = `
    <p id="adviceId">ADVICE #${quotes[randomId].id}</p>
    <p id="quote">“${quotes[randomId].quote}”</p>
    <div class="author-container">
      <span class="divider"></span>
      <p id="author">'${quotes[randomId].author}'</p>
      <span class="divider"></span>
    </div>
    <button id="generateBtn"><img src="assets/images/dice.svg"></button>
  `
  generateBtn.addEventListener('click', generateAdvice);
}

generateAdvice();