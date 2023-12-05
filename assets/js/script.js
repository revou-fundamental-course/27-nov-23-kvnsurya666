function calculateArea() {
  var base = parseFloat(document.getElementById("base").value);
  var height = parseFloat(document.getElementById("height").value);

  if (!isNaN(base) && !isNaN(height)) {
    var area = 0.5 * base * height;
    displayResult(
      `L = 1/2 x a x t \n 
      L = 1/2 x ${base} x ${height}\n 
      L = ${area}`
    );
  } else {
    alert("Masukkan angka yang valid untuk alas dan tinggi.");
  }
}

function calculatePerimeter() {
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC = parseFloat(document.getElementById("sideC").value);

  if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
    var perimeter = sideA + sideB + sideC;
    displayResult(
      `K = S1 + S2 + S3 \n
       K = ${sideA} + ${sideB} + ${sideC}\n 
       K = ${perimeter}`
    );
  } else {
    alert("Masukkan angka yang valid untuk panjang sisi segitiga.");
  }
}

function resetForm() {
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  document.getElementById("sideA").value = "";
  document.getElementById("sideB").value = "";
  document.getElementById("sideC").value = "";
  document.getElementById("result").textContent = "";
}

function switchCalculationType() {
  var calculationType = document.getElementById("calculationType").value;

  switch (calculationType) {
    case "area":
      document.getElementById("areaFields").style.display = "block";
      document.getElementById("perimeterFields").style.display = "none";

      break;
    case "perimeter":
      document.getElementById("areaFields").style.display = "none";
      document.getElementById("perimeterFields").style.display = "block";

      break;
    default:
      break;
  }
}

function displayResult(resultText) {
  document.getElementById("result").textContent = resultText;
}

function calculate() {
  var calculationType = document.getElementById("calculationType").value;

  switch (calculationType) {
    case "area":
      calculateArea();

      break;
    case "perimeter":
      calculatePerimeter();

      break;
    default:
      break;
  }
}
