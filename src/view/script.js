const button = document.getElementById('button');
button.addEventListener('click', () => {

    const inputNome = document.getElementById('nome');
    const nome = inputNome.value;

    const inputCpf = document.getElementById('cpf');
    const cpf = inputCpf.value;

    const inputEmail = document.getElementById('email');
    const email = inputEmail.value;

    const inputTelefone = document.getElementById('telefone');
    const telefone = inputTelefone.value;

    const inputPassword = document.getElementById('senha');
    const password = inputPassword.value;
    
    if (!nome || !cpf || !email || !password || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const usuario = {
        cpf,
        email,
        nome,
        telefone,
        password
    };
    
    fetch('http://localhost:3333/Usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(() => {
        console.log('Usuário registrado com sucesso!');
        alert('Usuário registrado com sucesso!');
    }).catch(error => {
        console.log('Erro ao registrar usuário:', error);
        alert('Erro ao registrar usuário. Consulte o console para mais detalhes.');
    });
});