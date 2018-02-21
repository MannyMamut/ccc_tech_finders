function cambiar(){
// imprimir lo que el usuario puso
var mi_trabajo = $("#trabajo").val()
// redireccionar a la pagina
alert(mi_trabajo)

document.location.href = "http://www.aztechfinders.com/jobs/all/all/all/all/all/all/?all_jobs=true"
}
function init(){
  $('#cambiador').on('click', cambiar);

}
$(document).ready(init)
