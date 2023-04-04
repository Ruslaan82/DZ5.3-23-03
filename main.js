const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const rub = document.querySelector("#rub");

const convert = (elem, target, three) => {
  elem.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      if (request.status === 200) {
        const response = JSON.parse(request.response);
        if (elem === som) {
          target.value = (elem.value / response.usd).toFixed(2);
          three.value = (elem.value / response.rubsom).toFixed(2);
        } else if (elem === usd) {
          target.value = (elem.value * response.usd).toFixed(2);
          three.value = (elem.value * response.rub).toFixed(2);
        } else if (elem === rub) {
          target.value = (elem.value * (response.usd / response.rub)).toFixed(2);
          three.value = (elem.value / response.rub).toFixed(2);
        }
        elem.value === "" && (target.value = "");
        elem.value === "" && (three.value = "");
      }
    };
  };
};
convert(som, usd, rub);
convert(usd, som, rub);
convert(rub, som, usd);
