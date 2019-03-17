$(document).ready(function(){
  const url = "http://localhost:5000";
  var data={}
//   alert("js")
$.ajax({
    type: 'GET', // added,
    url: url+"/test",
    datatype: "application/json",
    // data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    }).done((data)=>{
        console.log(data)
    })

    $.ajax({
        type: 'POST', // added,
        url: url+"/admin/getstaff",
        datatype: "application/json",

        // headers: {"Authorization": localStorage.getItem('token')},
        contentType: 'application/json; charset=utf-8',
        }).done((data)=>{
            console.log(data)
        })

        $("#login").submit((e)=>{
            e.preventDefault();
            alert("subit")
        })

});