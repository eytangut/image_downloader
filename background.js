alert("hi")
function  myGenericClick(info, tab){
    console.log("clicked on page", info, tab)

}
function  myImageClick(info, tab){
    console.log("clicked on image", info, tab)

}


chrome.contextMenus.create({
    "title": "Share",
    "contexts": ["page"],
    "onclick": myGenericClick
})
chrome.contextMenus.create({
    "title": "Share image",
    "contexts": ["image"],
    "onclick": myImageClick
})