function Sprite(x,y,largura,altura){
	this.x=x;
	this.y=y;
	this.altura=altura;
	this.largura=largura;

	this.desenhar=function(x,y){
		dimencao.drawImage(img,this.x,this.y,this.largura,this.altura,x,y,largura,altura)
	}
}
function Sprite_gra(x,y,largura,altura,dimencaox,dimencaoy){
	this.x=x;
	this.y=y;
	this.altura=altura;
	this.largura=largura;

	this.desenhar=function(x,y){
		dimencao.drawImage(img_gra,this.x,this.y,this.largura,this.altura,x,y,largura-dimencaox,altura-dimencaoy)
	}
}
var play_animate=[]
var persom=new Sprite(0,-5,128,128)
	play_animate.push(persom)

	persom=new Sprite(128,-5,126,128)
	play_animate.push(persom)
	persom=new Sprite(256,-5,126,128)
	play_animate.push(persom)
	persom=new Sprite(384,-5,128,128)
	play_animate.push(persom)
	persom=new Sprite(512,-5,128,128)
	play_animate.push(persom)
	persom=new Sprite(640,-5,128,128)
	play_animate.push(persom)
	persom=new Sprite(768,-5,128,128)
	play_animate.push(persom)
	persom=new Sprite(896,-5,128,128)
	play_animate.push(persom)
	persom=new Sprite(1024,-5,128,128)
	play_animate.push(persom)
	persom=new Sprite(1152,-5,128,128)
	play_animate.push(persom)

var gra_animate=[]

var grama=new Sprite_gra(0,0,70,70,40,40)
	gra_animate.push(grama)
	grama=new Sprite_gra(70,0,70,70,40,40)
	gra_animate.push(grama)
	grama=new Sprite_gra(170,0,140,70,40,40)
	gra_animate.push(grama)

var chao=new Sprite_gra(470,0,1210,80,500,40);

var nuvem=[];
	nuvem.push(new Sprite_gra(1000,55,800,300,490,200))
	nuvem.push(new Sprite_gra(1800,55,800,300,490,200))
	nuvem.push(new Sprite_gra(1000,55,800,300,490,200))

	nuvem.push(new Sprite_gra(2900,10,800,400,490,230))	

	nuvem.push(new Sprite_gra(1800,55,800,300,490,200))
	nuvem.push(new Sprite_gra(1000,55,800,300,490,200))
	nuvem.push(new Sprite_gra(1800,55,800,300,490,200))

	
