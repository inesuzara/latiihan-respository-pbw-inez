function fibonacci() {
    var n = document.getElementById("inputNumber").value;
    var result = "";
    var a = 0, b = 1;
    for (var i = 0; i < n; i++) {
        result += a + ", ";
        var temp = a + b;
        a = b;
        b = temp;
    }
    document.getElementById("result").innerHTML = result;
}
  

