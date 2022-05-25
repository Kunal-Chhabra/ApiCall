function e(){
   document.getElementById("getbyid").style.display="block";
}
function e2(){
    document.getElementById("insertrec").style.display="block";
}
function e3(){
    document.getElementById("searchbtn").style.display="block";
}
// For all record

function allrec() {

    fetch("http://localhost:60929/api/test")
    .then(res=>res.text())
    .then(result=>showData(result))
   function showData(data)
   {
       document.getElementById('show').innerHTML=data;
   }
  }

  //For single record

document.getElementById('Button1').addEventListener('click',get);
 function get(){
     var id=document.getElementById("Input").value;
     var url='http://localhost:60929/api/test/'+id;
    fetch(url)
    .then(response => response.text())
    .then(result => showRecord(result))
    .catch(error => console.log('Error!', error));}
function showRecord(data) {
document.getElementById('show').innerHTML = data;

}

//post


function sendJSON(){

           

   

    let empid = document.getElementById("empid");
    let f = document.getElementById("f");
    let l = document.getElementById("l");
    let d= document.getElementById("d");
    let s=document.getElementById("s");
    let c=document.getElementById("c");


    // Creating a XHR object

    let xhr = new XMLHttpRequest();

    let url = "http://localhost:60929/api/test";



    // open a connection

    xhr.open("POST", url, true);



    // Set the request header i.e. which type of content you are sending

    xhr.setRequestHeader("Content-Type", "application/json");



    // Create a state change callback

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {



            // Print received data from server

            result.innerHTML = this.responseText;



        }

    };



    // Converting JSON data to string

    var data = JSON.stringify({  "empId":empid.value , "firstName": f.value, "lastName": l.value,"department":d.value,"salary":s.value,"city":c.value });



    // Sending data with the request
    xhr.send(data); 
    console.log(data);

}

function show123() {

   

    var id=document.getElementById("like123").value;

    var url="http://localhost:60929/api/test/Employee/"+id;

    fetch(url)

    .then((res) => res.text())

    .then(ans => showData(ans))  

    }

       

     

  function showData(data)

  {

      document.getElementById('show').innerHTML=data;

  }