const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');
const error_messages = document.querySelectorAll('.error-message');


form.addEventListener('submit', ($event)=>{
    $event.preventDefault();
    limparErrors();
    validate_inputs();
})

function setError(input, errorMessage){
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add('error');
}

function limparErrors(){
    error_messages.forEach((msg)=>{
        msg.textContent="";
    });
    nome.parentElement.classList.remove('error');
    email.parentElement.classList.remove('error');
    assunto.parentElement.classList.remove('error');
    mensagem.parentElement.classList.remove('error');
}

function validate_inputs(){
    const nomeValue = nome.value.trim();
    if(nomeValue==""){
        setError(nome,"Nome não pode ficar em branco.")
    }

    const emailValue = email.value.trim();
    if(emailValue==""){
        setError(email,'Email não pode ficar em branco.')
    }else if(!isEmailValid(emailValue)){
        setError(email,'E-mail inválido.');
    }

    const assuntoValue = assunto.value.trim();
    if(assuntoValue==""){
        setError(assunto,"Assunto não pode ficar em branco.")
    }

    const mensagemValue = mensagem.value.trim();
    if(mensagemValue==""){
        setError(mensagem,"Mensagem não pode ficar em branco");
    }

}

function isEmailValid(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
