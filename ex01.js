var lista = [];
function adicinarPaciente () {
    var inPaciente = document.getElementById("inPaciente");
    var outEspera = document.getElementById("outEspera");
    var paciente = inPaciente.value;

    if (paciente == Number(paciente) || paciente == "") {
        alert("Preencha o nome do paciente corretamente.")
        inPaciente.value = "";
        inPaciente.focus();
        return;
    }

    lista.push(paciente.toUpperCase())

    var resposta = "";
    for (let i = 0; i < lista.length; i++) {
        resposta += (` ${i + 1}- ${lista[i]} \n`);
    }

    outEspera.textContent = resposta;
    inPaciente.value = "";
    inPaciente.focus();
    return; 
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicinarPaciente);


//--------------------------------------------------------


function adicionarUrgencia () {
    var inPaciente = document.getElementById("inPaciente");
    var outAtendimento = document.getElementById("outAtendimento");
    var outEspera = document.getElementById("outEspera");
    var paciente = inPaciente.value;

    if (paciente == Number(paciente) || paciente == "") {
        alert("Preencha o nome do paciente corretamente.")
        outAtendimento.textContent = "";
        inPaciente.focus();
        return;
    }

    var urgencia = lista.unshift(`${paciente.toUpperCase()} (URGÊNCIA)`)
    var resposta = "";

    for (let i = 0; i < lista.length; i++) {
        resposta += (` ${i + 1}- ${lista[i]} \n`);
    }

    outEspera.textContent = resposta;
    inPaciente.value = "";
    inPaciente.focus();
    return;
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);


//--------------------------------------------------------


function atenderPaciente () {
    var inPaciente = document.getElementById("inPaciente");
    var outAtendimento = document.getElementById("outAtendimento");
    var outEspera = document.getElementById("outEspera");
    if (lista.length == 0) {
        alert("Não há pacientes em espera. Adicione pecientes para poder atende-los.")
        outAtendimento.textContent = "";
        inPaciente.focus();
        return;
    }
    var atender = lista.shift();
    var resposta = "";
    for (let i = 0; i < lista.length; i++) {
        resposta += (` ${i + 1}- ${lista[i]} \n`);
    }
    outEspera.textContent = resposta;
    inPaciente.focus();
    outAtendimento.textContent = `EM ATENDIMENTO: ${atender}`;

}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
