function floresta (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("alice2.html")
        }
        if(resposta==2){
        location.replace("alice3.html")
        }
    }
    return resposta
}
function floresta2 (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("../casa/alice6.html") //crashando -- está em outra pasta!! 
        }
        if(resposta==2){
        location.replace("alice4.html")
        }
    }
    return resposta  
}
function floresta3 (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("../casa/alice6.html")
        }
        if(resposta==2){
        location.replace("alice5.html")
        }
    }
    return resposta
}
function casa (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("alice7.html")
        }
        if(resposta==2){
        location.replace("../celeiro/alice8.html")
        }
    }
    return resposta
}
function celeiro (resposta)
{
    while(resposta!=1 && resposta!=2){ 
        resposta = prompt("Insira o número da opção desejada (1 ou 2):");
        if(resposta==1){
        location.replace("alice9.html")
        }
        if(resposta==2){
        location.replace("alice10.html")
        }
    }
    return resposta
}