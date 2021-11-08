var modo =0;



var mat=[
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2],
		[1,1,1,1,1,1,1],
		[1,1,1,0,1,1,1],
		[1,1,1,1,1,1,1],
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2]
		];


cor0="rgba(10,0,100,0.2)"
cor_bola='#C10525'
cor_celec="#FF600D"
cor_jogada="rgba(13,136,255,0.6)"//"#0D88FF"
let html= "<table cellspadding=0 cellspacing=0"

		for (let x = 0; x < 7; x++){
		html += '<tr>'
			for(let y = 0; y< 7; y++){
				
				if(mat[x][y]==2){
					html += `<td id="${x},${y}" >`
					html += `<div id="bola"class="pixel-index" style='background-color:${cor0} ' ></div>`
				
					html += '</td>'
				}
				if(mat[x][y]==1){
					html += `<td id="${x},${y}"  >`
					html += `<div id="bola" class="pixel-index" onclick="colu(${x},${y})" style='background-color: ${cor_bola}' ></div>`
				
					html += '</td>'
				}
				if(mat[x][y]==0){
					html += `<td id="${x},${y}"  >`
					html += `<div id="bola"class="pixel-index" "  ></div>`
				
					html += '</td>'
				}
			}
		html += '</tr>'
	}
	document.getElementById('tabela').innerHTML=html



	function print(){
			let htmls= "<table cellspadding=0 cellspacing=0"

			for (let x = 0; x < 7; x++){
			htmls += '<tr>'
				for(let y = 0; y< 7; y++){
					
					if(mat[x][y]==2){
						htmls += `<td id="${x},${y}" >`
						htmls += `<div id="bola"class="pixel-index" " style='background-color: ${cor0}' ></div>`
					
						htmls += '</td>'
					}
					if(mat[x][y]==1){
						htmls += `<td id="${x},${y}"  >`
						htmls += `<div id="bola"class="pixel-index" onclick="colu(${x},${y})" style='background-color: ${cor_bola}' ></div>`
					
						htmls += '</td>'
					}
					if(mat[x][y]==0){
						htmls += `<td id="${x},${y}"  >`
						htmls += `<div id="bola"class="pixel-index" "  ></div>`
					
						htmls += '</td>'
					}
				}
			htmls += '</tr>'
		}
		document.getElementById('tabela').innerHTML=htmls

	}

	function reset(a){
		if(a==0){
		mat=[
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2],
		[1,1,1,1,1,1,1],
		[1,1,1,0,1,1,1],
		[1,1,1,1,1,1,1],
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2]
		];
		


		}
		if(a==1){
			mat=[
			[2,2,0,0,0,2,2],
			[2,2,0,1,0,2,2],
			[0,0,1,1,1,0,0],
			[0,0,0,1,0,0,0],
			[0,0,0,1,0,0,0],
			[2,2,0,0,0,2,2],
			[2,2,0,0,0,2,2]
			];
		}
		if(a==2){
			mat=[
			[2,2,0,0,0,2,2],
			[2,2,0,1,0,2,2],
			[0,0,1,1,1,0,0],
			[0,1,1,1,1,1,0],
			[1,1,1,1,1,1,1],
			[2,2,0,0,0,2,2],
			[2,2,0,0,0,2,2]
			];
		}
		if(a==3){
			mat=[
			[2,2,0,1,0,2,2],
			[2,2,1,1,1,2,2],
			[0,1,1,1,1,1,0],
			[1,1,1,0,1,1,1],
			[0,1,1,1,1,1,0],
			[2,2,1,1,1,2,2],
			[2,2,0,1,0,2,2]
			];
		}
		if(a==4){
			mat=[
			[2,2,1,1,1,2,2],
			[2,2,1,1,1,2,2],
			[0,0,1,1,1,0,0],
			[0,0,1,0,1,0,0],
			[0,0,0,0,0,0,0],
			[2,2,0,0,0,2,2],
			[2,2,0,0,0,2,2]
			];
			
		}
			console.log("564654")
			print()

	}
	 function retorno(){
	 	window.location.replace("../index.html");

	 }
	function voltar(x,y,z){
		print()
}
	function modos(a){
	if(a==0){
		mat=[
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2],
		[1,1,1,1,1,1,1],
		[1,1,1,0,1,1,1],
		[1,1,1,1,1,1,1],
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2]
		];
		


	}
	if(a==1){
		mat=[
		[2,2,0,0,0,2,2],
		[2,2,0,1,0,2,2],
		[0,0,1,1,1,0,0],
		[0,0,0,1,0,0,0],
		[0,0,0,1,0,0,0],
		[2,2,0,0,0,2,2],
		[2,2,0,0,0,2,2]
		];
	}
	if(a==2){
		mat=[
		[2,2,0,0,0,2,2],
		[2,2,0,1,0,2,2],
		[0,0,1,1,1,0,0],
		[0,1,1,1,1,1,0],
		[1,1,1,1,1,1,1],
		[2,2,0,0,0,2,2],
		[2,2,0,0,0,2,2]
		];
	}
	if(a==3){
		mat=[
		[2,2,0,1,0,2,2],
		[2,2,1,1,1,2,2],
		[0,1,1,1,1,1,0],
		[1,1,1,0,1,1,1],
		[0,1,1,1,1,1,0],
		[2,2,1,1,1,2,2],
		[2,2,0,1,0,2,2]
		];
	}
	if(a==4){
		mat=[
		[2,2,1,1,1,2,2],
		[2,2,1,1,1,2,2],
		[0,0,1,1,1,0,0],
		[0,0,1,0,1,0,0],
		[0,0,0,0,0,0,0],
		[2,2,0,0,0,2,2],
		[2,2,0,0,0,2,2]
		];
		
	}
	console.log("564654")
	print()
	modo=a
	document.getElementById("botoes").innerHTML=`<button id="reset" onclick="reset(${a})"> Resetar </button> <button id="voltar" onclick="retorno()"> voltar </button>`

}

	function celec(x,y,z,w,m,c){
		if(c==1){
			mat[m][y]=0
		}
		if(c==2){
			mat[x][m]=0
		}
		mat[x][y]=0
		mat[z][w]=1	
		console.log(x,y)
		print()
	}
	function colu(x,y){
		print()
		if(x+1 !=7){
			if(mat[x+1][y]==1){
				if(x+1==6){

				}
				else if(mat[x+2][y]==0){
					console.log("ok")
					document.getElementById(`${x+2},${y}`).innerHTML= `<div id="bola"class="pixel-index" onclick="celec(${x},${y},${x+2},${y},${x+1},1)" style='background-color:${cor_jogada}' ></div>`
					document.getElementById(`${x},${y}`).innerHTML=`<div id="bola"class="pixel-index" onclick="voltar(${x},${y},0)" style='background-color:${cor_celec}' ></div>`

				}
			}
		}
		if(x-1 != -1){
			if(mat[x-1][y]==1){
				if(x-1==0){

				}
				else if(mat[x-2][y]==0){
					console.log("ok")
					document.getElementById(`${x-2},${y}`).innerHTML= `<div id="bola"class="pixel-index" onclick="celec(${x},${y},${x-2},${y},${x-1},1)" style='background-color:${cor_jogada}' ></div>`
					document.getElementById(`${x},${y}`).innerHTML=`<div id="bola"class="pixel-index" onclick="voltar(${x},${y},1)" style='background-color:${cor_celec}' ></div>`
				}
			}
				
		}
		if(y-1 != -1){
			if(mat[x][y-1]==1){
				if(y-1==0){

				}
				else if(mat[x][y-2]==0){
					console.log("ok")
					document.getElementById(`${x},${y-2}`).innerHTML= `<div id="bola"class="pixel-index" onclick="celec(${x},${y},${x},${y-2},${y-1},2)" style='background-color:${cor_jogada}' ></div>`
					document.getElementById(`${x},${y}`).innerHTML=`<div id="bola"class="pixel-index" onclick="voltar(${x},${y},0)" style='background-color:${cor_celec}' ></div>`
				}
			}
				
		}
		
		if(y+1 != 7){
			if(mat[x][y+1]==1){
				if(y+1==6){

				}
				else if(mat[x][y+2]==0){
					console.log("ok")
					document.getElementById(`${x},${y+2}`).innerHTML= `<div id="bola"class="pixel-index" onclick="celec(${x},${y},${x},${y+2},${y+1},2)" style='background-color:${cor_jogada}' ></div>`
					document.getElementById(`${x},${y}`).innerHTML=`<div id="bola"class="pixel-index" onclick="voltar(${x},${y},0)" style='background-color:${cor_celec}' ></div>`
				}
			}
				
		}
		
	}



	