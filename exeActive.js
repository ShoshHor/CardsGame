// let id="card"+num
// let card=document.getElementById(id)
// function start(num){
// function setting(){
//     card.getElementsByClassName('sett')[0].style.display='none'
// }



 function setting(num){
     //let id="set"+num
     document.getElementById("set"+num).style.display='none'
    document.getElementById("write"+num).hidden=false
    //document.getElementById("answer1"+num).hidden=false
 }


function yes(num){
    document.getElementById("ok"+num).style.display='none'
    let myInput=document.getElementById("write"+num)
    myInput.hidden=true
    let myLabel=document.getElementById("answer"+num)
    myLabel.hidden=false
    myLabel.innerHTML +="  -----  " +myInput.value  

}
function insert(num){
    //let id="write"+num
    let but=document.getElementById("write"+num)
    but.className="a"

}