const form = document.getElementById('formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campA = document.getElementById('campA').value;
    const campB = document.getElementById('campB').value;
    const mensagem = document.getElementById('mensagem');
    const numeroA = parseFloat(campA);
    const numeroB = parseFloat(campB);

    mensagem.textContent = "";

    if (campA.trim() === "" || campB.trim() === "") 
    {
        mensagem.className = "mensagem negativo";
        return(mensagem.textContent = "Preencha ambos os campos.");
    };

    if (numeroB > numeroA) 
    {
        mensagem.className = "mensagem positivo";
        return(mensagem.textContent = "Formulário válido! O número B é maior que o número A.");
    } else {
        mensagem.className = "mensagem negativo";
        return(mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.");
    };
});