

$(document).ready(function(){

   $(".page2").hover(function(){
       $(".hel").addClass("animated pulse");
       
   });
   $(".page3").hover(function(){
       $(".c").addClass("animated bounceInDown").html("<h3 align='center'>C</h3><img class='img-responsive img-size' src='images/c.png' >");
        $(".cpp").addClass("animated bounceInDown").html("<h3 align='center'>C++</h3><img class='img-responsive img-size'src='images/c++.png'>");
         $(".py").addClass("animated bounceInDown").html("<h3 align='center'>Python</h3><img class='img-responsive img-size'src='images/python.png'>");
          $(".html").addClass("animated bounceInDown").html("<h3 align='center'>HTML 5</h3><img class='img-responsive img-size'src='images/html.png'>");
           $(".css").addClass("animated bounceInDown").html("<h3 align='center'>CSS 3</h3><img class='img-responsive img-size'src='images/css.png'>");
            $(".js").addClass("animated bounceInDown").html("<h3 align='center'>Javascript</h3><img class='img-responsive img-size'src='images/javascript.png'>");
            $(".jq").addClass("animated bounceInUp").html("<h3 align='center'>jQuery</h3><img class='img-responsive img-size'src='images/jquery.png'>");
           $(".bs").addClass("animated bounceInUp").html("<h3 align='center'>Bootstrap</h3><img class='img-responsive img-size'src='images/bootstrap.png'>");
            $(".git").addClass("animated bounceInUp").html("<h3 align='center'>Git</h3><img class='img-responsive img-size'src='images/git.png'>");
       
       
       
       
   });
  $('.carousel').carousel({
      interval: 3000
    })
   /**
var index = 1;

function plusIndex(n){
index = index + n;
showImage(index);
}

showImage(1);

function showImage(n){
var i;
var x = document.getElementsByClassName("slides");
if(n > x.length){ index = 1};
if(n < 1){ index = x.length};
for(i=0;i<x.length;i++)
{
x[i].style.display = "none";
}
x[index-1].style.display = "block";
}
autoSlide();
function autoSlide(){
var i;
var x = document.getElementsByClassName("slides");
for(i=0;i<x.length;i++){
x[i].style.display = "none";
}
index++;
if(index > x.length){index = 1}
x[index-1].style.display = "block";
setTimeout(autoSlide,2000);

}
// setTimeout(autoSlide,2000);

**/


/**
var count =0;
showImage(1);

function showImage(n){
    
   
    if(n>3){count=1};
    if(n<0){count =4};
   
    for(var i=0; i<4;i++){
        $(".slides").eq(i).css("display","none");
    }
     $(".slides").eq(count-1).css("display","block");
    
        
        
    }
    function plusCount(){
        count +=n;
        showImage(count);
        
    
}
function minusCount(){
    count -=n;
    showImage(count);
    
    
}
 ("#bn1").click(plusCount());
 ("#bn2").click(minusCount());
 
 
 **/
 
    
  
      
      
      
      
      
  
  
    
    
    
   
    
    
    
});
