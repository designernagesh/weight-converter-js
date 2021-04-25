let formWeightConvert = document.querySelector('.formWeightConvert');

formWeightConvert.addEventListener('submit', e => {
  e.preventDefault();      

  let kg = document.getElementById("kg"),
      grams = document.getElementById("grams"),
      milligrams = document.getElementById("milligrams"),
      pounds = document.getElementById("pounds"),
      ounces = document.getElementById("ounces");
  
  if( kg.value == " " || kg.value <= 0 ){
    alert("Input some value in Kilograms Field.")
    kg.value = "";
  }
  else{
    grams.value = kg.value * 1000;
    milligrams.value = kg.value * 1000000;
    pounds.value = (kg.value * 2.2046).toFixed(3);
    ounces.value = (kg.value * 35.274).toFixed(3);
  }
})