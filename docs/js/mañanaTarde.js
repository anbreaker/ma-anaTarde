function probar() {

var fechaXDate = new XDate();
/*
var yearXDate = fechaXDate.setFullYear(parseInt(prompt("Introduce Año: ")));
var mesXDate = fechaXDate.setMonth((parseInt(prompt("Introduce Mes: ")) - 1));
var diaXDate = fechaXDate.setDate(parseInt(prompt("Introduce dia: ")));
*/

var yearXDate = fechaXDate.setFullYear(document.getElementById("yearCaja").value);
var mesXDate = fechaXDate.setMonth(document.getElementById("mesCaja").value -1);
var diaXDate = fechaXDate.setDate(document.getElementById("diaCaja").value);


//Numero de semana mediante libreria XDate

/*
  var yearXDate = fechaXDate.setFullYear(parseInt(yearXDate));
  var mesXDate = fechaXDate.setMonth(parseInt(mesXDate));
  var diaXDate = fechaXDate.setDate(parseInt(diaXDate));
*/
  var numSemanaXDate = fechaXDate.getWeek();

  console.log('Año ' + fechaXDate.getFullYear());
  console.log('Mes ' + (mesXDate.getMonth()+1));
  console.log('Dia ' + fechaXDate.getDate());
  console.log('Semana Nº ' + fechaXDate.getWeek());


  if (fechaXDate.getWeek() % 2 == 0) {
    document.getElementById("resultado").innerHTML = 'Semana de <strong>Mañana</strong>';
    console.log('Trabajas de Mañana');
  } else {
    document.getElementById("resultado").innerHTML = 'Semana de <strong>Tarde</strong>';
    console.log('Trabajas de tarde');
  }
}
