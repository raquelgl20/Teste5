let informacao = prompt ('informe o saldo que aparece na sua conta! ');

if (informacao>0){
alert (`O saldo da conta é: ${informacao} reais`);
} else if(informacao<0){
    alert (`O saldo da conta é: ${informacao} reais`);
} else{
    alert('informe um valor válido! ');
}