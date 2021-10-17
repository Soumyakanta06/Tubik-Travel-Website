// console.log("gii");
var list = document.querySelectorAll(".list-group");
var blogcontent = document.querySelectorAll(".blog-content");
var blog1 = document.getElementsByClassName("blog1");
var blog2 = document.getElementsByClassName("blog2");
var blog3 = document.getElementsByClassName("blog3");
var blog4 = document.getElementsByClassName("blog4");

var blog = [blog1 , blog2 , blog3 , blog4];
// for(var i=0; i<= blog.length; i++){
//     if(e.classList.contains("bl"+i)){
//         console.log("bl"+i)
//     }
// }



list.forEach((e) =>{
    
        

e.addEventListener("click",()=>{
    list.forEach((e) =>{
        e.classList.remove("active");
  })
    e.classList.add("active");  
   
    })
    // for(var i=0; i<= blog.length; i++){
    //     var xx = "bl"+i;
    
    //     if(e.classList.contains(xx)){
    //         var bx = "blog"+i;
    //         console.log(`${bx}`);
    //         var bx = document.getElementsByClassName(`${bx}`);
    //         blogcontent.forEach((f) => {
    //                     f.classList.remove("show");
    //                 })
    //                 `${bx}`.classList.add("show");

        
    }

    
)
//     blogcontent.forEach((f) => {
//         f.classList.remove("show");
//     })
//         if(e.classList.contains(bl1)){
//             blog1.classList.add("show");
//         }
//         elseif(e.classList.contains(bl2)){
//             blog2.classList.add("show");
//         }
//         elseif(e.classList.contains(bl3)){
//             blog3.classList.add("show");
//         }
//         elseif(e.classList.contains(bl4)){
//             blog4.classList.add("show");
//         }  
//   })     

           
// })




        
    

