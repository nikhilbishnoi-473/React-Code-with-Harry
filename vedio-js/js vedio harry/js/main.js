document.querySelector(".heading").addEventListener("click", function(){
    console.log("clicked");
alert("hello")
})
document.querySelector(".conform").addEventListener("click", function(){
    console.log("conform your id");
    let conf = confirm("are you sure")
    console.log(conf);
    
})