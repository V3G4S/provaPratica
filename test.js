var usuarios = []

function listarUsuarios(){
    console.log(usuarios)
}

function adicionarUsuario(nome, idade, email){
    nome = "Giulia"
    idade = 28
    email = "giu_sousa@gmail.com"
    novoUsr = `Nome: ${nome}; Idade: ${idade}; Email: ${email};`
    if(nome != "" && idade > 0 && email != ""){
        usuarios.push(novoUsr)
        listarUsuarios()
    }else{
        console.log("Algo no seu cadastro está errado!")
    }
}

adicionarUsuario()