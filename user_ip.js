const prompt = require("prompt-sync")();
a = prompt("Enter value:");
a = Number(a);
function test(a){
     for(i=0;i<a;i++){
        if(i%2==0){
             console.log("%d is Even",i);
         }
         else{
             console.log("%d is odd",i);
         }
}
}
test(a);