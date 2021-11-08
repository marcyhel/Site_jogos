var mat=[
		[9,9,9,9,9,9,9,9],
		[9,9,9,9,9,9,9,9],
		[9,9,5,6,7,8,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,1,2,3,4,9,9],
		[9,9,9,9,9,9,9,9],
		[9,9,9,9,9,9,9,9]
		];

time1="rgb(140, 7, 7)"
time2="rgb(2, 62, 115)"
cor0="#ffff"
cor1="#FCD4A2"
cor_bola='#C10525'
cor_celec="#FF600D"
cor_jogada="rgba(13,136,255,0.6)"//"#0D88FF"
vez_jogador=1

var vezz=document.getElementById('vez')
let html= "<table cellspadding=0 cellspacing=0"

		for (let x = 0; x < 10; x++){
			html += '<tr>'
			for(let y = 0; y< 8; y++){
								
				if(y==1||y==6||y==7 || y==0 || x==9 || x==0||x==1||x==8){

				}
				else if((x+y)%2==1){
					html += `<td id="${x},${y}" style='background-color:${cor0}' onclick= "mov(${x},${y})">`
					html += `<div id="espaco"class="pixel-index" >`
					if(mat[x][y]==4){
						html += `<div id="lozango"class="pixel-index"   style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==3){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==2){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==1){
						html += `<div id="triangulo"class="pixel-index" style='background-color:${time1}; border-left: 25px solid ${cor0}; border-right: 25px solid ${cor0};border-bottom: 50px solid ${time1};' ></div>`
					}
					if(mat[x][y]==5){
						html += `<div id="triangulo1"class="pixel-index" style='background-color:${time2}; border-left: 25px solid ${cor0}; border-right: 25px solid ${cor0};border-top: 50px solid ${time2};' ></div>`
					}
					if(mat[x][y]==6){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==7){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==8){
						html += `<div id="lozango"class="pixel-index" style='background-color:${time2}' ></div>`
					}

					html += '</div></td>'
				}
				else{
					html += `<td id="${x},${y}" style='background-color:${cor1}'  >`
					html += `<div id="espaco" class="pixel-index"  onclick ="mov(${x},${y})">`
					if(mat[x][y]==4){
						html += `<div id="lozango"class="pixel-index"  style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==3){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==2){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==1){
						html += `<div id="triangulo"class="pixel-index" style='background-color:${time1}; border-left: 25px solid ${cor1}; border-right: 25px solid ${cor1};border-bottom: 50px solid ${time1};' ></div>`
					}
					if(mat[x][y]==5){
						html += `<div id="triangulo1"class="pixel-index" style='background-color:${time2}; border-left: 25px solid ${cor1}; border-right: 25px solid ${cor1};border-top: 50px solid ${time2};' ></div>`
					}
					if(mat[x][y]==6){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==7){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==8){
						html += `<div id="lozango"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					html += '</div></td>'
				}
			
			}
		html += '</tr>'
	}
	document.getElementById('tabela').innerHTML=html

function print(){
	let html= "<table cellspadding=0 cellspacing=0"

		for (let x = 0; x < 10; x++){
			html += '<tr>'
			for(let y = 0; y< 8; y++){
								
				if(y==1||y==6||y==7 || y==0 || x==9 || x==0||x==1||x==8){

				}
				else if((x+y)%2==1){
					html += `<td id="${x},${y}" style='background-color:${cor0}' >`
					html += `<div id="espaco"class="pixel-index" onclick= "mov(${x},${y})">`
					if(mat[x][y]==4){
						html += `<div id="lozango"class="pixel-index"   style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==3){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==2){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==1){
						html += `<div id="triangulo"class="pixel-index" style='background-color:${time1}; border-left: 25px solid ${cor0}; border-right: 25px solid ${cor0};border-bottom: 50px solid ${time1};' ></div>`
					}
					if(mat[x][y]==5){
						html += `<div id="triangulo1"class="pixel-index" style='background-color:${time2}; border-left: 25px solid ${cor0}; border-right: 25px solid ${cor0};border-top: 50px solid ${time2};' ></div>`
					}
					if(mat[x][y]==6){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==7){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==8){
						html += `<div id="lozango"class="pixel-index" style='background-color:${time2}' ></div>`
					}

					html += '</div></td>'
				}
				else{
					html += `<td id="${x},${y}" style='background-color:${cor1}'  >`
					html += `<div id="espaco" class="pixel-index"  onclick ="mov(${x},${y})">`
					if(mat[x][y]==4){
						html += `<div id="lozango"class="pixel-index"  style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==3){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==2){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time1}' ></div>`
					}
					if(mat[x][y]==1){
						html += `<div id="triangulo"class="pixel-index" style='background-color:${time1}; border-left: 25px solid ${cor1}; border-right: 25px solid ${cor1};border-bottom: 50px solid ${time1};' ></div>`
					}
					if(mat[x][y]==5){
						html += `<div id="triangulo1"class="pixel-index" style='background-color:${time2}; border-left: 25px solid ${cor1}; border-right: 25px solid ${cor1};border-top: 50px solid ${time2};' ></div>`
					}
					if(mat[x][y]==6){
						html += `<div id="quadrado"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==7){
						html += `<div id="circulo"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					if(mat[x][y]==8){
						html += `<div id="lozango"class="pixel-index" style='background-color:${time2}' ></div>`
					}
					html += '</div></td>'
				}
			
			}
		html += '</tr>'
	}
	document.getElementById('tabela').innerHTML=html

}
function mov(x,y){
	print()

	console.log(x,y)
	//Triangulo 
	if(mat[x][y]==1 && vez_jogador==1){
		if(mat[x-1][y+1]==0){
			console.log("entro aqu")
			console.log("ok")
			document.getElementById(`${x-1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y+1},${1})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y-1]==0){
			console.log("ok")
			document.getElementById(`${x-1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y-1},${1})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y]==0){
			document.getElementById(`${x+1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y},${1})" style='background-color:${cor_jogada}';>`
		}
		//saltar aliado
		if(mat[x-1][y+1]==2 || mat[x-1][y+1]==3 || mat[x-1][y+1]==4 ){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y+2},${1})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x-1][y-1]==2 || mat[x-1][y-1]==3 || mat[x-1][y-1]==4){
			if( mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y-2},${1})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x+1][y]==2 || mat[x+1][y]==3 || mat[x+1][y]==4 ){
			if( mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y},${1})" style='background-color:${cor_jogada}';>`
			}
			
		}
		/*comer*/
		if(mat[x-1][y+1]==5 || mat[x-1][y+1]==6 || mat[x-1][y+1]==7|| mat[x-1][y+1]==8){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y+2},${1},${x-1},${y+1},${mat[x-1][y+1]})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x-1][y-1]==5 || mat[x-1][y-1]==6 || mat[x-1][y-1]==7 || mat[x-1][y-1]==8 ){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y-2},${1},${x-1},${y-1},${mat[x-1][y-1]})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x+1][y]==5 || mat[x+1][y]==6 || mat[x+1][y]==7 || mat[x+1][y]==8 ){
			if(mat[x+2][y]==0){
				//{onde a peça sai x},{y},{onde ela chega x},{y},{tipo da peça que esta comendo},{peça que foi comida x},{y},{tipo da peça que foi comida}
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y},${1},${x+1},${y},${mat[x+1][y]})" style='background-color:${cor_jogada}';>`
			}
			
		}
		

	}
	//quadrado
	if(mat[x][y]==2 && vez_jogador==1){
		//andar
		if(mat[x-1][y]==0){
			document.getElementById(`${x-1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y},${2})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y]==0){
			document.getElementById(`${x+1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y},${2})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y+1]==0){
			document.getElementById(`${x},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y+1},${2})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y-1]==0){
			document.getElementById(`${x},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y-1},${2})" style='background-color:${cor_jogada}';>`
		}
		//pular
		if(mat[x-1][y]==1||mat[x-1][y]==3||mat[x-1][y]==4){
			if(mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y},${2})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y]==1||mat[x+1][y]==3||mat[x+1][y]==4){
			if(mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y},${2})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y+1]==1||mat[x][y+1]==3||mat[x][y+1]==4){
			if(mat[x][y+2]==0){
				document.getElementById(`${x},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y+2},${2})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y-1]==1||mat[x][y-1]==3||mat[x][y-1]==4){
			if(mat[x][y-2]==0){
				document.getElementById(`${x},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y-2},${2})" style='background-color:${cor_jogada}';>`
			}
		}

		//comer
		if(mat[x-1][y]==5||mat[x-1][y]==6||mat[x-1][y]==7||mat[x-1][y]==8){
			if(mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y},${2},${x-1},${y},${mat[x-1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y]==5||mat[x+1][y]==6||mat[x+1][y]==7||mat[x+1][y]==8){
			if(mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y},${2},${x+1},${y},${mat[x+1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y+1]==5||mat[x][y+1]==6||mat[x][y+1]==7||mat[x][y+1]==8){
			if(mat[x][y+2]==0){
				document.getElementById(`${x},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y+2},${2},${x},${y+1},${mat[x][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y-1]==5||mat[x][y-1]==6||mat[x][y-1]==7||mat[x][y-1]==8){
			if(mat[x][y-2]==0){
				document.getElementById(`${x},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y-2},${2},${x},${y-1},${mat[x][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		


	}
	//ciculo
	if(mat[x][y]==3 && vez_jogador==1){
		if(mat[x-1][y]==0){
			document.getElementById(`${x-1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y]==0){
			document.getElementById(`${x+1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y+1]==0){
			document.getElementById(`${x},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y+1},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y-1]==0){
			document.getElementById(`${x},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y-1},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y+1]==0){
			document.getElementById(`${x-1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y+1},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y+1]==0){
			document.getElementById(`${x+1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y+1},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y-1]==0){
			document.getElementById(`${x+1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y-1},${3})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y-1]==0){
			document.getElementById(`${x-1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y-1},${3})" style='background-color:${cor_jogada}';>`
		}
		//comer
		if(mat[x-1][y]==5||mat[x-1][y]==6||mat[x-1][y]==7||mat[x-1][y]==8){
			if(mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y},${3},${x-1},${y},${mat[x-1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y]==5||mat[x+1][y]==6||mat[x+1][y]==7||mat[x+1][y]==8){
			if(mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y},${3},${x+1},${y},${mat[x+1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y+1]==5||mat[x][y+1]==6||mat[x][y+1]==7||mat[x][y+1]==8){
			if(mat[x][y+2]==0){
				document.getElementById(`${x},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y+2},${3},${x},${y+1},${mat[x][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y-1]==5||mat[x][y-1]==6||mat[x][y-1]==7||mat[x][y-1]==8){
			if(mat[x][y-2]==0){
				document.getElementById(`${x},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y-2},${3},${x},${y-1},${mat[x][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y-1]==5||mat[x+1][y-1]==6||mat[x+1][y-1]==7||mat[x+1][y-1]==8){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y-2},${3},${x+1},${y-1},${mat[x+1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y-1]==5||mat[x-1][y-1]==6||mat[x-1][y-1]==7||mat[x-1][y-1]==8){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y-2},${3},${x-1},${y-1},${mat[x-1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y+1]==5||mat[x+1][y+1]==6||mat[x+1][y+1]==7||mat[x+1][y+1]==8){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y+2},${3},${x+1},${y+1},${mat[x+1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y+1]==5||mat[x-1][y+1]==6||mat[x-1][y+1]==7||mat[x-1][y+1]==8){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y+2},${3},${x-1},${y+1},${mat[x-1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		

	}
	//lozango
	if(mat[x][y]==4 && vez_jogador==1){
		//andar
		if(mat[x-1][y+1]==0){
			document.getElementById(`${x-1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y+1},${4})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y+1]==0){
			document.getElementById(`${x+1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y+1},${4})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y-1]==0){
			document.getElementById(`${x+1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y-1},${4})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y-1]==0){
			document.getElementById(`${x-1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y-1},${4})" style='background-color:${cor_jogada}';>`
		}
		//pular
		if(mat[x-1][y+1]==1||mat[x-1][y+1]==2||mat[x-1][y+1]==3){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y+2},${4})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y+1]==1||mat[x+1][y+1]==2||mat[x+1][y+1]==3){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y+2},${4})" style='background-color:${cor_jogada}';>`
			}
		}

		if(mat[x+1][y-1]==1||mat[x+1][y-1]==2||mat[x+1][y-1]==3){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y-2},${4})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y-1]==1||mat[x-1][y-1]==2||mat[x-1][y-1]==3){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y-2},${4})" style='background-color:${cor_jogada}';>`
			}
		}
		//comer
		if(mat[x+1][y-1]==5||mat[x+1][y-1]==6||mat[x+1][y-1]==7||mat[x+1][y-1]==8){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y-2},${4},${x+1},${y-1},${mat[x+1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y-1]==5||mat[x-1][y-1]==6||mat[x-1][y-1]==7||mat[x-1][y-1]==8){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y-2},${4},${x-1},${y-1},${mat[x-1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y+1]==5||mat[x+1][y+1]==6||mat[x+1][y+1]==7||mat[x+1][y+1]==8){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y+2},${4},${x+1},${y+1},${mat[x+1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y+1]==5||mat[x-1][y+1]==6||mat[x-1][y+1]==7||mat[x-1][y+1]==8){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y+2},${4},${x-1},${y+1},${mat[x-1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		

		
	}

    //asssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

    if(mat[x][y]==5 && vez_jogador==2){
		if(mat[x+1][y+1]==0){
			console.log("entro aqu")
			console.log("ok")
			document.getElementById(`${x+1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y+1},${5})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y-1]==0){
			console.log("ok")
			document.getElementById(`${x+1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y-1},${5})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y]==0){
			document.getElementById(`${x-1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y},${5})" style='background-color:${cor_jogada}';>`
		}
		//saltar aliado
		if(mat[x+1][y+1]==6 || mat[x+1][y+1]==7 || mat[x+1][y+1]==8 ){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y+2},${5})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x+1][y-1]==6 || mat[x+1][y-1]==7 || mat[x+1][y-1]==8){
			if( mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y-2},${5})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x-1][y]==6 || mat[x-1][y]==7 || mat[x-1][y]==8 ){
			if( mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y},${5})" style='background-color:${cor_jogada}';>`
			}
			
		}
		/*comer*/
		if(mat[x+1][y+1]==1 || mat[x+1][y+1]==2 || mat[x+1][y+1]==3|| mat[x+1][y+1]==4){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y+2},${5},${x+1},${y+1},${mat[x+1][y+1]})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x+1][y-1]==1 || mat[x+1][y-1]==2 || mat[x+1][y-1]==3 || mat[x+1][y-1]==4 ){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y-2},${5},${x+1},${y-1},${mat[x+1][y-1]})" style='background-color:${cor_jogada}';>`
			}
			
		}
		if(mat[x-1][y]==1 || mat[x-1][y]==2 || mat[x-1][y]==3 || mat[x-1][y]==4 ){
			if(mat[x-2][y]==0){
				//{onde a peça sai x},{y},{onde ela chega x},{y},{tipo da peça que esta comendo},{peça que foi comida x},{y},{tipo da peça que foi comida}
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y},${5},${x-1},${y},${mat[x-1][y]})" style='background-color:${cor_jogada}';>`
			}
			
		}
		

	}
	//quadrado
	if(mat[x][y]==6 && vez_jogador==2){
		//andar
		if(mat[x-1][y]==0){
			document.getElementById(`${x-1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y},${6})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y]==0){
			document.getElementById(`${x+1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y},${6})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y+1]==0){
			document.getElementById(`${x},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y+1},${6})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y-1]==0){
			document.getElementById(`${x},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y-1},${6})" style='background-color:${cor_jogada}';>`
		}
		//pular
		if(mat[x-1][y]==5||mat[x-1][y]==7||mat[x-1][y]==8){
			if(mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y},${6})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y]==5||mat[x+1][y]==7||mat[x+1][y]==8){
			if(mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y},${6})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y+1]==5||mat[x][y+1]==7||mat[x][y+1]==8){
			if(mat[x][y+2]==0){
				document.getElementById(`${x},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y+2},${6})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y-1]==5||mat[x][y-1]==7||mat[x][y-1]==8){
			if(mat[x][y-2]==0){
				document.getElementById(`${x},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y-2},${6})" style='background-color:${cor_jogada}';>`
			}
		}

		//comer
		if(mat[x-1][y]==1||mat[x-1][y]==2||mat[x-1][y]==3||mat[x-1][y]==4){
			if(mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y},${6},${x-1},${y},${mat[x-1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y]==1||mat[x+1][y]==2||mat[x+1][y]==3||mat[x+1][y]==4){
			if(mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y},${6},${x+1},${y},${mat[x+1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y+1]==1||mat[x][y+1]==2||mat[x][y+1]==3||mat[x][y+1]==4){
			if(mat[x][y+2]==0){
				document.getElementById(`${x},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y+2},${6},${x},${y+1},${mat[x][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y-1]==1||mat[x][y-1]==2||mat[x][y-1]==3||mat[x][y-1]==4){
			if(mat[x][y-2]==0){
				document.getElementById(`${x},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y-2},${6},${x},${y-1},${mat[x][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		


	}
	//ciculo
	if(mat[x][y]==7 && vez_jogador==2){
		if(mat[x-1][y]==0){
			document.getElementById(`${x-1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y]==0){
			document.getElementById(`${x+1},${y}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y+1]==0){
			document.getElementById(`${x},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y+1},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x][y-1]==0){
			document.getElementById(`${x},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x},${y-1},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y+1]==0){
			document.getElementById(`${x-1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y+1},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y+1]==0){
			document.getElementById(`${x+1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y+1},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y-1]==0){
			document.getElementById(`${x+1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y-1},${7})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y-1]==0){
			document.getElementById(`${x-1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y-1},${7})" style='background-color:${cor_jogada}';>`
		}
		//comer
		if(mat[x-1][y]==1||mat[x-1][y]==2||mat[x-1][y]==3||mat[x-1][y]==4){
			if(mat[x-2][y]==0){
				document.getElementById(`${x-2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y},${7},${x-1},${y},${mat[x-1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y]==1||mat[x+1][y]==2||mat[x+1][y]==3||mat[x+1][y]==4){
			if(mat[x+2][y]==0){
				document.getElementById(`${x+2},${y}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y},${7},${x+1},${y},${mat[x+1][y]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y+1]==1||mat[x][y+1]==2||mat[x][y+1]==3||mat[x][y+1]==4){
			if(mat[x][y+2]==0){
				document.getElementById(`${x},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y+2},${7},${x},${y+1},${mat[x][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x][y-1]==1||mat[x][y-1]==2||mat[x][y-1]==3||mat[x][y-1]==4){
			if(mat[x][y-2]==0){
				document.getElementById(`${x},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x},${y-2},${7},${x},${y-1},${mat[x][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y-1]==1||mat[x+1][y-1]==2||mat[x+1][y-1]==3||mat[x+1][y-1]==4){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y-2},${7},${x+1},${y-1},${mat[x+1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y-1]==1||mat[x-1][y-1]==2||mat[x-1][y-1]==3||mat[x-1][y-1]==4){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y-2},${7},${x-1},${y-1},${mat[x-1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y+1]==1||mat[x+1][y+1]==2||mat[x+1][y+1]==3||mat[x+1][y+1]==4){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y+2},${7},${x+1},${y+1},${mat[x+1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y+1]==1||mat[x-1][y+1]==2||mat[x-1][y+1]==3||mat[x-1][y+1]==4){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y+2},${7},${x-1},${y+1},${mat[x-1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		

	}
	//lozango
	if(mat[x][y]==8 && vez_jogador==2){
		//andar
		if(mat[x-1][y+1]==0){
			document.getElementById(`${x-1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y+1},${8})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y+1]==0){
			document.getElementById(`${x+1},${y+1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y+1},${8})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x+1][y-1]==0){
			document.getElementById(`${x+1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+1},${y-1},${8})" style='background-color:${cor_jogada}';>`
		}
		if(mat[x-1][y-1]==0){
			document.getElementById(`${x-1},${y-1}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-1},${y-1},${8})" style='background-color:${cor_jogada}';>`
		}
		//pular
		if(mat[x-1][y+1]==5||mat[x-1][y+1]==6||mat[x-1][y+1]==7){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y+2},${8})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y+1]==5||mat[x+1][y+1]==6||mat[x+1][y+1]==7){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y+2},${8})" style='background-color:${cor_jogada}';>`
			}
		}

		if(mat[x+1][y-1]==5||mat[x+1][y-1]==6||mat[x+1][y-1]==7){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x+2},${y-2},${8})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y-1]==5||mat[x-1][y-1]==6||mat[x-1][y-1]==7){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="trocar(${x},${y},${x-2},${y-2},${8})" style='background-color:${cor_jogada}';>`
			}
		}
		//comer
		if(mat[x+1][y-1]==1||mat[x+1][y-1]==2||mat[x+1][y-1]==3||mat[x+1][y-1]==4){
			if(mat[x+2][y-2]==0){
				document.getElementById(`${x+2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y-2},${8},${x+1},${y-1},${mat[x+1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y-1]==1||mat[x-1][y-1]==2||mat[x-1][y-1]==3||mat[x-1][y-1]==4){
			if(mat[x-2][y-2]==0){
				document.getElementById(`${x-2},${y-2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y-2},${8},${x-1},${y-1},${mat[x-1][y-1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x+1][y+1]==1||mat[x+1][y+1]==2||mat[x+1][y+1]==3||mat[x+1][y+1]==4){
			if(mat[x+2][y+2]==0){
				document.getElementById(`${x+2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x+2},${y+2},${8},${x+1},${y+1},${mat[x+1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		if(mat[x-1][y+1]==1||mat[x-1][y+1]==2||mat[x-1][y+1]==3||mat[x-1][y+1]==4){
			if(mat[x-2][y+2]==0){
				document.getElementById(`${x-2},${y+2}`).innerHTML=`<div id="espaco" onclick ="comer(${x},${y},${x-2},${y+2},${8},${x-1},${y+1},${mat[x-1][y+1]})" style='background-color:${cor_jogada}';>`
			}
		}
		

		
	}
}

function trocar(x,y,w,k,tipo){
	mat[x][y]=0
	mat[w][k]=tipo
	if(tipo==1|| tipo==2||tipo==3||tipo==4){
		vez_jogador=2
		vezz.innerHTML="<h1 id='hh'>Vez do Jogador Azul</h1>"
		document.getElementById("hh").style.color="rgb(30, 100, 195)"
	}
	if(tipo==5|| tipo==6||tipo==7||tipo==8){
		vez_jogador=1
		vezz.innerHTML="<h1 id='hh'>Vez do Jogador Vermelho</h1>"
		document.getElementById("hh").style.color="rgb(190, 50, 50)"
	}
	console.log("print")
	sumir_pecas(w,k)
	print()

}
function comer(x,y,w,k,tipo,comX,comY,comTipo){
	mat[x][y]=0
	mat[comX][comY]=0

	mat[w][k]=tipo

	if(tipo==1|| tipo==2||tipo==3||tipo==4){
		vez_jogador=2
		vezz.innerHTML="<h1 id='hh'>Vez do Jogador Azul</h1>"
		document.getElementById("hh").style.color="rgb(30, 100, 195)"
	}
	if(tipo==5|| tipo==6||tipo==7||tipo==8){
		vez_jogador=1
		vezz.innerHTML="<h1 id='hh'>Vez do Jogador Vermelho</h1>"
		document.getElementById("hh").style.color="rgb(190, 50, 50)"
	}

	//aaaaaaaaaaaaaaaaaaaa
	if(comTipo==1||comTipo==2||comTipo==3||comTipo==4){
		if(mat[7][2]==0){
			mat[7][2]=comTipo
		}
		else if(mat[7][3]==0){
			mat[7][3]=comTipo
		}
		else if(mat[7][4]==0){
			mat[7][4]=comTipo
		}
		else if(mat[7][5]==0){
			mat[7][5]=comTipo
		}

	}
	else if(comTipo==5||comTipo==6||comTipo==7||comTipo==8){
		if(mat[2][2]==0){
			mat[2][2]=comTipo
		}
		else if(mat[2][3]==0){
			mat[2][3]=comTipo
		}
		else if(mat[2][4]==0){
			mat[2][4]=comTipo
		}
		else if(mat[2][5]==0){
			mat[2][5]=comTipo
		}

	}
	/*
	if(comTipo==1){
		mat[7][2]=1
	}
	else if(comTipo==2){
		mat[7][3]=2
	}
	else if(comTipo==3){
		mat[7][4]=3
	}
	else if(comTipo==4){
		mat[7][5]=4
	}
	else if(comTipo==5){
		mat[2][2]=5
	}
	else if(comTipo==6){
		mat[2][3]=6
	}
	else if(comTipo==7){
		mat[2][4]=7
	}
	else if(comTipo==8){
		mat[2][5]=8
	}*/
	sumir_pecas(w,k)
	console.log(comTipo)
	console.log("print")
	print()

}
function sumir_pecas(x,y){
	if(mat[2][2]==1 ||mat[2][3]==1||mat[2][4]==1||mat[2][5]==1){
		mat[x][y]=0
	}
	else if(mat[2][2]==2 ||mat[2][3]==2||mat[2][4]==2||mat[2][5]==2){
		mat[x][y]=0
	}
	else if(mat[2][2]==3 ||mat[2][3]==3||mat[2][4]==3||mat[2][5]==3){
		mat[x][y]=0
	}
	else if(mat[2][2]==4 ||mat[2][3]==4||mat[2][4]==4||mat[2][5]==4){
		mat[x][y]=0
	}
	else if(mat[7][2]==5 ||mat[7][3]==5||mat[7][4]==5||mat[7][5]==5){
		mat[x][y]=0
	}
	else if(mat[7][2]==6 ||mat[7][3]==6||mat[7][4]==6||mat[7][5]==6){
		mat[x][y]=0
	}
	else if(mat[7][2]==7 ||mat[7][3]==7||mat[7][4]==7||mat[7][5]==7){
		mat[x][y]=0
	}
	else if(mat[7][2]==8 ||mat[7][3]==8||mat[7][4]==8||mat[7][5]==8){
		mat[x][y]=0
	}

}
function reset(){
	mat=[
		[9,9,9,9,9,9,9,9],
		[9,9,9,9,9,9,9,9],
		[9,9,5,6,7,8,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,0,0,0,0,9,9],
		[9,9,1,2,3,4,9,9],
		[9,9,9,9,9,9,9,9],
		[9,9,9,9,9,9,9,9]
		];
	print()
}
function retorno(){
	 	window.location.replace("../index.html");
}