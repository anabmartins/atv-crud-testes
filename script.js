const users = []

email = document.getElementById('email').value
senha = document.getElementById('senha').value

function cadastrar(){
    if (email == null || senha == null){
        users.push(email)
    }
}