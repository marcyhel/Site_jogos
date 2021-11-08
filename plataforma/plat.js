var canvas,dimencao,altura,largura,grade,player,bloc,bloco=[],obstacle,velocidade=7,estadoAtua=0,grama,chaos,nuvens;
var chave=0,img,img_gra;
var almentar_vel=20;
var animated=0;
var botao={
	esquerda:37,
	cima:38,
	direita:39,
	baixo:40,
	espaco:32
}
var estados={
	jogar:0,
	jogando:1,
	perdeu:2,
}

window.addEventListener("resize",adaptar_tamanho_tela);
window.addEventListener("keydown",keyDown);
window.addEventListener("keyup",keyUp);

function iniciar(){
	canvas = document.createElement("canvas");
	adaptar_tamanho_tela()
	document.body.appendChild(canvas);
	dimencao= canvas.getContext("2d");
	dimencao.imageSmoothingEnabled=false;
	
	img=new Image();
	img.src="zumbi.png"
	img_gra=new Image();
	img_gra.src="grans.png"
	cria_obj();
	loop();
}
function adaptar_tamanho_tela(){
	largura=window.innerWidth;
	altura=window.innerHeight;
	canvas.width= largura;
	canvas.height=altura;

	grade=window.innerHeight-window.innerHeight/8;
}
function cria_obj(){
	player=new Player(200,30,100,80);
	bloc=new Bloc();
	//bloc=new obstaculo(400,450,100,60);
	//bloc=new Bloc(0,window.innerHeight-100,window.innerHeight,window.innerWidth);

	bloco.push(bloc);
	obstacle=new Obstaculo;
	grama=new Grama;
	grama.insert();
	chaos=new Chao;
	chaos.insert()
	nuvens=new Nuvem;

}

function keyDown(e){
	
	switch(e.keyCode){
		case botao.esquerda:
			
			break;
		case botao.cima:
			if(estadoAtua==estados.jogando){
				player.pula();
				}
			else if(estadoAtua==estados.jogar){
				estadoAtua=estados.jogando;
				}
			else if(estadoAtua==estados.perdeu && player.y>=2*altura){
				estadoAtua=estados.jogar;
				player.reset()
				}
			break;
		case botao.direita:
			
			break;
		case botao.baixo:
			//player.abaixar();
			break;
		case botao.espaco:
		
			
			break;
	}
}
function keyUp(e){
	
	switch(e.keyCode){
		case botao.esquerda:
			
			break;
		case botao.cima:
			
			break;
		case botao.direita:
			
			break;
		case botao.baixo:
			//player.levantar();
			break;
		case botao.espaco:
		
			
			break;
	}
}
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function Nuvem(){
	this.obss=[];
	this.tempo_insert=100;
	this.insert=function(){
		
		this.obss.push({
			x:window.innerWidth,
			//x:50,
			y:randomInt(0,400),
			//y:400,
			
			anima:nuvem[randomInt(0,nuvem.length)],
		})
		
			this.tempo_insert=200+randomInt(0,1000);
		

		
	} 
	this.atualiza=function(){
		if(this.tempo_insert<=0){
			this.insert();
		}else{
			this.tempo_insert--
		}
		for(let i=0;i<this.obss.length;i++){
			this.obss[i].x-=1
			
			
		}
	}
	this.desenhar=function(){
		
		for(let i=0;i<this.obss.length;i++){
			this.obss[i].anima.desenhar(this.obss[i].x,this.obss[i].y)
		}
		
	}
}
function Chao(){
	this.obs=[];
	this.tempo_insert=100;
	this.insert=function(){
		
		this.obs.push({
			x:window.innerWidth,
			//x:50,
			y:0,
			
			anima:chao
		})
		if(velocidade>30){
			this.tempo_insert=(Math.sqrt(velocidade)/3);
		}
		else if(velocidade>11) {
			this.tempo_insert=(Math.sqrt(velocidade)*2);
		}
		else{
			this.tempo_insert=(Math.sqrt(velocidade)*7);
		}

		
	} 
	this.atualiza=function(){
		if(this.tempo_insert<=0){
			this.insert();
		}else{
			this.tempo_insert--
		}
		for(let i=0;i<this.obs.length;i++){
			this.obs[i].x-=velocidade
			this.obs[i].y=grade
			
		}
	}
	this.desenhar=function(){
		
		
		for(let i=0;i<this.obs.length;i++){
			this.obs[i].anima.desenhar(this.obs[i].x,grade-8)
		}
		
	}
}
function Grama(){
	this.obs=[];
	this.tempo_insert=100;
	this.insert=function(){
		
		this.obs.push({
			x:window.innerWidth,
			y:0,
			
			anima:gra_animate[randomInt(0,gra_animate.length)]
		})
		
		this.tempo_insert=1+(randomInt(0,10*Math.sqrt(velocidade)));
	} 
	this.atualiza=function(){
		if(this.tempo_insert==0){
			this.insert();
		}else{
			this.tempo_insert--
		}
		for(let i=0;i<this.obs.length;i++){
			this.obs[i].x-=velocidade
			this.obs[i].y=grade
			
		}
	}
	this.desenhar=function(){
		
		
		for(let i=0;i<this.obs.length;i++){
			this.obs[i].anima.desenhar(this.obs[i].x,grade-25)
		}
		
	}
}
function Obstaculo(){
	this.obs=[];
	this.tempo_insert=100;
	this.insert=function(){
		this.obs.push({
			x:window.innerWidth,
			y:grade,
			altura:randomInt(50,100),
			largura:50,
			cor:"#dacf"
		})
		
		this.tempo_insert=50+randomInt(0,50);
	} 
	this.atualiza=function(){
		if(this.tempo_insert==0){
			this.insert();
		}else{
			this.tempo_insert--
		}
		for(let i=0;tam=this.obs.length,i<tam;i++){
			this.obs[i].x-=velocidade
			this.obs[i].y=grade
			if(player.x<this.obs[i].x +this.obs[i].largura && player.x+player.largura-50>=this.obs[i].x &&player.y+player.altura>=this.obs[i].y){
				estadoAtua=estados.perdeu
				this.obs=[];
				
			}
			
			else if(this.obs[i].x <= -this.obs[i].largura){
				this.obs.splice(i,1);
				tam--;
				i--
			}
		}
	}
	this.desenhar=function(){
		dimencao.fillStyle="#dacf";
		for(let i=0;i<this.obs.length;i++){
			dimencao.fillRect(this.obs[i].x,bloco[0].y- this.obs[i].altura,this.obs[i].largura,this.obs[i].altura);
		}

		
	}
}
function Player(x,y,altura,largura){
	this.x=x;
	this.y=y;
	this.altura=persom.altura;
	this.largura=persom.largura;
	this.velocidade=0;
	this.gravidade=2;
	this.forca_pulo=32;
	this.qtd_max=1;
	this.qtd_pulo=0;
	this.score=0;
	this.scor_int=0;
	this.lop=4
	this.vel_ani=this.lop;

	
	this.reset=function(){
		this.velocidade=0;
		this.y=0;
		this.score=0;
		this.scor_int=0
	}
	this.levantar=function(){
		this.altura=this.altura*0.3;
	}
	this.abaixar=function(){
		this.altura=altura/3;
		this.velocidade =this.forca_pulo/1.5
	}
	this.pula=function(){
		if(this.qtd_pulo<this.qtd_max){
			this.velocidade =-this.forca_pulo
			this.qtd_pulo++;
		}
		
	}
	this.colid=function(obj){
		if(this.y+this.altura>obj.y && estadoAtua != estados.perdeu ){
			this.y= obj.y-this.altura;
			this.qtd_pulo=0
			this.velocidade=0
		}
	}
	this.atualiza=function(){
		this.velocidade+=this.gravidade;
		this.y+=this.velocidade;
	}
	this.desenha_scor=function(){
		dimencao.fillStyle="#000";
		dimencao.font="50px Stencil"
		this.scor_int=Math.floor(this.score);

		dimencao.fillText(this.scor_int,50,100);
	}
	this.desenhar=function(){
		//dimencao.fillStyle="#000";
		//dimencao.fillRect(this.x, this.y,this.largura,this.altura);
		if(this.vel_ani<=0){
			this.vel_ani=this.lop
			if(play_animate.length-1 == animated){
				animated=0;
			
			}else{
				animated+=1;
			}
		}else{
			this.vel_ani--;
		}
		
		(play_animate[animated]).desenhar(this.x,this.y);
		
		
		
	}
}
function Bloc(){
	this.x=0;
	this.y=grade;
	this.altura=200;
	this.largura=largura;

	this.atualiza=function(){
		this.x=0;
		this.y=grade;
		this.altura=200;
		this.largura=largura;
	}
	this.desenhar=function(){
		dimencao.fillStyle="#cafe";
		dimencao.fillRect(this.x, this.y,this.largura,this.altura);
	}
}

function desenhar(){
	dimencao.clearRect(0,0,largura,altura);
	nuvens.desenhar();
	player.desenha_scor();
	//persom.desenhar(120,400);
	//play_animate[2].desenhar(50,50)
	
	
	//nuvem[2].desenhar(800,150)
	
	
	
	for(let j=0;j<bloco.length;j++){
		bloco[j].desenhar();
	}
	if(estadoAtua==estados.jogar){
		velocidade=7
		dimencao.fillStyle="green";
		dimencao.fillRect(window.innerWidth/2 -50,window.innerHeight/2 - 50,100,100)
	}
	else if(estadoAtua==estados.perdeu){
		dimencao.fillStyle="red";
		dimencao.fillRect(window.innerWidth/2 -50,window.innerHeight/2 - 50,100,100)

	}
	else if(estadoAtua==estados.jogando){
		obstacle.desenhar();
	}
	player.desenhar();
	grama.desenhar();
	chaos.desenhar()
	
}
function atualiza(){
	nuvens.atualiza()
	chaos.atualiza();
	grama.atualiza();
	player.atualiza();
	if(estadoAtua==estados.jogando){
		obstacle.atualiza();
		player.score+=velocidade/200;
		if(player.score >almentar_vel && chave==0){
			velocidade+=2
			chave=1;
			almentar_vel+=20;
			
		}else{
			chave=0
		}
	}
	
	for(let j=0;j<bloco.length;j++){
		bloco[j].atualiza()
		player.colid(bloco[j])
		}
}
function loop(){
	desenhar();
	atualiza();
	window.requestAnimationFrame(loop);

}
iniciar()