function floresta (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("../casa/lenhador3.html")
        }
        if(resposta==2){
        location.replace("lenhador2.html")
        }
    }
    return resposta
}

function casa (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("../celeiro/lenhador5.html")
        }
        if(resposta==2){
        location.replace("lenhador4.html")
        }
    }
    return resposta
}
function celeiro (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("lenhador6.html")
        }
        if(resposta==2){
        location.replace("lenhador7.html")
        }
    }
    return resposta
}
function celeiro2 (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("lenhador9.html")
        }
        if(resposta==2){
        location.replace("lenhador8.html")
        }
    }
    return resposta
}