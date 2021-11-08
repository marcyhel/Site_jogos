var canvas,altura,largura,dimencao,grade,player,tabuleiro,aux,destru_ok=0;
var botao={
	esquerda:37,
	cima:38,
	direita:39,
	baixo:40,
	espaco:32
}
var color=["#23252B","#FF150E","#1355E8","#28FF4E","#FFEF2E","#AF23FF","#FF5D00","#1E803F"];
var jogando=true,cont_decida=0;

window.addEventListener("resize",adaptar_tamanho_tela);
window.addEventListener("keydown",keyDown);

function iniciar(){
	canvas = document.createElement("canvas");
	adaptar_tamanho_tela()
	document.body.appendChild(canvas);
	dimencao= canvas.getContext("2d");
	pontos=0;
	novo_jogo();
	run();
}
function novo_jogo(){
	player=new Player();
	tabuleiro= new Tabuleiro();
	tabuleiro.iniciar_tab();
}
function adaptar_tamanho_tela(){
	largura=400;
	altura=window.innerHeight;
	canvas.width= largura;
	canvas.height=altura;

	grade=Math.max( Math.floor(largura/19),Math.floor(altura/19));
}
function novo_play(){
	player=new Player();
}

function keyDown(e){
	if(!jogando && (e.keyCode==botao.cima||e.keyCode==botao.baixo||e.keyCode==botao.direita||e.keyCode==botao.esquerda)){
		jogando=true;
	}
	switch(e.keyCode){
		case botao.esquerda:
			player.direcao(-1,tabuleiro);
			break;
		case botao.cima:
			
			break;
		case botao.direita:
			player.direcao(1,tabuleiro);
			break;
		case botao.baixo:
			cont_decida+=60
			break;
		case botao.espaco:
			aux=player.cor[0];
			player.cor[0]=player.cor[1];
			player.cor[1]=player.cor[2];
			player.cor[2]=aux;
			
			break;
	}
}
function Tabuleiro(){
	this.pontos=0
	this.tab=[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		
		];
	
	this.desenhar=function(){
		dimencao.fillStyle=color[0];
		for (let i=0; i<this.tab.length ;i++){
			for(let j=0; j<10 ;j++){
				if(this.tab[i][j]==1){
					dimencao.fillStyle=color[1];
				}
				else if(this.tab[i][j]==2){
					dimencao.fillStyle=color[2];
				}
				else if(this.tab[i][j]==3){
					dimencao.fillStyle=color[3];
				}
				else if(this.tab[i][j]==4){
					dimencao.fillStyle=color[4];
				}
				else if(this.tab[i][j]==5){
					dimencao.fillStyle=color[5];
				}
				else if(this.tab[i][j]==6){
					dimencao.fillStyle=color[6];
				}
				else if(this.tab[i][j]==7){
					dimencao.fillStyle=color[7];
				}
				else{
					dimencao.fillStyle=color[0];
				}

				dimencao.fillRect(j*grade, i*grade, grade-1, grade-1);
				}
			}
			
	}
	this.iniciar_tab=function(){
		for (let i=13; i<this.tab.length ;i++){
			for(let j=0; j<10 ;j++){
				this.tab[i][j]=getRandomInt(1,color.length);
			}
		}
	}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function Player(){
	this.body=[[2,5],[1,5],[0,5]];
	
	this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.desenhar=function(){
		dimencao.fillStyle=color[0];
		for (var i=0; i<this.body.length ;i++){
			if(this.cor[i]==1){
				dimencao.fillStyle=color[1];
			}
			else if(this.cor[i]==2){
				dimencao.fillStyle=color[2];
			}
			else if(this.cor[i]==3){
				dimencao.fillStyle=color[3];
			}
			else if(this.cor[i]==4){
				dimencao.fillStyle=color[4];
			}
			else if(this.cor[i]==5){
				dimencao.fillStyle=color[5];
			}
			else if(this.cor[i]==6){
				dimencao.fillStyle=color[6];
			}
			else if(this.cor[i]==7){
				dimencao.fillStyle=color[7];
			}
			else{
				dimencao.fillStyle=color[0];
			}
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-1, grade-1);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
			this.body.pop();
			nova_posi=[this.body[0][0]+1,this.body[0][1]]
			this.body.splice(0,0,nova_posi);
		}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			novo_play();
		}
	}
}
function destruir_bloco(tabu){
	let destroi=[];
	for(let i=tabu.tab.length-1;i>=0;i--){
		for(let j=9;j>1;j--){
			
			if(tabu.tab[i][j]== tabu.tab[i][j-1] && tabu.tab[i][j-1]==tabu.tab[i][j-2] && tabu.tab[i][j]!=0){
				destroi.splice(0,0,[i,j]);
				destroi.splice(0,0,[i,j-1]);
				destroi.splice(0,0,[i,j-2]);

			}
			
		}
	}
	for(let i=tabu.tab.length-1;i>1;i--){
		for(let j=9;j>=0;j--){
			if(tabu.tab[i][j]== tabu.tab[i-1][j] && tabu.tab[i-1][j]==tabu.tab[i-2][j] && tabu.tab[i][j]!=0){
				destroi.splice(0,0,[i,j]);
				destroi.splice(0,0,[i-1,j]);
				destroi.splice(0,0,[i-2,j]);

			}
		}
	}
	for(let i=tabu.tab.length-1;i>1;i--){
		for(let j=9;j>1;j--){
			if(tabu.tab[i][j]== tabu.tab[i-1][j-1] && tabu.tab[i-1][j-1]==tabu.tab[i-2][j-2] && tabu.tab[i][j]!=0){
				destroi.splice(0,0,[i,j]);
				destroi.splice(0,0,[i-1,j-1]);
				destroi.splice(0,0,[i-2,j-2]);

			}
		
		}
	}
	for(let i=tabu.tab.length-1;i>1;i--){
		for(let j=8;j>=0;j--){
			if(tabu.tab[i][j]== tabu.tab[i-1][j+1] && tabu.tab[i-1][j+1]==tabu.tab[i-2][j+2] && tabu.tab[i][j]!=0){
				destroi.splice(0,0,[i,j]);
				destroi.splice(0,0,[i-1,j+1]);
				destroi.splice(0,0,[i-2,j+2]);

			}
		
		}
	}
	//console.log(destroi[0][0]);
	if(destroi.length !=0){
		for(let i=0;i<destroi.length;i++){
		tabu.tab[destroi[i][0]][destroi[i][1]]=0;
		tabu.pontos+=5;
		document.getElementById("pontos").innerHTML=`<h1>Score: ${tabu.pontos}</h1>`;
		}
		
	}
	
}
function cair_bloco(tabu){
	
	for(let i=tabu.tab.length-1;i>0;i--){
		for(let j=9;j>=0;j--){
			if(tabu.tab[i][j]==0 && tabu.tab[i-1][j]!=0){
				tabu.tab[i][j]=tabu.tab[i-1][j];
				tabu.tab[i-1][j]=0;

			}
		}
	}

}
function atualizar(){
	
	cair_bloco(tabuleiro);
	if(cont_decida>60){
		
		player.descer(tabuleiro);
		cont_decida=0;
		if(destru_ok>70){
			destruir_bloco(tabuleiro);
		}
		
	}
	cont_decida+=1;
	destru_ok+=1;
	
}
function desenhar(){
	dimencao.clearRect(0,0,largura,altura);
	tabuleiro.desenhar();
	player.desenhar();
	

}
function run(){
	atualizar();
	desenhar();

	setTimeout(run,10)
}

iniciar();