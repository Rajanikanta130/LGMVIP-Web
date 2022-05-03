
var list = document.getElementsByTagName('div');
var things = document.getElementById('things');
var addList = document.getElementById('addList');
var listCon = document.getElementById('listCon');

for(i=0 ; i<list.length ; i++){
   list[i].index = 0;  
}

things.onfocus = function(){
   things.placeholder = "";
}

things.onblur = function(){
   things.placeholder = "Write something here...";
}

addList.onclick = function(){ 
    if(things.value){ 
      var outLi = document.createElement("DIV");
      outLi.id = 'fadeInID';
      var li = document.createElement("DIV");
      li.id = 'liID';
      var check = document.createElement("DIV");
      check.id = 'checkID';
      var del = document.createElement("DIV"); 
      del.id = 'delID';
          
      
      //"刪除事項"
     del.onclick = function(){
         this.className = 'Del';
         //jquery fadeOut
         $(this).parent().fadeOut("fast");
      }
      //已做事項功能
      var count = 0;
      check.onclick = function(){
         
         count++;
         if(count%2 == 0){
            $(this).siblings().removeClass("undo done").addClass("undo");
         }
         else{
            $(this).siblings().removeClass("undo done").addClass("done");
         }
         
         
      }
      
      
      //"TEXT內文字"
      var t = document.createTextNode("•"+"\u00A0"+"\u00A0"+things.value);
      li.appendChild(t);
      
      //"✓"號
      var checkTex = document.createTextNode("✔");
      check.appendChild(checkTex);
      
      //"✖號"
      var delTex = document.createTextNode("✖");
      del.appendChild(delTex);           
      outLi.appendChild(li);
      outLi.appendChild(check);
      outLi.appendChild(del);
      //listCon.appendChild(outLi);  
      listCon.insertBefore(outLi, listCon.childNodes[0]);
      
      //jquery list fadeIn
      $("#fadeInID").css('display', 'none').fadeIn("slow");
   }
   else{
      alert("Please Enter Something");
   }
   things.value = "";
}


$('div[id = "checkID"]').click(function(){ 
   
   if((this.index % 2) == 0){
      $(this).siblings().removeClass("undo done").addClass("done");
      this.index++;
   }
   else{
      $(this).siblings().removeClass("undo done").addClass("undo");
      this.index++;
   }
});


$('div[id = "delID"]').bind("click", function(){
    $(this).parent().fadeOut("fast");
});


$("#things").keyup(function(event){
    if(event.keyCode == 13){
        $("#addList").click();
    }
});




