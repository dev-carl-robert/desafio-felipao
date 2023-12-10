function rank(nome, v, d){
    const saldoDeVitoria = v - d;
    console.log(`O saldo de vitoria de ${nome} é: ${saldoDeVitoria}.`);
    console.log(`com ${v} vitórias e ${d} derrotas.`);
    return (saldoDeVitoria);
}

let ranking = rank("Carl",100, 10);

if (ranking < 10){
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Ferro`)
} else if(ranking <= 20){
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Bronze`)
} else if(ranking <= 50){
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Prata`)
} else if(ranking <= 80){
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Ouro`)
}  else if(ranking <= 90){
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Diamante`)
}  else if(ranking <= 100){
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Lendário`)
}  else{
    console.log(`O Héroi tem de saldo de ${ranking} vitórias; e está no nivel Imortal`)
}