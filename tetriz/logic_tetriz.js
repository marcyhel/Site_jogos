var canvas,altura,largura,dimencao,grade,player,tabuleiro,aux,destru_ok=0,tipo_de_peca,colocar_grade;
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
	colocar_grade=0
	canvas = document.createElement("canvas");
	adaptar_tamanho_tela()
	document.body.appendChild(canvas);
	dimencao= canvas.getContext("2d");
	pontos=0;
	tipo_de_peca= getRandomInt(0,7);
	if(tipo_de_peca==0){
		player=new Player();
	}
	else if(tipo_de_peca==1){
		player=new Player2();
	}
	else if(tipo_de_peca==2){
		player=new Player3();
	}
	else if(tipo_de_peca==3){
		player=new Player4();
	}
	else if(tipo_de_peca==4){
		player=new Player5();
	}
	else if(tipo_de_peca==5){
		player=new Player6();
	}
	else if(tipo_de_peca==6){
		player=new Player7();
	}

	if(tipo_de_peca==0){
		player3=new Player();
		player2=new prox_play();
	}
	else if(tipo_de_peca==1){
		player3=new Player2();
		player2=new prox_play2();
	}
	else if(tipo_de_peca==2){
		player3=new Player3();
		player2=new prox_play3();
	}
	else if(tipo_de_peca==3){
		player3=new Player4();
		player2=new prox_play4();
	}
	else if(tipo_de_peca==4){
		player3=new Player5();
		player2=new prox_play5();
	}
	else if(tipo_de_peca==5){
		player3=new Player6();
		player2=new prox_play6();
	}
	else if(tipo_de_peca==6){
		player3=new Player7();
		player2=new prox_play7();
	}
	novo_jogo();
	//player=new Player2();

	run();
}
function novo_jogo(){
	
	tabuleiro= new Tabuleiro();
	novo_play()
	//tabuleiro.iniciar_tab();
}
function prox_play(){
	this.body=[[2+5,5+9],[1+5,5+9],[0+5,5+9],[1+5,4+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}
function prox_play2(){
	this.body=[[2+5,5+9],[1+5,5+9],[0+5,5+9],[3+5,5+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}
function prox_play3(){
	this.body=[[0+5,4+9],[1+5,4+9],[0+5,5+9],[1+5,5+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}
function prox_play4(){
	this.body=[[2+5,5+9],[1+5,5+9],[0+5,5+9],[2+5,4+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}
function prox_play5(){
	this.body=[[2+5,4+9],[1+5,4+9],[0+5,4+9],[2+5,5+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}
function prox_play6(){
	this.body=[[2+5,4+9],[1+5,4+9],[1+5,5+9],[0+5,5+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}
function prox_play7(){
	this.body=[[0+5,4+9],[1+5,4+9],[1+5,5+9],[2+5,5+9]];
	this.desenhar=function(cor){
		this.cor=[cor,cor,cor,cor];
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
}

function adaptar_tamanho_tela(){
	largura=700;
	altura=window.innerHeight;
	canvas.width= largura;
	canvas.height=altura;

	grade=Math.max( Math.floor(largura/19),Math.floor(altura/19));
}
function novo_play(){
	tipo_de_peca= getRandomInt(0,7);
	//player=new Player2();
	player=player3;
	if(tipo_de_peca==0){
		player3=new Player();
		player2=new prox_play();
	}
	else if(tipo_de_peca==1){
		player3=new Player2();
		player2=new prox_play2();
	}
	else if(tipo_de_peca==2){
		player3=new Player3();
		player2=new prox_play3();
	}
	else if(tipo_de_peca==3){
		player3=new Player4();
		player2=new prox_play4();
	}
	else if(tipo_de_peca==4){
		player3=new Player5();
		player2=new prox_play5();
	}
	else if(tipo_de_peca==5){
		player3=new Player6();
		player2=new prox_play6();
	}
	else if(tipo_de_peca==6){
		player3=new Player7();
		player2=new prox_play7();
	}
	
	
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
			player.girar(tabuleiro);
			break;
		case botao.direita:
			player.direcao(1,tabuleiro);
			break;
		case botao.baixo:
			cont_decida+=60
			break;
		case botao.espaco:
			/*aux=player.cor[0];
			player.cor[0]=player.cor[1];
			player.cor[1]=player.cor[2];
			player.cor[2]=aux;*/
			
			
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
		[0,0,0,0,0,0,0,0,0,0],
		
		];
	
	this.desenhar=function(){
		dimencao.fillStyle=color[0];
		for (let i=0; i<this.tab.length-1 ;i++){
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

				dimencao.fillRect(j*grade, i*grade, grade-colocar_grade, grade-colocar_grade);
				}
			}
			
	}
	this.iniciar_tab=function(){
		for (let i=2; i<this.tab.length ;i++){
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
	this.body=[[2,5],[1,5],[0,5],[1,4]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]+1]==0 ){
				this.giro=1;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]-1;
				this.body[3][1]=this.body[3][1]+1;}
		}

		else if(this.giro==1){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]-1]==0 ){
				this.giro=2;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]+1;
				this.body[3][1]=this.body[3][1]+1;}
		}
		else if(this.giro==2){
			if(tabu.tab[this.body[2][0]-1][this.body[2][1]-1]==0 ){
				this.giro=3;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]+1;
				this.body[3][1]=this.body[3][1]-1;}
	}
		else if(this.giro==3){
			
				this.giro=0;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]-1;
				this.body[3][1]=this.body[3][1]-1;
			
		}
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0&&(tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==1){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==2){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[2][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==3){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0&& tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && this.body[3][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		
	}
}
function Player2(){
	this.body=[[2,5],[1,5],[0,5],[3,5]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	//this.cor=[1,2,3,this.color];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]+1]==0 &&tabu.tab[this.body[3][0]-2][this.body[3][1]-2]==0 && tabu.tab[this.body[0][0]-1][this.body[0][1]-1]==0){
				this.giro=1;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]-1;

				
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]+1;
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1]-2;
			}
	
		}

		else if(this.giro==1){
			if(tabu.tab[this.body[1][0]+1][this.body[1][1]]==0&& tabu.tab[this.body[3][0]+2][this.body[3][1]+2]==0 && tabu.tab[this.body[1][0]+2][this.body[1][1]]!= tabu.tab.length-2 ){
				this.giro=0;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]-1;
				this.body[3][0]=this.body[3][0]+2;
				this.body[3][1]=this.body[3][1]+2;
	
				}
		}
		
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
			
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[3][0]+1][this.body[3][1]]==0  && this.body[3][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
				
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[2];
			
			novo_play();
			}
		}
		if(this.giro==1){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0&& tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
				
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[2];
			
			novo_play();
			}
		}
		
		
	}
}
function Player3(){
	this.body=[[0,4],[1,4],[0,5],[1,5]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0&&(tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[3][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		
		
		
	}
}
function Player4(){
	this.body=[[2,5],[1,5],[0,5],[2,4]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]+1]==0 && tabu.tab[this.body[3][0]-2][this.body[3][1]]==0&& tabu.tab[this.body[0][0]-1][this.body[0][1]-1]==0){
				this.giro=1;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1];}
		}

		else if(this.giro==1){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]-1]==0 && this.body[0][0]+2!=tabu.tab.length&& tabu.tab[this.body[0][0]-1][this.body[0][1]+1]==0 && tabu.tab[this.body[3][0]][this.body[3][1]+2]==0){
				this.giro=2;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1]+2;}
		}
		else if(this.giro==2){
			if(tabu.tab[this.body[2][0]-1][this.body[2][1]-1]==0 && tabu.tab[this.body[3][0]+2][this.body[3][1]]==0&& tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 ){
				this.giro=3;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]+2;
				this.body[3][1]=this.body[3][1];}
	}
		else if(this.giro==3){
			if(tabu.tab[this.body[2][0]-1][this.body[2][1]+1]==0 && tabu.tab[this.body[3][0]][this.body[3][1]-2]==0&& tabu.tab[this.body[0][0]+2][this.body[0][1]-2]==0){
				this.giro=0;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1]-2;}

		}
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0&&(tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==1){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==2){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[2][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==3){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 &&tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0&& tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && this.body[3][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		
	}
}
function Player5(){
	this.body=[[2,4],[1,4],[0,4],[2,5]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]+1]==0  &&tabu.tab[this.body[0][0]-1][this.body[0][1]-1]==0 && tabu.tab[this.body[3][0]][this.body[3][1]-2]==0 ){
				this.giro=1;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1]-2;}
		}

		else if(this.giro==1){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]-1]==0 && this.body[0][0]+2!=tabu.tab.length&& tabu.tab[this.body[0][0]-1][this.body[0][1]+1]==0  && tabu.tab[this.body[3][0]-2][this.body[3][1]]==0){
				this.giro=2;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1];}
		}
		else if(this.giro==2){
			if(tabu.tab[this.body[2][0]-1][this.body[2][1]-1]==0 && tabu.tab[this.body[3][0]][this.body[3][1]+2]==0&& tabu.tab[this.body[0][0]+1][this.body[0][1]+1]==0 && this.body[0][0]+1 < tabu.tab.length-2){
				this.giro=3;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1]+2;}
	}
		else if(this.giro==3){
			if(tabu.tab[this.body[2][0]-1][this.body[2][1]+1]==0 && tabu.tab[this.body[3][0]+2][this.body[3][1]]==0 && tabu.tab[this.body[0][0]+1][this.body[0][1]-1]==0 && this.body[0][0]+1 < tabu.tab.length-1){
				this.giro=0;
				this.body[0][0]=this.body[0][0]+1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]-1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]+2;
				this.body[3][1]=this.body[3][1];}

		}
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0&&(tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==1){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 &&tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[3][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==2){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[2][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==3){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 &&tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0&& tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		
	}
}
function Player6(){
	this.body=[[2,4],[1,4],[1,5],[0,5]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[1][0]+1][this.body[1][1]]==0  &&tabu.tab[this.body[2][0]][this.body[2][1]-1]==0  &&tabu.tab[this.body[0][0]][this.body[0][1]+1]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]-2]==0 ){
				this.giro=1;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1]+1;

				this.body[1][0]=this.body[1][0]+1;
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]+1;
				this.body[3][1]=this.body[3][1]-2;}
		}

		else if(this.giro==1){
			if(tabu.tab[this.body[2][0]][this.body[2][1]+1]==0 &&tabu.tab[this.body[1][0]-1][this.body[1][1]]==0 &&tabu.tab[this.body[3][0]-1][this.body[3][1]+2]==0 && tabu.tab[this.body[0][0]][this.body[0][1]-1]==0 && this.body[0][0]+2!=tabu.tab.length){
				this.giro=0;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1]-1;

				this.body[1][0]=this.body[1][0]-1;
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]-1;
				this.body[3][1]=this.body[3][1]+2;}
		}
		
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0&&(tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && this.body[0][0]< tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==1){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 &&tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[0][0]< tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==2){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[2][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==3){
			if(tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 &&tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0&& tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && this.body[0][0]!= tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		
	}
}
function Player7(){
	this.body=[[0,4],[1,4],[1,5],[2,5]];
	this.giro=0;
	this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=[this.color,this.color,this.color,this.color];
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	//this.color="#000";
	this.girar=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[1][0]+1][this.body[1][1]]==0  &&tabu.tab[this.body[2][0]][this.body[2][1]-1]==0  &&tabu.tab[this.body[0][0]+2][this.body[0][1]-1]==0 && tabu.tab[this.body[3][0]-1][this.body[3][1]]==0 ){
				this.giro=1;
				this.body[0][0]=this.body[0][0]+2;
				this.body[0][1]=this.body[0][1]-1;

				this.body[1][0]=this.body[1][0]+1;
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]-1;
				this.body[3][1]=this.body[3][1];}
		}

		else if(this.giro==1){
			if(tabu.tab[this.body[2][0]][this.body[2][1]+1]==0 &&tabu.tab[this.body[1][0]-1][this.body[1][1]]==0 &&tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && tabu.tab[this.body[0][0]-2][this.body[0][1]+1]==0 && this.body[0][0]+2!=tabu.tab.length){
				this.giro=0;
				this.body[0][0]=this.body[0][0]-2;
				this.body[0][1]=this.body[0][1]+1;

				this.body[1][0]=this.body[1][0]-1;
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]+1;
				this.body[3][1]=this.body[3][1];}
		}
		
	}
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
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	this.direcao=function(valor,tabu){
		if((tabu.tab[this.body[0][0]][this.body[0][1]+valor])==0 && (tabu.tab[this.body[1][0]][this.body[1][1]+valor])==0 &&(tabu.tab[this.body[2][0]][this.body[2][1]+valor])==0&&(tabu.tab[this.body[3][0]][this.body[3][1]+valor])==0 ){
			this.body[0][1]+=valor;
			this.body[1][1]+=valor;
			this.body[2][1]+=valor;
			this.body[3][1]+=valor;
		}
		
	}
	this.descer=function(tabu){
		if(this.giro==0){
			if(tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[3][0]< tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		if(this.giro==1){
			if(tabu.tab[this.body[0][0]+1][this.body[0][1]]==0 && tabu.tab[this.body[1][0]+1][this.body[1][1]]==0 && tabu.tab[this.body[2][0]+1][this.body[2][1]]==0 &&tabu.tab[this.body[3][0]+1][this.body[3][1]]==0 && this.body[0][0]< tabu.tab.length-2 ){
				this.body[0][0]+=1;
				this.body[1][0]+=1;
				this.body[2][0]+=1;
				this.body[3][0]+=1;
			}else{
			tabu.tab[this.body[0][0]][this.body[0][1]]=this.cor[0];
			tabu.tab[this.body[1][0]][this.body[1][1]]=this.cor[1];
			tabu.tab[this.body[2][0]][this.body[2][1]]=this.cor[2];
			tabu.tab[this.body[3][0]][this.body[3][1]]=this.cor[3];
			novo_play();
			}
		}
		
		
	}
}


function destruir_bloco(tabu){
	let destroi=[];
	let dest=0;
	for(let i=tabu.tab.length-1;i>=0;i--){
		dest=0;
		for(let j=9;j>=0;j--){
			
			if(tabu.tab[i][j]!=0){

				//destroi.splice(0,0,[i,j]);
				//destroi.splice(0,0,[i,j-1]);
				//destroi.splice(0,0,[i,j-2]);

			}else{
				dest=1;
				break;
			}
			
		}
		if(dest==0){
			for(let j=9;j>=0;j--){
				tabu.tab[i][j]=0;
			}
			tabu.pontos+=5;
			document.getElementById("pontos").innerHTML=`<h1>Score: ${tabu.pontos}</h1>`;
			cair_bloco(tabu,i);
			break;
		}
	}
	
	//console.log(destroi[0][0]);
	/*if(destroi.length !=0){
		for(let i=0;i<destroi.length;i++){
		tabu.tab[destroi[i][0]][destroi[i][1]]=0;
		tabu.pontos+=5;
		document.getElementById("pontos").innerHTML=`<h1>Score: ${tabu.pontos}</h1>`;
		}
		
	}*/
	
}
function cair_bloco(tabu,indice){
	
	for(let i=indice;i>0;i--){
		for(let j=9;j>=0;j--){
			tabu.tab[i][j]= tabu.tab[i-1][j];
			tabu.tab[i-1][j]=0;
		}
	}

}
function atualizar(){
	
	//cair_bloco(tabuleiro);
	destruir_bloco(tabuleiro);
	if(cont_decida>60){
		
		player.descer(tabuleiro);
		cont_decida=0;
		//if(destru_ok>70){
			destruir_bloco(tabuleiro);
		//}
		
	}
	cont_decida+=1;
	destru_ok+=1;
	
}
function desenhar(){
	dimencao.clearRect(0,0,largura,altura);
	tabuleiro.desenhar();
	player.desenhar();
	player2.desenhar(player3.cor[1]);

	

}
function run(){
	atualizar();
	desenhar();

	setTimeout(run,10)
}
function reset(a){
		novo_jogo();
}
function retorno(){
	window.location.replace("../index.html");

}

iniciar();