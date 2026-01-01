let data 
let dataObj  ={}
function getData () {
    console.log("hee")
    data =location.search.substring(1).split("&")
    for (let i =0 ;i < data.length;i++){
        var item = data[i];
         var parts = item.split('=');
    var key = parts[0];
    var value = parts[1];
    dataObj[key] = value;
    }
    console.log(dataObj)
    setData();
}

function setData() {
        document.getElementById("userName").innerText = dataObj["userName"];
 document.getElementById("address").innerText = dataObj["address"];
     document.getElementById("email").innerText = dataObj["email"];
    document.getElementById("mobile").innerText = dataObj["mobile"];
  document.getElementById("gender").innerText = dataObj["gender"];
}
