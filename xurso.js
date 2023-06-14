exports.handler = async (event) => {
     
    var recebido = JSON.parse(event.body);
    
    console.log("entrando na lambida");
    
    var login = recebido.login;
    var senha = recebido.senha;
    
    if (login == "xusers" && senha == 123) {
        console.log("logado com sucesso");
        
        var compra1 = recebido.compra1;
        var compra2 = recebido.compra2;
        var resultadocompras;
        
        var  resultadoCompras = compra1 + compra2;
    } else {
    console.log("falhou na hora de logar");
    }
        
    var num1 = recebido.num1;
    
    if (num1 == 10 || num1 == 11) {
        console.log("o valor do numero é 10 ou 11");
    } else {
        console.log("o valor é diferente de 10");
    }
    
    var num2 = recebido.num2;
    
    if (num2 == 50) {
        console.log("o valor é igual a 50");
    } else if (num2 == 51) {
        console.log("o numero é igual a 51");
    } else if (num2 == 52) {
        console.log("o numero é igual a 52");
    } else if (num2 == 53) {
        console.log("o numero é igual a 53");
    } else {
        console.log("o numero não é 50,51,52 nem 53");
    }
    
    console.log("saindo da lambda");
    
    var resposta = {
        "mensagem": "tudo certo",
        "resultado": resultadoCompras
    }
   const response = {
       statusCode: 200,
       body: JSON.stringify(resposta),
   };
   return response;
};
