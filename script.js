// Mengubah celcius ke fahrenheit
function convert() {
  var temperature = parseFloat(document.getElementById("celcius").value);
  var hasil = (temperature * (9 / 5)) + 32; 
  document.getElementById("fahrenheit").value = hasil.toFixed(2);
  
  console.log(typeof hasil);

  var input = document.getElementById("celcius").value;
  var output = document.getElementById("fahrenheit").value;
  var explanation = input + "°C" + " * (9 / 5) + 32 = "+ output + "°F"
  document.getElementById("exp").value = explanation;

  console.log(typeof explanation)
}

// Mengatur ulang semua kembali ke 0
function reset() {
  document.getElementById("celcius").value = null; 
  document.getElementById("fahrenheit").value = null; 
  document.getElementById("exp").value = null;
}

// Mengubah fahrenheit ke celcius
function reverse() {
  var temperature = parseFloat(document.getElementById("fahrenheit").value);
  var hasil = (temperature - 32) * (5 / 9);
  document.getElementById("celcius").value = hasil.toFixed(2);

  console.log(typeof hasil);

  var input = document.getElementById("fahrenheit").value;
  var output = document.getElementById("celcius").value;
  var explanation = "(" + input + "°F" + " - 32) * (5/9) = "+ output + "°C"
  document.getElementById("exp").value = explanation;

  console.log(typeof explanation)
}

// Textarea di kotak celcius hanya untuk menulis angka saja
var textarea1 = document.getElementById("celcius");
  textarea1.addEventListener("input", function() {
  var input = textarea1.value.trim();
  var number = !isNaN(input);

  if (!number) {
    textarea1.value = "";
  }
});

// Textarea di kotak fahrenheit hanya untuk menulis angka saja
var textarea2 = document.getElementById("fahrenheit");
  textarea2.addEventListener("input", function() {
  var input = textarea2.value.trim();
  var number = !isNaN(input);

  if (!number) {
    textarea2.value = "";
  }
});

