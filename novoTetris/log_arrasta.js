var canvas,dimencao,altura,largura,grade,tabuleiro,colocar_grade,player,player2,player4,objet_atual=null,nova_p,aa;
var objetos=[],inicioX=0,inicioY=0;
var posicao_antiga=[]
window.addEventListener("resize",adaptar_tamanho_tela);
var color=["#23252B","#FF150E","#1355E8","#28FF4E","#FFEF2E","#AF23FF","#FF5D00","#1E803F"];
var colorerro="#555555"
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function iniciar(){
	novo_jogo();
	criar_peca();

	/*player=new Player(17,2,3);
	player2=new Player(30,10,0);
	player3=new Player(3,10,2);
	player4=new Player(8,0,1);
	objetos.push(player);
	objetos.push(player2);
	objetos.push(player3);
	objetos.push(player4);*/

	canvas = document.createElement("canvas");
	adaptar_tamanho_tela()
	document.body.appendChild(canvas);
	dimencao= canvas.getContext("2d");

	colocar_grade=1;
	
	run();
}
function criar_peca(){
	var posx=0
	var posy=0
	
	for(var i=0;i<6;i++){
		if(i==0){

			posx=8
			posy=2
		}if(i==1){
			posx=13
			posy=2
		}
		if(i==2){
			posx=18
			posy=2
		}
		if(i==3){

			posx=8
			posy=7
		}if(i==4){
			posx=13
			posy=7
		}
		if(i==5){
			posx=18
			posy=7
		}
		let giro=getRandomInt(0,4);
		let qual_peca=getRandomInt(0,7);
		
		if(qual_peca==0){
			player=new Player(posx,posy,giro);
		}
		else if(qual_peca==1){
			player=new Player2(posx,posy,giro);
		}
		else if(qual_peca==2){
			player=new Player3(posx,posy,giro);
		}
		else if(qual_peca==3){
			player=new Player4(posx,posy,giro);
		}
		else if(qual_peca==4){
			player=new Player5(posx,posy,giro);
		}
		else if(qual_peca==5){
			player=new Player6(posx,posy,giro);
		}
		else if(qual_peca==6){
			player=new Player7(posx,posy,giro);
		}
		
		//player=new Player7(posx,posy,giro);
		
		objetos.push(player);
		posicao_antiga.push(player.possao_antiga);
	}
	
}
function adaptar_tamanho_tela(){
	largura=window.innerWidth;
	altura=window.innerHeight;
	canvas.width= largura;
	canvas.height=altura;

	grade=Math.max( Math.floor(largura/27),Math.floor(altura/27));
}
function Player(posix,posiy,gir){
	this.body=[[2+posiy,5+posix],[1+posiy,5+posix],[0+posiy,5+posix],[1+posiy,4+posix]];
	this.giro=gir;
	this.posiX=posix
	this.posiY=posiy
	this.pode=true;
	var possao_antiga=[[2+posiy,5+posix],[1+posiy,5+posix],[0+posiy,5+posix],[1+posiy,4+posix]];
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	//this.color="#000";
	
	if(this.giro==0){
			this.body[0][0]=this.body[0][0]-1;
			this.body[0][1]=this.body[0][1]-1;

			this.body[2][0]=this.body[2][0]+1;
			this.body[2][1]=this.body[2][1]+1;

			this.body[3][0]=this.body[3][0]-1;
			this.body[3][1]=this.body[3][1]+1;
		}
	else if(this.giro==1){
		
			//this.giro=2;
			this.body[0][0]=this.body[0][0]-1;
			this.body[0][1]=this.body[0][1]+1;

			this.body[2][0]=this.body[2][0]+1;
			this.body[2][1]=this.body[2][1]-1;

			this.body[3][0]=this.body[3][0]+1;
			this.body[3][1]=this.body[3][1]+1;}
	else if(this.giro==2){
		
			//this.giro=3;
			//this.giro=3;
			this.body[0][0]=this.body[0][0];
			this.body[0][1]=this.body[0][1];

			this.body[2][0]=this.body[2][0];
			this.body[2][1]=this.body[2][1];

			this.body[3][0]=this.body[3][0];
			this.body[3][1]=this.body[3][1];}

	else if(this.giro==3){
		
			//this.giro=0;
			this.body[0][0]=this.body[0][0];
			this.body[0][1]=this.body[0][1];

			this.body[2][0]=this.body[2][0];
			this.body[2][1]=this.body[2][1];

			this.body[3][0]=this.body[3][0];
			this.body[3][1]=this.body[3][1]+2;
		
	}
	
	this.desenhar=function(){
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		

		for (var i=0; i<this.body.length ;i++){
			
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}
	}
	
}
function Player2(posix,posiy,gir){
	this.body=[[2+posiy,5+posix],[1+posiy,5+posix],[0+posiy,5+posix],[3+posiy,5+posix]];
	this.giro=gir;
	this.posiX=posix
	this.posiY=posiy
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	//this.cor=[1,2,3,this.color];
	this.pode=true;
	this.nova_posi=[0,0]
	//this.color="#000";
	
		if(gir==0 || gir==2){
			
				
			this.body[0][0]=this.body[0][0]-1;
			this.body[0][1]=this.body[0][1]-1;

			this.body[2][0]=this.body[2][0]+1;
			this.body[2][1]=this.body[2][1]+1;
			this.body[3][0]=this.body[3][0]-2;
			this.body[3][1]=this.body[3][1]-2;
			
	
		}

		else if(gir==1|| gir==3){
			
				
			this.body[0][0]=this.body[0][0];
			this.body[0][1]=this.body[0][1];

			this.body[2][0]=this.body[2][0];
			this.body[2][1]=this.body[2][1];
			this.body[3][0]=this.body[3][0];
			this.body[3][1]=this.body[3][1];

		}
		
		
	
	this.desenhar=function(){
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		
		for (var i=0; i <this.body.length ;i++){
			
			dimencao.fillRect(this.body[i][1]*grade, this.body[i][0]*grade, grade-colocar_grade, grade-colocar_grade);
			
		}

	}
}
function Player3(posix,posiy,gir){
	this.body=[[0+posiy,4+posix],[1+posiy,4+posix],[0+posiy,5+posix],[1+posiy,5+posix]];
	this.giro=gir;
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	this.nova_posi=[0,0]
	this.pode=true;
	//this.color="#000";
	this.girar=function(tabu){
		
	}
	this.desenhar=function(){
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		for (var i=0; i<this.body.length ;i++){
			
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
function Player4(posix,posiy,gir){
	this.body=[[2+posiy,5+posix],[1+posiy,5+posix],[0+posiy,5+posix],[2+posiy,4+posix]];
	this.giro=gir;
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	this.pode=true;
	//this.color="#000";
	
		if(this.giro==0){
			
				this.giro=1;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1];
		
		}
		else if(this.giro==1){
			
				this.giro=2;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1]+2;
		}
		else if(this.giro==2){
			
				this.giro=3;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1];
	
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1]+2;
	}
		else if(this.giro==3){
			
				this.giro=0;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1];
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1];

		}
	
	this.desenhar=function(){
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		for (var i=0; i<this.body.length ;i++){
			
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
function Player5(posix,posiy,gir){
	this.body=[[2+posiy,4+posix],[1+posiy,4+posix],[0+posiy,4+posix],[2+posiy,5+posix]];
	this.giro=gir;
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	this.pode=true;
	//this.color="#000";
	
		if(this.giro==0){
			
				this.giro=1;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]-1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]+1;
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1]-2;
		}

		else if(this.giro==1){
			
				this.giro=2;
				this.body[0][0]=this.body[0][0]-1;
				this.body[0][1]=this.body[0][1]+1;
	
				this.body[2][0]=this.body[2][0]+1;
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1];
		}
		else if(this.giro==2){
			
				this.giro=3;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1];
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1];
	}
		else if(this.giro==3){
			
				this.giro=0;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1];
	
				this.body[3][0]=this.body[3][0]-2;
				this.body[3][1]=this.body[3][1]-2;

		}
	
	this.desenhar=function(){
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		for (var i=0; i<this.body.length ;i++){
			
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
function Player6(posix,posiy,gir){
	this.body=[[2+posiy,4+posix],[1+posiy,4+posix],[1+posiy,5+posix],[0+posiy,5+posix]];
	this.giro=gir;
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	//this.cor=[1,2,3,4];
	this.pode=true;
	this.nova_posi=[0,0]
	//this.color="#000";

		if(this.giro==0 || this.giro==2){
			
				this.giro=1;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1]+1;

				this.body[1][0]=this.body[1][0]+1;
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]+1;
				this.body[3][1]=this.body[3][1]-2;
		}

		else if(this.giro==1 || this.giro==3){
			
				this.giro=0;
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1];

				this.body[1][0]=this.body[1][0];
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1];
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1];
		}
		
	this.desenhar=function(){
		
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		for (var i=0; i<this.body.length ;i++){
			
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
function Player7(posix,posiy,gir){
	this.body=[[0+posiy,4+posix],[1+posiy,4+posix],[1+posiy,5+posix],[2+posiy,5+posix]];
	this.giro=gir;
	//this.color=getRandomInt(1,color.length);
	//this.cor=[getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length),getRandomInt(1,color.length)];
	this.cor=getRandomInt(1,color.length);
	//this.cor=[1,2,3,4];
	this.nova_posi=[0,0]
	this.pode=true
	//this.color="#000";
	
		if(this.giro==0 || this.giro ==2){
			
				
				this.body[0][0]=this.body[0][0]+2;
				this.body[0][1]=this.body[0][1]-1;

				this.body[1][0]=this.body[1][0]+1;
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1]-1;
	
				this.body[3][0]=this.body[3][0]-1;
				this.body[3][1]=this.body[3][1];
		}

		else if(this.giro==1 || this.giro==3){
			
				
				this.body[0][0]=this.body[0][0];
				this.body[0][1]=this.body[0][1];

				this.body[1][0]=this.body[1][0];
				this.body[1][1]=this.body[1][1];
	
				this.body[2][0]=this.body[2][0];
				this.body[2][1]=this.body[2][1];
	
				this.body[3][0]=this.body[3][0];
				this.body[3][1]=this.body[3][1];
		}
		
	
	this.desenhar=function(){
		if(this.pode){
			dimencao.fillStyle=color[this.cor];
		}
		else{
			dimencao.fillStyle=colorerro;
		}
		for (var i=0; i<this.body.length ;i++){
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
function novo_jogo(){
	tabuleiro=new Tabuleiro();
}
function Tabuleiro(){
	this.pontos=0
	this.largura=10
	this.altura=10
	this.tab=[  ]

	for (let i =0;i<this.altura;i++){
		var aux=[]

		for (let j=0;j<this.largura;j++){
			aux.push('0')
		}
		this.tab.push(aux)
	}
		
		
	
	this.desenhar=function(){

		dimencao.fillStyle=color[0];
		//console.log(this.tab[0].length )
		for (let i=0; i<this.altura;i++){
			for(let j=0; j<this.largura;j++){
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
function atualizar(){
	canvas.onmousedown=function(event){

		for(let i=0;i<objetos.length;i++){
			objet_atual=null;
			for(let j=0;j<objetos[i].body.length;j++){
				if(objetos[i].body[j][1]== Math.floor(event.clientX/grade)&&(objetos[i].body[j][0]==Math.floor(event.clientY/grade))){
					objet_atual=objetos[i];
					inicioY=Math.floor(event.clientY/grade)- objetos[i].body[0][0]
					inicioX=Math.floor(event.clientX/grade)- objetos[i].body[0][1]
					//objet_atual=i;
					
				}
			}
			if(objet_atual!=null){

				break;
			}
			
		}
		//console.log(objet_atual)
	}
	canvas.onmousemove= function(event){
		if(objet_atual!=null){
			for(let j=0;j<objet_atual.body.length;j++){
				//objet_atual.body[j][0]+=1;
				//objet_atual.body[j][1]+=1;
				
				if(objet_atual.body[j][0] >Math.floor(event.clientY/grade)){
					for(let x=0;x<objet_atual.body.length;x++){
						
						objet_atual.body[x][0]-=1;
						
					}
					
				}
				if(objet_atual.body[j][0]<Math.floor(event.clientY/grade)){
					for(let x=0;x<objet_atual.body.length;x++){
						objet_atual.body[x][0]+=1;


					}
					
				}
				else if(objet_atual.body[j][1]>Math.floor(event.clientX/grade)){
					for(let x=0;x<objet_atual.body.length;x++){
						objet_atual.body[x][1]-=1;
					}
					
				}
				else if(objet_atual.body[j][1]<Math.floor(event.clientX/grade)){
					for(let x=0;x<objet_atual.body.length;x++){
						objet_atual.body[x][1]+=1;
					}
					
				}
				//objet_atual.body[j][0]=Math.floor(event.clientY/grade)
				//objet_atual.body[j][1]=Math.floor(event.clientX/grade)
				
			}
			let chave=0;
			if(objet_atual){
				for(let i=0;i< objet_atual.body.length;i++){
					if(tabuleiro.tab[objet_atual.body[i][0]][objet_atual.body[i][1]]!=0){
						chave=1;
					}
				}
			if(chave==0){
				//escrever_tab(objet_atual,tabuleiro)
				console.log("pode")
				objet_atual.pode=true
				
				}else{
				objet_atual.pode=false	
				}
			}

			
		}

	}
	canvas.onmouseup=function(event){
		let chave=0;
		if(objet_atual){
			for(let i=0;i< objet_atual.body.length;i++){
			if(tabuleiro.tab[objet_atual.body[i][0]][objet_atual.body[i][1]]!=0){
				chave=1;
			}
			}
			if(chave==0){
				escrever_tab(objet_atual,tabuleiro)
				//console.log("pode")
				
				
			}
			else{
				let index=objetos.indexOf(objet_atual);
				//objet_atual.body=posicao_antiga[index]
				//objet_atual.body[0][0]=2+objet_atual.posiY
				//objet_atual.body[0][0]=5+objet_atual.posiX
				console.log(posicao_antiga)
			}
		}
		
		
		objet_atual=null
	}
	destruir_bloco(tabuleiro);
	

}
function escrever_tab(obj,tabu){
	for(let i=0;i< objet_atual.body.length;i++){
			tabu.tab[obj.body[i][0]][obj.body[i][1]]=obj.cor
			let index=objetos.indexOf(obj);
			//console.log("--",index)
			if(index>-1){
				objetos.splice(index,1);
			}
			
	}
	if(objetos.length==0){
		criar_peca();
	}
}
function destruir_bloco(tabu){
	let destroiy=[];
	let destroix=[]
	let destroiTudo=[]
	let dest=0;
	for(let i=0;i<tabu.altura;i++){
		dest=0;
		destroix=[]
		for(let j=0;j<tabu.largura;j++){
			
			if(tabu.tab[i][j]!=0){
				destroix.push([i,j])
				//destroi.splice(0,0,[i,j]);
				//destroi.splice(0,0,[i,j-1]);
				//destroi.splice(0,0,[i,j-2]);

			}else{
				destroix=[]
				dest=1;
				break;
			}
			
		}
		if(dest==0){
			destroiTudo.push(destroix)
		/*
			for(let j=0;j<tabu.largura;j++){
				tabu.tab[i][j]=0;
			}
			tabu.pontos+=5;
			//document.getElementById("pontos").innerHTML=`<h1>Score: ${tabu.pontos}</h1>`;
			//cair_bloco(tabu,i);
			break;*/

		}
	}
	dest=0;
	destroix=[]
	for(let j=0;j<tabu.altura;j++){
		destroix=[]
		dest=0;
		for(let i=0;i<tabu.largura;i++){
			
			if(tabu.tab[i][j]!=0){
				destroix.push([i,j])
				//destroi.splice(0,0,[i,j]);
				//destroi.splice(0,0,[i,j-1]);
				//destroi.splice(0,0,[i,j-2]);

			}else{
				dest=1;
				break;
			}
			
		}
		if(dest==0){
			destroiTudo.push(destroix)
			/*for(let i=0;i<tabu.tab.length;i++){
				tabu.tab[i][j]=0;
			}
			tabu.pontos+=5;
			//document.getElementById("pontos").innerHTML=`<h1>Score: ${tabu.pontos}</h1>`;
			//cair_bloco(tabu,i);
			break;*/
		}
	}
	
	//console.log(destroi[0][0]);
	if(destroiTudo.length !=0){
		for(let i=0;i<destroiTudo.length;i++){
			for (let j=0;j<destroiTudo[i].length;j++){
				console.log(destroiTudo[i][j][0])
				tabu.tab[destroiTudo[i][j][0]][destroiTudo[i][j][1]]=0
				tabu.pontos+=1
			}
	
		
		}
		
	}
	
}

function desenhar(){
	dimencao.clearRect(0,0,largura,altura);
	tabuleiro.desenhar();

	//player.desenhar();
	//player2.desenhar(player3.cor[1]);
	for(let i=0;i<objetos.length;i++){
		objetos[i].desenhar();
	}
	dimencao.fillStyle='#ffffff';
	dimencao.font='50px arial';
	//console.log(tabuleiro.pontos)
	dimencao.fillText("Score: "+tabuleiro.pontos.toString(), 700, 50);
	
	

}
function run(){
	atualizar();
	desenhar();

	setTimeout(run,10)
}
iniciar();