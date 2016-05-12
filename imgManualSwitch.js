function addListener(e,type,handler){
    if(window.addEventListener){
	  e.addEventListener(type,handler);	
	}
	else{
	 var wraper=function(){
		 var event=window.event;
		 event.target=e.srcElement;
		 handler.call(e,event);
	 }
	 e.attachEvent("on"+type,wraper);
   }
}
window.onload=function(){
   var img = document.getElementsByTagName("img");
   var button=document.getElementsByTagName("button");
   var imgLen= img.length,butLen=button.length;
   var curIndex=0;
   addListener(button[0],"click",function(){//左图
       console.log(curIndex-1);
	   if(curIndex==0){
		    img[curIndex].style.display="none";
		    img[imgLen-1].style.display="block";
			curIndex=imgLen-1;//遇到小于零的直接截成合适的值
	   }
	   else{
		   img[curIndex%imgLen].style.display="none"; 
		   img[(curIndex-1)%imgLen].style.display="block";  
		   curIndex--;
	   }
	  
  });
  addListener(button[1],"click",function(){//右图
       console.log(curIndex+1);
	     img[(curIndex)%imgLen].style.display="none";
       img[(curIndex+1)%imgLen].style.display="block";  
	     curIndex++ 
  });  	
}
/*
<div id="img_rep">
<img style="display:block;" src="../1.jpg" alt="first">
<img style="display:none;" src="../2.jpg" alt="sencond">
<img style="display:none;" src="../3.jpg" alt="third">
<img style="display:none;" src="../4.jpg" alt="forth">
</div>
<button>左图</button><button>右图</button>
*/
