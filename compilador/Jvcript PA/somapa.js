function calcular() {
	total = 0;
    var a1 = document.getElementById('a1').value;
    var n = document.getElementById('n').value;
    var an = document.getElementById('an').value;
    total = (parseFloat(a1)+parseFloat(an))*n/2;
    document.getElementById("resultado").value = total;
}