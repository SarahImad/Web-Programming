/*var ourRequest = new XMLHttpRequest()
ourRequest.open("GET", "json/animal1.json", true);

ourRequest.onprogress=function(){console.log("on progress")} //optional 

ourRequest.onload=function(){    
     //console.log(ourRequest.responseText)
    
    // when we get the response, we define what should be done
  /*  var data = ourRequest.responseText;
    console.log(data[0])*/ // this will return the first charecter not object because json come in the form of text, so I should parse
   /* var data = JSON.parse(ourRequest.responseText)
    console.log(data[0]) // now after parsing, this will return the first object

}
    ourRequest.send()*/

     var pageCounter = 1

     var animalcontainer = document.getElementById("animal-info")

     var btn = document.getElementById("fetchButton")

     btn.addEventListener("click" ,function(){

        var ourRequest = new XMLHttpRequest()
        ourRequest.open("GET", "json/animal1.json", true);
        
        ourRequest.onprogress=function(){console.log("on progress")} //optional 
        
        ourRequest.onload=function(){    
            var data = JSON.parse(ourRequest.responseText)
            console.log(data[0]) // now after parsing, this will return the first object
        
        } 
         ourRequest.send();
         pageCounter++
         if(pageCounter>=3){
            btn.classList.add("hide-me")
         }
     })


     function renderHTML(data){
        var htmlString= "";
        for(var i = 0; i <data.length;i++){
htmlString += "<p>" + data[i].name+ " is a "+ data[i].species+"</p>"
        }
        animalcontainer.insertAdjacentHTML("afterend", htmlString)
     }
   



