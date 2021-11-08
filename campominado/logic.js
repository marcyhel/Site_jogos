var tabul

function Tabuleiro(linha,coluna){
	this.tabuleiro=[]
	this.linha=linha
	this.coluna=coluna

	this.gerarTabu=function(){
		var linhas=[]
		for(let x=0;x<this.linha;x++){
			linhas=[]
			for(let y=0;y<this.coluna;y++){
				linhas.push(new Campo(x,y))
			}
			
			this.tabuleiro.push(linhas)
		}

		
	}

	this.entro=function(x,y){
		console.log("entro")
		console.log(x)
		console.log(y)
		this.tabuleiro[x][y].emcima=true
	}
	this.saiu=function(x,y){
		this.tabuleiro[x][y].emcima=false
		console.log("saiu")
		console.log(x)
		console.log(y)
	}
	this.getMarcar=function(xx,yy){
		this.tabuleiro[xx][yy].marcar()


	}
	this.reset=function(){
		this.tabuleiro=[]
		this.gerarTabu()
		this.desenhar()
	}
	this.gerarVisinhos=function(){
		for(var x=0;x<this.linha;x++){
			for(var y=0;y<this.coluna;y++){
				for(var xx=0;xx<this.linha;xx++){
					for(var yy=0;yy<this.coluna;yy++){
						this.tabuleiro[x][y].identificar_visinhos(this.tabuleiro[xx][yy])
					}
					
				}

			}
			
		}
		console.log("terminou")
	}
	

	this.sortearMinas=function(qtd){
		console.log(this.tabuleiro)
		var linhasor
		var colunasort
		var cont=0
		while(cont < qtd){
			linhasor=Math.floor(Math.random() * this.linha)
			colunasort=Math.floor(Math.random() * this.coluna)
			if(this.tabuleiro[linhasor][colunasort].minado==0){
				this.tabuleiro[linhasor][colunasort].minado=true
				//this.tabuleiro[linhasor][colunasort].marcado=true
				cont+=1;
			}	


		}
			
	}
	
	this.abrindo=function(x,y){
		this.tabuleiro[x][y].abrir()
		this.desenhar()
	}
	

	
	this.desenhar=function(){
		let html="";
		let tab=document.getElementById("tabuleiro")
		
		for(let x=0;x<this.linha;x++){
			html+=`<div class="columns is-centered">`
			for(let y=0;y<this.coluna;y++){

				if(this.tabuleiro[x][y].marcado && !this.tabuleiro[x][y].aberto ){
					//html+=`<div id="${x},${y}" class=""><div class="box"><div id="marcado" onclick="tabul.getMarcar(${x},${y}) "><h1></h1></div></div></div>`
					//html+=`<div id="${x},${y}" class=""><div class="box"><div id="marcado" ondblclick="tabul.getMarcar(${x},${y})><h1></h1></div></div></div>`
					html+=`<div id="${x},${y}" class=""><div class="box"><div id="marcado"  onmouseout="tabul.saiu(${x},${y})" onmouseenter="tabul.entro(${x},${y})" onclick="tabul.abrindo(${x},${y})"><h1></h1></div></div></div>`
				}
				else if(!this.tabuleiro[x][y].aberto && !this.tabuleiro[x][y].explodido){
					//html+=`<div id="${x},${y}" class=""><div class="box"><div id="fechado" onmouseover="tabul.getMarcar(${x},${y})" onclick="tabul.abrindo_bomba(${x},${y})"><h1></h1></div></div></div>`
					//html+=`<div id="${x},${y}" class=""><div class="box"><div id="fechado"  onclick="tabul.makeDoubleClick(function(){tabul.tabuleiro[${x}][${y}].abrir()},function(){tabul.getMarcar(${x},${y})})"><h1></h1></div></div></div>`
					html+=`<div id="${x},${y}" class=""><div class="box"><div id="fechado" onmouseout="tabul.saiu(${x},${y})" onmouseenter="tabul.entro(${x},${y})" onclick="tabul.abrindo(${x},${y});" onmousedown="tabul.getMarcar(${x},${y});" ><h1></h1></div></div></div>`
				}//ondblclick="tabul.getMarcar(${x},${y})"
				else if(this.tabuleiro[x][y].explodido){
					html+=`<div id="${x},${y}" class=""><div class="box"><div id="explodido"  "><h1></h1></div></div></div>`
				}
				if(this.tabuleiro[x][y].mini_explode){
					html+=`<div id="${x},${y}" class=""><div class="box"><div id="minexplodido"  "><h1></h1></div></div></div>`
				}

				
				if(this.tabuleiro[x][y].aberto && !this.tabuleiro[x][y].explodido){
					if(this.tabuleiro[x][y].qtd_minados()>0){
						if(this.tabuleiro[x][y].qtd_minados()==1){
							html+=`<div id="${x},${y}" class=""><div class="box"><div id="aberto"><h1 id="um">${this.tabuleiro[x][y].qtd_minados()}</h1></div></div></div>`
						}
						else if(this.tabuleiro[x][y].qtd_minados()==2){
							html+=`<div id="${x},${y}" class=""><div class="box"><div id="aberto"><h1 id="dois">${this.tabuleiro[x][y].qtd_minados()}</h1></div></div></div>`
						}
						else if(this.tabuleiro[x][y].qtd_minados()==3){
							html+=`<div id="${x},${y}" class=""><div class="box"><div id="aberto"><h1 id="tres">${this.tabuleiro[x][y].qtd_minados()}</h1></div></div></div>`
						}
						else if(this.tabuleiro[x][y].qtd_minados()==4){
							html+=`<div id="${x},${y}" class=""><div class="box"><div id="aberto"><h1 id="quatro">${this.tabuleiro[x][y].qtd_minados()}</h1></div></div></div>`
						}
						else if(this.tabuleiro[x][y].qtd_minados()>=5){
							html+=`<div id="${x},${y}" class=""><div class="box"><div id="aberto"><h1 id="cinco">${this.tabuleiro[x][y].qtd_minados()}</h1></div></div></div>`
						}

					}else{
						html+=`<div id="${x},${y}" class=""><div class="box"><div id="aberto"><h1></h1></div></div></div>`
					}
					
				}
				
				
			}
			html+=`</div>`
		}
		tab.innerHTML=html
	}

		

}

function Campo(linha,coluna){
	
	this.explodido=false
	this.mini_explode=false
	this.minado=false
	this.marcado=false
	this.aberto=false
	this.linha=linha
	this.coluna=coluna
	this.qtdBombas=0
	this.visinhos=[]
	this.emcima=false



	this.identificar_visinhos=function(visinho){
		
		var deltalinha= Math.abs(this.linha-visinho.linha)
		var deltacoluna= Math.abs(this.coluna-visinho.coluna)
		if(deltalinha==0 && deltacoluna==0){
			//console.log(deltalinha)

			return
		}
		if(deltalinha<=1 && deltacoluna <=1){

			this.visinhos.push(visinho)
			//console.log("aquii")
		}
	}
	 this.marcar=function(){
		this.marcado=!this.marcado
		tabul.desenhar()
	}
	
	this.abrir=function(){
		
		if(this.aberto){

			return
		}
		this.aberto=true
		if(this.minado){
			this.explodido=true
			
			console.log("cabuuumm")
			return
			
		}
		if(this.visinho_seguro()){
			this.visinhos.forEach((v)=>v.abrir())
		}

	}
	this.visinho_seguro=function(){
		return this.visinhos.every((v)=>!v.minado)
	}
	this.qtd_minados=function(){
		return this.visinhos.filter((v)=> v.minado).length
	}
	this.resolvido=function(){
		var seguroEaberto=(!this.minado&&this.aberto)
		return seguroEaberto
	}
	this.resetar=function(){
		this.explodido=false
		this.mini_explode=false
		this.minado=false
		this.marcado=false
		this.aberto=false
		this.linha=linha
		this.coluna=coluna
		this.qtdBombas=0
		this.visinhos=[]
	}


}
function run(){
	tabul.desenhar()
	setTimeout(run,1000)
}

function resetar(){
	var qtd_bomb= document.getElementById("qtd_bomb").value
	var qtd_linha= document.getElementById("qtd_linha").value
	var qtd_colun= document.getElementById("qtd_colun").value
	if(qtd_bomb!=0 && qtd_colun !=0 && qtd_linha!=0 && (qtd_colun*qtd_linha)>=qtd_bomb){
		tabul=new Tabuleiro(qtd_linha,qtd_colun)
		tabul.gerarTabu()
		tabul.gerarVisinhos()
		tabul.sortearMinas(qtd_bomb)
		tabul.desenhar()
	}
	else{
		tabul=new Tabuleiro(20,20)
		tabul.gerarTabu()
		tabul.gerarVisinhos()
		tabul.sortearMinas(80)
		tabul.desenhar()
	}
	
}

tabul=new Tabuleiro(20,20)
tabul.gerarTabu()
tabul.gerarVisinhos()
tabul.sortearMinas(80)

tabul.desenhar()
//run()