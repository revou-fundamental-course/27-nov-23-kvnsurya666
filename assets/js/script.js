function getValue() {
  var select = document.getElementById("selectOption");
  var luas = select.options[select.selectedIndex].value;
  document.getElementById("luas").innerHTML = luas;
  var keliling = select.options[select.selectedIndex].value;
  document.getElementById("keliling").innerHTML = keliling;
}

function hitung() {
  var sisi1 = document.getElementById("sisi1").value;
  var sisi2 = document.getElementById("sisi2").value;
  var sisi3 = document.getElementById("sisi3").value;
  var tinggi = document.getElementById("tinggi").value;

  if (alas == "" || sisi1 == "" || sisi2 == "" || sisi3 == "" || tinggi == "") {
    alert("Mohon isi semua input");
  } else {
    var luas = 0.5 * alas * tinggi;
    var keliling = sisi1 + sisi2 + sisi3;

    document.getElementById("luasSegitiga").innerHTML =
      "Luas Segitiga: " + luasSegitiga;
    document.getElementById("keliling").innerHTML =
      "Keliling Segitiga: " + keliling;
  }
}
