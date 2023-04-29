const horas =
  document.getElementById('horas'); /*Variável que pega o elemento pelo ID*/
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
/*Variável abaixo pega as horas, minutos e segundos*/
const relogio = setInterval(function time() {
  /*Variável let*/
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10)
    hr =
      '0' +
      hr; /*Se a hora for menor que 10, terá o zero e + hr, antes do valor da hora terá o zero*/
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});
