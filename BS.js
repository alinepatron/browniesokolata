function email() {
    const e = document.getElementById("1").value;
    const a = document.getElementById("2").value;
    const m = document.getElementById("3").value;
    alert(e+a+m);

    Email.send({
        Host: "smtp.gmail.com",
        To : '0214161@up.edu.mx',
        From : e,
        Subject : a,
        Body : m,
        });
}

function alerta() {
    alert ('Tu mensaje ha sido enviado satisfactoriamente');
}