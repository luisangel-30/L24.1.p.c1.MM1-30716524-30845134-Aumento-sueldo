import CL_empresa from "./CL_empresa.js";
import CL_personal from "./CL_personal.js";

let personal = new CL_personal();

let perso1 = new CL_personal("Juan", "1", 100);
let perso2 = new CL_personal("Ana", "1", 120);
let perso3 = new CL_personal("Lin", "2", 200);
let perso4 = new CL_personal("Mary", "1", 50);
let perso5 = new CL_personal("Carlos", "2", 150);

let empresa = new CL_empresa();
   
empresa.procesarpersonal(perso1);
empresa.procesarpersonal(perso2);
empresa.procesarpersonal(perso3);
empresa.procesarpersonal(perso4);
empresa.procesarpersonal(perso5);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> ${perso1.nombre} tiene un aumento de :${perso1.devolveraumento()}
<br> ${perso2.nombre} tiene un aumento de :${perso2.devolveraumento()}
<br> ${perso3.nombre} tiene un aumento de :${perso3.aumento()}
<br> ${perso4.nombre} tiene un aumento de :${perso4.aumento()}
<br> ${perso5.nombre} tiene un aumento de :${perso5.aumento()}
<br><br>
total de monto adicional que debe pagar la empresa es de :${empresa.totalaumento()}
`