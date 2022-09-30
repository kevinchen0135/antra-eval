
const baseUrl= "https://randomuser.me/api";
let users=[]

// let names=[]
// let emails=[]
// let phone=[]
// let dob=[]
// let pic=[]
function getPerson(){
 let objx={}
 
  fetch(baseUrl).then(function(response){
    return response.json();
  }).then(function (obj) {
    //console.log(obj.results)
    objx=obj.results
    //console.log(objx[0].gender)
    let person={
      name: objx[0].name.title +" "+objx[0].name.first+ " "+objx[0].name.last,
      email: objx[0].email,
      phone: objx[0].phone,
      dob: objx[0].dob.date,
      pic: objx[0].picture.large
    }
    addList(person);
    //console.log(person)
    // names.push(objx[0].name.title +" "+objx[0].name.first+ " "+objx[0].name.last);
    // emails.push(objx[0].email);
    // phone.push(objx[0].phone);
    // dob.push(objx[0].dob.date);
    // pic.push(objx[0].picture.thumbnail);

    //users.push(person);
  })

 
}

function loadx(x){

  for(let i=0;i<x;i++){
    getPerson();
  }
}


function addList(person){
let x= users[0]
const ul = document.getElementById("mylist");
const li = document.createElement("li");
li.setAttribute("id","service-list")
li.innerHTML=`<img src="${person.pic}" alt="icon" width="200vw" height="100vh" /><p>Name: ${person.name}<br>Email: ${person.email}<br>Phone:${person.phone}<br><button onclick="alert('${person.dob}');">ShowDob</button></p>`
ul.appendChild(li);

}
//addList();

function load() {
  loadx(20);

 }