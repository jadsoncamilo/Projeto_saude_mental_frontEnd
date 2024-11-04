document.getElementById('login-btn').addEventListener('click', function() {
    // Simulação de login
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    if (usuario === 'ADMIN' && senha === '******') {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('question-container').style.display = 'block';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

document.getElementById('sair-btn').addEventListener('click', function() {
    document.getElementById('question-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'flex';
});
