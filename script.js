var form = document.getElementById('form');
var nome = document.getElementById('nome');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var senha2 = document.getElementById('senha2');
// Confirmação do form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    verificaInput();
})

function verificaInput() {
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();
    const senha2Valor = senha2.value.trim();

    // Verificação do nome
    if (nomeValor === '') {
        erro(nome, 'Nome inválido');
    } else {
        sucesso(nome);
    } 

    // Verificação do e-mail
    if(emailValor === '') {
        erro(email, 'Insira um email');
    } else if (validaEmail(emailValor)) {
        sucesso(email);
    } else {
        erro(email, 'Email inválido');
    }

    // Verificação da senha
    if (senhaValor.length < 7) {
        erro(senha, 'A senha deve ter pelo menos sete caracteres');
    } else {
        sucesso(senha);
    }

    // Verificação da confirmação da senha
    if (senha2Valor.length < 7) {
        erro(senha2, 'A senha deve ter pelo menos sete caracteres');
    } else if (senha2Valor !== senhaValor) {
        erro(senha2, 'As senhas não são iguais');
    } else {
        sucesso(senha2);
    }
}

// Função de erro
function erro(input, mensagem) {
    const controle = input.parentElement;
    const mensagemErro = controle.querySelector('small');
    
    input.style.borderColor = 'red';
    mensagemErro.style.display = 'block';
    mensagemErro.innerText = mensagem;
    mensagemErro.style.color = '#bfc0c0';
}

// Função de sucesso
function sucesso(input) {
    const controle = input.parentElement;
    const mensagemSucesso = controle.querySelector('small');

    mensagemSucesso.style.display = 'none';
    input.style.borderColor = 'green';
}

// Verificacao do email
function validaEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}