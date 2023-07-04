/*var linkProduct=document.querySelectorAll(".listPadding")
for(varj=0;j<linkProduct.length;j++){

    linkProduct[j].addEventListener("click",function(event){
        var x=event.target
        console.log(x)
    })
}*/
var input1Product=document.getElementById("input1")
var input2Product=document.getElementById("input2")
var input3Product=document.getElementById("input3")
var input4Product=document.getElementById("input4")
var input5Product=document.getElementById("input5")
var input6Product=document.getElementById("input6")
var back1Product=document.getElementById("back1")
var search1Product=document.getElementById("searchWord")
var search2Product=document.getElementById("searchword2")
var button1Product=document.getElementById("button1")





var barsProduct=document.getElementById("bars")

barsProduct.addEventListener("click",function(){

document.getElementById("navbar").style.transform="translateX(0%)"
document.getElementById("navbar").style.transitionDuration="1s"
document.getElementById("navbar12").style.transform="translateY(0%)"
document.getElementById("bars").classList.add("d-none")
document.getElementById("iconx").classList.remove("d-none")

})

var iconxProduct=document.getElementById("iconx")

iconxProduct.addEventListener("click",function(){

document.getElementById("navbar").style.transform="translateX(-80%)"
document.getElementById("navbar").style.transitionDuration="1s"
document.getElementById("bars").classList.remove("d-none")
document.getElementById("iconx").classList.add("d-none")

})
var recipeProduct=[]

var linkProduct=document.querySelectorAll(".ajax")
for(var j=0;j<linkProduct.length;j++){

    linkProduct[j].addEventListener("click",function(event){
        var xTota=event.target.getAttribute("film")
        getDataProduct(xTota)
    })
}

var korya1Product="now_playing"
getDataProduct(korya1Product)



function getDataProduct(ajaxProduct){
    var httpKorya=new XMLHttpRequest()
    httpKorya.open("GET",`https://api.themoviedb.org/3/movie/${ajaxProduct}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    if(ajaxProduct=="trending"){
        httpKorya.open("GET",`https://api.themoviedb.org/3/${ajaxProduct}/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    }
    httpKorya.send()
    
    
    httpKorya.addEventListener("readystatechange",function(){
    
    if(httpKorya.readyState== 4 && httpKorya.status== 200){  
    
     recipeProduct=JSON.parse(httpKorya.response).results
     console.log(recipeProduct)
     displaydata()
    }
    })
    }
    getDataProduct()

    var imgPath="https://image.tmdb.org/t/p/w500"
    
    function displaydata(){
        temp="" ;
        for(var i=0;i<recipeProduct.length;i++){
        
        temp+=` 
        <div class="col-md-4 position-relative Hana" >
        <div class=" text-black text-center  width100 ">
        <p class="padding500">${recipeProduct[i].title}</p>
        <p>${recipeProduct[i].overview}</p>
        <p>rate:${recipeProduct[i].vote_average}</p>
        <p>${recipeProduct[i].release_date}</p>
        </div>
    
        <img class="image1"  src="${imgPath+recipeProduct[i].poster_path}" alt="korya" />

     
    
        
                    </div>`
        }
                
        
        document.getElementById("korya").innerHTML=temp
    }
        

    button1Product.addEventListener("click",function(){
if(regaxName()&&regaxAge()&&regaxEmail()&&regaxPassword()&&regaxPassword2()&&regaxPhone()){

    input1Product.value=""
    input2Product.value=""
    input3Product.value=""
    input4Product.value=""
    input5Product.value=""
    input6Product.value=""
}


    })




       function regaxName(){
var x=false
var y=/^[A-Z][a-z]{2,10}$/

if(y.test(input1Product.value)){
    x=true   
    //back1Product.style.display="none"
    $("#input1").next().css("display","none")
}

else{
    x=false
   // back1Product.style.display="block"
   $("#input1").next().css("display","block")
}

return x
 }
input1Product.addEventListener("blur",regaxName)

/*   */

function regaxPhone(){
    var x=false
    var y=/^(010|011|012|015)[0-9]{8}$/
    
    if(y.test(input2Product.value)){
        x=true   
        //back1Product.style.display="none"
        $("#input2").next().css("display","none")
    }
    
    else{
        x=false
       // back1Product.style.display="block"
       $("#input2").next().css("display","block")
    }
    
    return x
     }
    input2Product.addEventListener("blur",regaxPhone)
    /*    */

    function regaxEmail(){
        var x=false
        var y= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(y.test(input5Product.value)){
            x=true   
            //back1Product.style.display="none"
            $("#input5").next().css("display","none")
        }
        
        else{
            x=false
           // back1Product.style.display="block"
           $("#input5").next().css("display","block")
        }
        
        return x
         }
        input5Product.addEventListener("blur",regaxEmail)
        
        /*  */
        function regaxAge(){
            var x=false
            var y=/^([1-9][0-9]|[6-9])$/
            
            if(y.test(input4Product.value)){
                x=true   
                //back1Product.style.display="none"
                $("#input4").next().css("display","none")
            }
            
            else{
                x=false
               // back1Product.style.display="block"
               $("#input4").next().css("display","block")
            }
            
            return x
             }
            input4Product.addEventListener("blur",regaxAge)

            /*/^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{6,36}$/ */

            function regaxPassword(){
                var x=false
                var y=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                
                if(y.test(input3Product.value)){
                    x=true   
                    //back1Product.style.display="none"
                    $("#input3").next().css("display","none")
                }
                
                else{
                    x=false
                   // back1Product.style.display="block"
                   $("#input3").next().css("display","block")
                }
                
                return x
                 }
                input3Product.addEventListener("blur",regaxPassword)

                /* */


                function regaxPassword2(){
                    var x=false
                  
                    
                    if(input6Product.value==input3Product.value){
                        x=true   
                        //back1Product.style.display="none"
                        $("#input6").next().css("display","none")
                    }
                    
                    else{
                        x=false
                       // back1Product.style.display="block"
                       $("#input6").next().css("display","block")
                    }
                    
                    return x
                     }
                    input6Product.addEventListener("blur",regaxPassword2)
        
    
    function searchProduct(){
        temp="" ;
        for(var i=0;i<recipeProduct.length;i++){
            if(recipeProduct[i].title.toLowerCase().includes(search1Product.value.toLowerCase())){
        
        temp+=`<div class="col-md-4" >
        <div class=" text-black text-center  width100 ">
        <p class="padding500">${recipeProduct[i].title}</p>
        <p>${recipeProduct[i].overview}</p>
        <p>rate:${recipeProduct[i].vote_average}</p>
        <p>${recipeProduct[i].release_date}</p>
        </div>
        
        <img  src="${imgPath+recipeProduct[i].poster_path}" alt="korya" class="image1"/>
        
                    </div>`
                }
                document.getElementById("korya").innerHTML=temp
            }
        }
         
         search1Product.addEventListener("keyup",searchProduct)

      


         function searchProducttt(){
            temp="" ;
            for(var i=0;i<recipeProduct.length;i++){
                if(recipeProduct[i].original_title.toLowerCase().includes(search2Product.value.toLowerCase())){
            
            temp+=`<div class="col-md-4" >
            <div class=" text-black text-center  width100 ">
            <p class="padding500">${recipeProduct[i].title}</p>
            <p>${recipeProduct[i].overview}</p>
            <p>rate:${recipeProduct[i].vote_average}</p>
            <p>${recipeProduct[i].release_date}</p>
            </div>
            
            <img  src="${imgPath+recipeProduct[i].poster_path}" alt="korya" class="image1"/>
            
                        </div>`
                    }
                    document.getElementById("korya").innerHTML=temp
                }
            }
             
             search2Product.addEventListener("keyup",searchProducttt)





         barsProduct.addEventListener("click",function(){

document.getElementById("khaled11").classList.remove("khaled1")
document.getElementById("khaled11").classList.add("khaled10")



document.getElementById("khaled22").classList.remove("khaled2")
document.getElementById("khaled22").classList.add("khaled20")



document.getElementById("khaled33").classList.remove("khaled3")
 document.getElementById("khaled33").classList.add("khaled30")

  

  document.getElementById("khaled44").classList.remove("khaled4")
             document.getElementById("khaled44").classList.add("khaled40")
             
            

             document.getElementById("khaled55").classList.remove("khaled5")
             document.getElementById("khaled55").classList.add("khaled50")
          
             

             document.getElementById("khaled66").classList.remove("khaled6")
             document.getElementById("khaled66").classList.add("khaled60")
             
           







         })
         iconxProduct.addEventListener("click",function(){

            document.getElementById("khaled11").classList.remove("khaled10")
            document.getElementById("khaled11").classList.add("khaled1")
          
            
            document.getElementById("khaled22").classList.remove("khaled20")
            document.getElementById("khaled22").classList.add("khaled2")
            
           

            document.getElementById("khaled33").classList.remove("khaled30")
             document.getElementById("khaled33").classList.add("khaled3")
          
            

             document.getElementById("khaled44").classList.remove("khaled40")
             document.getElementById("khaled44").classList.add("khaled4")
            
            

             document.getElementById("khaled55").classList.remove("khaled50")
             document.getElementById("khaled55").classList.add("khaled5")
             
            
           

             document.getElementById("khaled66").classList.remove("khaled60")
             document.getElementById("khaled66").classList.add("khaled6")
            
            
             })


          window.scrollTo({
            behavior:"auto"
          })