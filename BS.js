function email() {
    const a = document.getElementById("1").value;
    const m = document.getElementById("2").value;
    const b = 'mailto:0214161@up.edu.mx?subject='+a+'&body='+m;

    document.getElementById("3").href=b;

}

function alerta() {
    alert ('Procesando su mensaje... Por favor confirme el pedido');
}

