    
       
       
        var nomeUser = prompt('Qual é o seu primeiro nome?');
        var idadeUser = prompt('Qual a sua idade?');
        var alturaUser = prompt('Qual a sua altura? (digite em metros com ponto)');
        var pesoUser = prompt('Qual é o seu peso? (kilograma)');
        var iMC = Math.round(pesoUser / (alturaUser * alturaUser));
       
        function calculaIMC(){
            alert(`Seu IMC é ${iMC}`);
        } 
        calculaIMC();

        function classification(){
            if(iMC < 18.5){alert(`Sua seu IMC é de MAGREZA com grau de Obesidade 0`);}
            else if(iMC >= 18.5 && iMC <= 24.9){alert(`Sua seu IMC é de NORMAL com grau de Obesidade 1/2`);}
            else if(iMC >= 25 && iMC <= 29.9){alert(`Sua seu IMC é de SOBREPESO com grau de Obesidade I`);}
            else if(iMC >= 30 && iMC <= 39.9){alert(`Sua seu IMC é de OBESIDADE com grau de Obesidade II`);}
            else {alert(`Sua seu IMC é de OBESIDADE GRAVE com grau de Obesidade III`);}
                                
        }
        classification()

