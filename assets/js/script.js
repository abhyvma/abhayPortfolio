


$( document ).ready(function() {
    var arr = ['bg_1.jpg','bg_2.jpg','bg_3.jpg'];
    
    var i = 0;
    setInterval(function(){
        if(i == arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = 'url(../assets/images/'+arr[i]+')';
        $(".full-bg").css('background-image',img); 
     
    }, 4000)

});

function expCalculator() {  
    var joindate = new Date("03/15/2021");  
    var month_diff = Date.now() - joindate
    var age_dt = new Date(month_diff);   
    var month=age_dt.getMonth(); 
    var year = age_dt.getUTCFullYear();  
    var exp = year - 1970; 
    
   return document.getElementById("exp").innerHTML = exp+" Year "+month+" Month"
             
}

$(document).ready(function() {
  
    
   
    if ((screen.width<=450))  {
    // for Hide
    document.getElementById("hide").style.display = "none";
    }
    else if ((screen.width>450))  {
        // for unhide
        document.getElementById("hide").style.display = "block";
        }
    });

    function Submit() {  
        var name=document.getElementById("fname").value;
        var email=document.getElementById("email").value;
        var mno=document.getElementById("mno").value;
        var mes=document.getElementById("mes").value;
        if (name!="" && email!=""&& mno!="",mes!="") {
            alert("Message Sent Successfully !!")
            document.getElementById("fname").value="";
            document.getElementById("email").value="";
            document.getElementById("mno").value="";
             document.getElementById("mes").value="";
        }
        else {
            alert("All feild Required !!")
        }
     
      
                 
    }




