function del(r){            //smazání řádku
		var delete_row = r.parentNode.parentNode.rowIndex;
   		document.getElementById("table-edit").deleteRow(delete_row);
}
function create_open(){ 
		document.getElementById('create-row').style.display ='block';
}

function cancel(){
		document.getElementById('create-row').style.display ='none';
}	

function create(){            //Vytvoření nového řádku
		var edit_table = document.getElementById("table-edit");
		var radek = edit_table.insertRow(1);
		var cell = radek.insertCell(0);
   		var submit = document.createElement("input");
  	 	submit.type="submit";
  		submit.className="button"
     	submit.setAttribute('value', "Upravit");
    	submit.setAttribute('onclick', "javascript:edit(this);");
   		var t = document.createTextNode("");
 		submit.appendChild(t);
   		cell.appendChild(submit);
		var submit = document.createElement("input");
    	submit.type="submit";
   		submit.className="button white";
    	submit.setAttribute('value', "Smazat");
    	submit.setAttribute('onclick', "javascript:del(this);");
   		 var t = document.createTextNode("");
		submit.appendChild(t);
   		cell.appendChild(submit);
		var cell = radek.insertCell(0);
		var get = document.getElementById("ProductNo").value;
		cell.innerHTML = get;
		var cell = radek.insertCell(0);
		var get = document.getElementById("category").value;
		cell.innerHTML = get;
		var cell = radek.insertCell(0);
		var get = document.getElementById("kosik").value;
		cell.innerHTML = get;
		var cell = radek.insertCell(0);
		var get = document.getElementById("name").value;
		cell.innerHTML = get;
		var cell = radek.insertCell(0);
		var get = document.getElementById("id").value;
		cell.innerHTML = get;
		document.getElementById('create-row').style.display ='none';
}


function edit(r){   //vytvoření řádku na úpravu

	var i = r.parentNode.parentNode.rowIndex;
	var edit_table = document.getElementById("table-edit");
	var radek = edit_table.insertRow(i+1);

	var cell = radek.insertCell(0);
    var submit = document.createElement("input");
    submit.type="submit";
    submit.className="button"
     submit.setAttribute('onclick', "javascript:edit_row(this);");
    var t = document.createTextNode("");
	 submit.appendChild(t);
    cell.appendChild(submit);

	var cell = radek.insertCell(0);
	var submit = document.createElement("input");
    submit.type="text";
    submit.id="form-login-register";
 	var t = document.createTextNode("");
	 submit.appendChild(t);
    cell.appendChild(submit);
	submit.setAttribute("id", "Fourth_cell");

	var cell = radek.insertCell(0);
	 var submit = document.createElement("input");
    submit.type="text";
    submit.id="form-login-register";
   	var t = document.createTextNode("");
	submit.appendChild(t);
    cell.appendChild(submit);
	submit.setAttribute("id", "Third_cell");

	var cell = radek.insertCell(0);
	var submit = document.createElement("input");
    submit.type="text";
    submit.id="form-login-register";
	  var t = document.createTextNode("");
	 submit.appendChild(t);
    cell.appendChild(submit);
	submit.setAttribute("id", "Second_cell");

	var cell = radek.insertCell(0);
    var submit = document.createElement("input");
    submit.type="text";
    submit.id="form-login-register";
  	var t = document.createTextNode("");
	submit.appendChild(t);
    cell.appendChild(submit);
	submit.setAttribute("id", "First_cell");

	var cell = radek.insertCell(0);
}


function edit_row(r){            //Úprava konkrétního řádku
	var a = document.getElementById("First_cell").value;

	var b = document.getElementById("Second_cell").value;
	var c = document.getElementById("Third_cell").value;
	var d = document.getElementById("Fourth_cell").value;
	var i = r.parentNode.parentNode.rowIndex;
   	var x = document.getElementById("table-edit").rows[i-1].cells;
 		if(a!=0){
   			x[1].innerHTML = a;
		}
 		if(b!=0){
   			x[2].innerHTML = b;
		}
 		if(c!=0){
  			x[3].innerHTML = c;
 		 }
  		 if(d!=0){
   			x[4].innerHTML = d;
   		}
    var delete_row = r.parentNode.parentNode.rowIndex;
    document.getElementById("table-edit").deleteRow(delete_row);
}
