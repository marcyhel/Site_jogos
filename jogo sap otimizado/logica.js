

vet=[1,1,1,1,1,1,0,2,2,2,2,2,2]

sap1="blue"
sap2="red"
sap3="#ddd"
function printar(){
	var html= "<table cellspadding=0 cellspacing=0 <tr>"

	for(let y = 0; y<vet.length; y++){		
		if(vet[y]==1){
			html += `<td id="a1" onclick="cont(${y})">`
			html += `<div id="s${y}"><h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1></div>`
			html += '</td>'
		}	
		if(vet[y]==2){
			html += `<td id="a2" onclick="cont(${y})">`
			html += `<div id="s${y}"><h1  style='background-color: ${sap2};box-shadow:0px 0px 15px ${sap2};'> 2</h1></div>`
			html += '</td>'
		}
		if(vet[y]==0){
			html += `<td id="a3" onclick="cont(${y})">`
			html += `<div id="s${y}"><h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1></div>`
			html += '</td>'
		}
		
	}
	html+='<tr>'
	document.getElementById('tabela').innerHTML=html
}


function reset(){
	vet=[1,1,1,1,1,1,0,2,2,2,2,2,2]
	
	printar();
}

function cont(a){
	
	if(a==vet.length -1 ){
		if(vet[a]==1){

		}
		if(vet[a]==2){
			if(vet[a-1]==0){
				vet[a]=0
				vet[a-1]=2
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a-1}`).innerHTML=`<h1  style='background-color: ${sap2};box-shadow:0px 0px 15px ${sap2};'> 2</h1>`
				}
			if(vet[a-2]==0){
				vet[a]=0
				vet[a-2]=2
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a-2}`).innerHTML=`<h1  style='background-color: ${sap2};box-shadow:0px 0px 15px ${sap2};'> 2</h1>`
				}
		
			}

	}
	else if(a==0){
		if(vet[a]==1){
			if(vet[a+1]==0){
				vet[a]=0
				vet[a+1]=1
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a+1}`).innerHTML=`<h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1>`
				

				
			}
			else if(vet[a+2]==0){
				vet[a]=0
				vet[a+2]=1
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a+2}`).innerHTML=`<h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1>`
				
				}
		}
		if(vet[a]==2){

		}
		
	}
	else{
		if(vet[a]==1){
			if(vet[a+1]==0){
				vet[a]=0
				vet[a+1]=1
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a+1}`).innerHTML=`<h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1>`
				

				
			}
			else if(vet[a+2]==0){
				vet[a]=0
				vet[a+2]=1
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a+2}`).innerHTML=`<h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1>`
				
				}
		}
		if(vet[a]==2){
			if(vet[a-1]==0){
				vet[a]=0
				vet[a-1]=2
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a-1}`).innerHTML=`<h1  style='background-color: ${sap2};box-shadow:0px 0px 15px ${sap2};'> 2</h1>`
				}
			if(vet[a-2]==0){
				vet[a]=0
				vet[a-2]=2
				document.getElementById(`s${a}`).innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
				document.getElementById(`s${a-2}`).innerHTML=`<h1  style='background-color: ${sap2};box-shadow:0px 0px 15px ${sap2};'> 2</h1>`
				}
		
			}

	}
	
	
}
function c1(){
	if(vet[1]==1){
		if(vet[2]==0){
			vet[1]=0
			vet[2]=1
			document.getElementById('s1').innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
			document.getElementById('s2').innerHTML=`<h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1>`
			

			
		}
		else if(vet[3]==0){
			vet[1]=0
			vet[3]=1
			document.getElementById('s1').innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
			document.getElementById('s3').innerHTML=`<h1  style='background-color: ${sap1};box-shadow:0px 0px 15px ${sap1};'> 1</h1>`
			
		}
	}
	if(vet[1]==2){
		if(vet[0]==0){
			vet[1]=0
			vet[0]=2
			document.getElementById('s1').innerHTML=`<h1  style='background-color: ${sap3};box-shadow:0px 0px 15px ${sap3};'> 0</h1>`
			document.getElementById('s0').innerHTML=`<h1  style='background-color: ${sap2};box-shadow:0px 0px 15px ${sap2};'> 2</h1>`
			

			
		}
		
	}

	
}

printar()
