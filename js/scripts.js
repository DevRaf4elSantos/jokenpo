let pontosUsuario = 0
let pontosSistema = 0

function escolhaUsuario(escolha) {
    let escolhaUsuario = escolha
    return escolhaUsuario 
} 
function escolhaBoot() { 
    let opcoes = Array("pedra", "papel", "tesoura") 
    let numeroAleatorio = Math.floor(Math.random() * 3)
    let escolhaApp = opcoes[numeroAleatorio]
    mostrarEscolhaApp(escolhaApp)
    return escolhaApp 
}
function mostrarEscolhaApp(escolhaApp){
    let opcaoSistema = document.getElementById('escolhaSistema')
    let texto = document.getElementById('texto_escolhaApp')
    texto.className += ' none' 
    if(escolhaApp ===   'pedra'){
        opcaoSistema.src='img/pedra.png'
    } else if (escolhaApp === 'papel') {
        opcaoSistema.src='img/papel.png'
    } else if(escolhaApp === 'tesoura') {
        opcaoSistema.src='img/tesoura.png'   
    }
}
function verificarEscolha(escolha) {
    let escolhaPessoa = escolhaUsuario(escolha)
    let escolhaSistema = escolhaBoot()
    let resultado = document.getElementById('resultado')
    if (escolhaPessoa === escolhaSistema) { 
        resultado.innerHTML = "Empatamos <br> &#x1F91D" 
    } 
    else if (
        (
            escolhaPessoa === "pedra" 
            && 
            escolhaSistema === "tesoura"
        )
        || 
        (
            escolhaPessoa === "tesoura" 
            && 
            escolhaSistema === "papel"
        ) 
        || 
        (
            escolhaPessoa === "papel" 
            && 
            escolhaSistema === "pedra"
        )
    ) 
        { 
            resultado.innerHTML = "Parabéns! <br> Você venceu  &#x1F389" 
            pontosUsuario+=1
        
        } 
    else if (
        (
            escolhaPessoa === "papel" 
            && 
            escolhaSistema === "tesoura"
        ) 
        || 
        (
            escolhaPessoa === "pedra" 
            && 
            escolhaSistema === "papel"
        ) 
        || 
        (
            escolhaPessoa === "tesoura" 
            && 
            escolhaSistema === "pedra"
        )
    )
        { 
            resultado.innerHTML = "Hiiii perdeu!<br> &#x1F606"   
            pontosSistema += 1
        }
    
    let placar = document.getElementById('placar-resultado')
    placar.innerHTML = `Vitórias ${pontosUsuario} <br>  Derrotas ${pontosSistema}`
} 



