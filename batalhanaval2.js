// Gera um numero aleatorio entre 1 e 5:
var posicaoAleatoria = 1 + Math.floor(Math.random() * 5);
//A esta posição aleatoria, acrescenta-se uma unidade, obtendo a parte2 do navio e uma unidade à parte2 para se obter a parte3.
var parte1 = posicaoAleatoria;
var parte2 = parte1 + 1;
var parte3 = parte2 + 1;
//O jogo inicia-se com zero jogadas e zero células (partes do barco) atingidas, logo o barco estar afundado é falso
var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

//enquanto o barco não tiver afundado, um ciclo irá correr. Este ciclo faz com que se numa jogada se o jogador escolher um número menor que 0 ou maior que sete, o programa não corre e envia um alerta a dizer que a jogada é inválida.
//se isso não acontecer, o programa continua e acrescenta uma unidade ao total de jogadas.
//se numa jogada, o número corresponder ao numero da parte1, parte 2 ou parte3, um aviso é enviado a dizer que o jogador atingiu uma parte do barco.
//quando as todas as partes forem atingidas, o navio terá afundado e um novo aviso indicará que o jogador acertou em todas as partes. Se tal não for verdadeiro, então uma aviso diz "falhaste" e o jogador volta a jogar, até que tenha atingido as três partes do barco.
while (foiAfundado == false) {
   jogada = prompt("Faz a tua jogada: Escolhe um numero entre 1 e 7:");
   if (jogada < 1 || jogada > 7) {
      alert("Jogada inválida. Tenta de novo!");
   } else {
      totalJogadas = totalJogadas + 1;
      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {
         atingidas = atingidas +1;
		 alert("Acertaste em mais uma parte! (Parte " + atingidas + " de 3)");
         if (atingidas == 3) {
            foiAfundado = true;
            alert("Navio finalmente afundado!");
         }
      } else {
         alert("Falhaste...");
      }
   }
}

// Após a conclusão do jogo, é apresentada uma estatistica da pontaria do jogador.
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas)*100 + "%";
alert(estatistica);