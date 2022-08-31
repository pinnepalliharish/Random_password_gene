
const alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const symbols=['!','@','#','$','%','^','&','*']

function p(){
    var ac=document.getElementById("alphabets").value;
    aw=""
    for (var i=0;i<ac;i++){
        r1=Math.floor(Math.random()*alphabets.length)
        aw+=alphabets[r1]
    }

    var nc=document.getElementById("numbers").value
    nw=""
    for (var i=0;i<nc;i++){
        r1=Math.floor(Math.random()*9)
        nw+=r1
    }

    var sc=document.getElementById("symbols").value
    sw=""
    for (var i=0;i<sc;i++){
        r1=Math.floor(Math.random()*9)
        sw+=symbols[r1]
    }
    var s=aw+nw+sw
    var arr = s.split('');           
  
    arr.sort(function() {
        return 0.5 - Math.random();
    });  

    s = arr.join('');   
    console.log(s.length)     
    document.getElementById("output").textContent=s
}







