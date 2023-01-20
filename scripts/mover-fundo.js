function move(){
    const fundo= document.getElementById('fundo');
    let [py,px]= numPosition();
    // posições na vertial para background-position
    let position_y= ['top','center','bottom'];
    // posições na horizontal para background-position
    let position_x= ['left','center','right'];

    // concatena dois valores de posições com espaço no meio
    let move=position_y[py]+' '+position_x[px];

    // move o elemento conforme o valor de px e py
    fundo.style.backgroundPosition=move;
}
// Variável para armazenar cliques
// Declarada fora da função para nao ser resetada, quando a função for chamada.
let clique=0
function contarCliques(){          
    if(clique>=9){
        clique=0;
    }
    return clique+=1;  
}

    let a=0;
    // usei -1 para mostrar o 0 primeiro
    let b=-1;
// Essa funçao determina o numero de x e de y 
function numPosition(){
    b+=1;
    if(b>2){
        a+=1;
        b=0;
    }
    if(a>2){
        a=0;
        b=0;
    }

    return [a,b];
}
