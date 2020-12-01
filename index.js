console.log("my extension")
alert("loaded")



var dom = document.getElementById("rso");
console.log("the dom is" + dom.innerHTML)
var links = dom.getElementsByClassName("r");
for(let i = 0; i<links.length; i++){
    let titles = links[i].getElementsByTagName("h3");
    console.log("titles is:" + titles[0])
}