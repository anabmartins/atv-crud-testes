function verify(){
        let email = document.getElementById('email').value
       // let psw = document.getElementById('psw').value
        usuario = email.substring(0, email.indexOf('@'))
        dominio = email.substring(email.indexOf('@')+1, email.length)
        if(email.length === 0){
                document.getElementById('msgemail').innerHTML = "<font color='red'>tem que colocar email ai</font>"                
        } else if(
              (usuario.length >= 1)&&
              (dominio.length >= 3)&&
              (dominio.search('@') ==-1) &&
              (usuario.search('@') ==-1)
        )
        {

        }
}
