$(document).ready(function() {
$('#table-edit').dataTable( {
  "ajax": {
    "url": "example.php",
    "type": "POST"
  },
  "data": [
      
        ]
   } );
} );


function del(r){            //smazání řádku
  var question=confirm("Přejete si opravdu smazat?");
  if(question){
		var delete_row = r.parentNode.parentNode.rowIndex;
   		document.getElementById("table-edit").deleteRow(delete_row);
    }
}
function create_open(){ 
    document.getElementById('create-row').style.height ='100px';
}

function cancel(){
		document.getElementById('create-row').style.height ='0px';
}	

function create(){ 
            //Vytvoření nového řádku
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
   document.getElementById("ProductNo").value="";
		var cell = radek.insertCell(0);
		var get = document.getElementById("category").value;
		cell.innerHTML = get;
       document.getElementById("category").value="";
		var cell = radek.insertCell(0);
		var get = document.getElementById("kosik").value;
		cell.innerHTML = get;
       document.getElementById("kosik").value="";
		var cell = radek.insertCell(0);
		var get = document.getElementById("name").value;
		cell.innerHTML = "<a href=index.html>"+get+"</a>";
    cell.setAttribute("href", "a.html")
       document.getElementById("name").value="";
 

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
   			x[1].innerHTML = "<a href=index.html>"+a+"</a>";
      
     
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



google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(day);

//Počet prodaných za  hodinu
function day() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'počet');


      data.addRows([
        [0, 0],   [1, 10],  [2, 12],  [3, 14],  [4, 17],  [5, 19],
        [6, 22],  [7, 23],  [8, 28],  [9, 31],  [10, 32], [11, 35],
        [12, 37],[13,40], [14, 43],   [15, 70],  [16, 80],  [17, 83], 
         [18, 85],  [19, 90],
        [20, 11],  [21, 27],  [22, 33],  [23, 40],  [24, 32]
      ]);

      var options = {
        hAxis: {

          title: 'Hodiny',
           ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        },
        vAxis: {
          title: 'Prodané zboží'
        },
        backgroundColor: 'RGB(242,252,255)',

      };

      var chart = new google.visualization.LineChart(document.getElementById('chart'));
      chart.draw(data, options);
    }
