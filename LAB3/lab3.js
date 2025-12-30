function sortNums(){
    let userSize = prompt("enter size of the array  ")  //  why user size work   it is string !
    if(isNaN(userSize)|| userSize===''){
        console.log ("invalid input")
    }
    let size = parseInt(userSize);
    let arr=[] ;
    let x ;
    for (let i =0 ;i < size ;i++){
        x= prompt("Enter number ")
        arr.push(parseInt(x))
    }
    console.log("before sorting")
    console.log(arr)
    arr.sort((a, b) => a - b)
    console.log(" ASE sorting")
    console.log(arr)
    console.log("DESC sorting")
    console.log(  arr.sort((a, b) => b-a))
}
//2  
function userInput (){
    let street = prompt(" enter street");
    let buildingNum = prompt (" enter buildingNum ")
    let city = prompt (" enter city ")
    let  address = {
        street: street,
        buildingNum:buildingNum,
        city: city ,
        registeredIn: new Date()
    }
    showAddr(address);
}

function showAddr (addrObj){
    console.log (addrObj.buildingNum+" "+ addrObj.street+"  st., "+addrObj.city +" city registered in "+ addrObj.registeredIn.toLocaleDateString())
}

let obj = {
    age: 15,
    userName:"fefe"
}


function dispVal (obj, key) {
    if(!! obj[key]){
        console.log(obj[key])
    }
    else {
        console.log("not exist ")
    }
    }

 let win  ;
 let myInt ;
function childWindow (){
    let flag = true;
    let childY;
    let childX;
   
     win = open('child.html', '', 'width=300,height=300')
     myInt =  setInterval(function () {
         childY= win.screenY;
           childX = win.screenX
        if ( flag  ){
            if (childY + 330> screen.availHeight ){
                flag = false ;
            }
            win.moveBy(10, 10)
            win.resizeTo(300,300)
       }else {
        win.moveBy(-10,-10)
        win.resizeTo(300,300)
        if (childX <= 10) { 
                flag = true;
            }
       }
    console.log("x "+childX + "  y" + childY)
  }, 50)
   
}

function stop(){
 //   win.close()
    clearInterval(myInt)
    console.log("stop ")
   win.focus()
}
function scroll1 () {
    win = open('scroll.html', '', 'width=300,height=300')
    myInt = setInterval( function (){
           win.scrollBy(0,1)
    }
    )
 

}
let myTimer;
function scroll2() {
    win = open('scroll.html', '', 'width=300,height=300');
    scrollWithTime(); 
}

function scrollWithTime() {
    win.scrollBy(0, 1);
    myTimer = setTimeout(scrollWithTime, 10); 
}

function stopTimer() {
    clearTimeout(myTimer);
}


// scroll2()
// scroll1()
// childWindow()
// dispVal(obj,"age")
// userInput()
// sortNums()