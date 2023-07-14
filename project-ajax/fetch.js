 document.getElementById("get").addEventListener('click',loaduser);
 function loaduser(){
    var x="hello world";
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(this.status==200){
            console.log((this.responseText));
        }
    }
    xhr.open('GET','https://api.github.com/users',true);
    xhr.setRequestHeader('Content-type','application/PLAIN_TEXT');
    xhr.send(); 
}