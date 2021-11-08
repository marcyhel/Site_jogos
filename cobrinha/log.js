var canvas,dimencao;
var fps,largura , altura;
var grade,jogando;
var cobra,comida,texto_espera,contador;
var botao={
	esquerda:37,
	cima:38,
	direita:39,
	baixo:40
}
function Contador(){
	this.texto;
	this.color="#ffff"
	this.mensagem=3
		
	this.add_contador=function(){
		this.mensagem+=1;
	}
	this.print=function(){
		dimencao.fillStyle=this.color;
		dimencao.font=grade+30+"px Arial";
		dimencao.fillText(this.mensagem,largura/2 -( dimencao.measureText(this.mensagem).width)/2,altura/10 )
	}
}
function Texto_espera(){
	this.texto;
	this.color="#5d8357"
	this.mensagem="Precione alguma seta pra jogar"
	this.print=function(){
		dimencao.fillStyle=this.color;
		dimencao.font=grade+30+"px Arial";
		dimencao.fillText(this.mensagem,largura/2 -( dimencao.measureText(this.mensagem).width)/2,altura/2 )
	}
}
window.addEventListener("resize",adaptar_tamanho_tela);
window.addEventListener("keydown",keyDown);
function keyDown(e){
	if(!jogando && (e.keyCode==botao.cima||e.keyCode==botao.baixo||e.keyCode==botao.direita||e.keyCode==botao.esquerda)){
		jogando=true;
	}
	switch(e.keyCode){
		case botao.esquerda:
			cobra.direcao=[-1,0];
			break;
		case botao.cima:
			cobra.direcao=[0,-1];
			break;
		case botao.direita:
			cobra.direcao=[1,0];
			break;
		case botao.baixo:
			cobra.direcao=[0,1];
			break;
	}
}
function adaptar_tamanho_tela(){
	largura=window.innerWidth;
	altura=window.innerHeight;
	canvas.width= largura;
	canvas.height=altura;

	grade=Math.max( Math.floor(largura/60),Math.floor(altura/60));
}
function iniciar(){
	canvas = document.createElement("canvas");
	adaptar_tamanho_tela()
	document.body.appendChild(canvas);
	dimencao= canvas.getContext("2d");
	fps=15;
	novo_jogo();
	rodar();
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function novo_jogo(){
	cobra=new Cobra();
	comida=new Comida(Math.floor(getRandomInt(grade, altura)/grade)-1,Math.floor(getRandomInt(grade,largura)/grade)-1);
	texto_espera=new Texto_espera();
	contador=new Contador();
	jogando=false;
}
function Cobra(){
	this.body=[[30,30],[30,31],[30,32]];
	this.color="#000";
	var coli=0;
	this.direcao=[0,-1];
	this.atualizar=function(){
		var nova_posi=[this.body[0][0]+this.direcao[0],this.body[0][1]+this.direcao[1]];
		if (this.body.indexOf(nova_posi) > -1){
			console.log("colidiu");
		}
		if(!jogando){
			if(this.direcao[1]== -1 && nova_posi[1]<=(altura * 0.1 / grade)){
				this.direcao=[1,0];
			}
			else if(this.direcao[0]== 1 && nova_posi[0]>=(largura * 0.9 / grade)){
				this.direcao=[0,1];
			}
			else if(this.direcao[1]== 1 && nova_posi[1]>=(altura * 0.8 / grade)){
				this.direcao=[-1,0];
			}
			else if(this.direcao[0]== -1 && nova_posi[0]<=(largura * 0.05 / grade)){
				this.direcao=[0,-1];
			}
		}
		if(nova_posi[0]==this.body[1][0]&& nova_posi[1]==this.body[1][1]){
			this.body.reverse();
			nova_posi=[this.body[0][0]+this.direcao[0],this.body[0][1]+this.direcao[1]]

		}
		this.colid=function(){
			if(nova_posi[0]>=(largura * 1 / grade)){
			
			return true;
			}
			else if(nova_posi[0] < 0){
				
				return true;
			}
			else if(nova_posi[1] < 0){
				
				return true;
			}
			else if(nova_posi[1]>=(altura * 1 / grade)){
				
				return true;
			}
			coli= this.body.find(_colitem => nova_posi.includes(_colitem));
			if(coli!= null){
				console.log("fad");
			}
			
			
		}
		
		this.body.pop();
		this.body.splice(0,0,nova_posi);
		
		
		
	}
	this.desenhar=function(){
		dimencao.fillStyle=this.color;
		for (var i=0; i<this.body.length ;i++){
			dimencao.fillRect(this.body[i][0]*grade, this.body[i][1]*grade, grade, grade);
			
		}

	}
}
function Comida(altura,largura){
	this.posi_comida=[largura,altura];
	this.desenhar=function(){
		dimencao.fillStyle="#FF4A43";
		dimencao.fillRect(this.posi_comida[0]*grade, this.posi_comida[1]*grade,grade, grade);
	}
	this.colid=function(cobra){
		if (cobra.body[0][0]==this.posi_comida[0] &&cobra.body[0][1]==this.posi_comida[1]){
			cobra.body.splice(cobra.body.length,0,[cobra.body[cobra.body.length-1][0]+cobra.direcao[0],cobra.body[cobra.body.length-1][1]+cobra.direcao[1]]);
			return true;
		}
	}
}
function desenhar(){
	dimencao.clearRect(0,0,largura,altura);
	cobra.desenhar();
	comida.desenhar();
	if(!jogando){
		texto_espera.print();
	}
	contador.print();
}
function atualizar(){
	cobra.atualizar();
	if(cobra.colid()){
		novo_jogo();
	}
	if(comida.colid(cobra)){
		comida=new Comida(Math.floor(getRandomInt(grade, altura)/grade)-1,Math.floor(getRandomInt(grade,largura)/grade)-1);
		contador.add_contador();
	}
}
function rodar(){
	atualizar();
	desenhar();
	setTimeout(rodar,1000/fps);
}
iniciar()