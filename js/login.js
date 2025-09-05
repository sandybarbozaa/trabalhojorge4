function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').ariaValueMax;
    const senha = document.getElementById('senha').ariaValueMax;

    if (email === 'admin@teste.com' && senha === '1234') {
        window.location.href ='produtos.html';
    } else{
        alert('Usuário ou senha inválidos');
    }
}