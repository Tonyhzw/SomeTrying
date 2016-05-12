<script>
window.onload=function(){
   var img = document.getElementsByTagName("img");
   var len= img.length;
	 var count=0;
  	setInterval(function(){
  	  img[count%len].style.display="block";
  	  if(count==0) img[len-1].style.display="none";//注意界限，否则undefined无此属性;
  	  else img[(count-1)%len].style.display="none";
  	  count++;
  	},3000);	
}
</script>
/*
<div id="img_rep">
<img style="display:block;" src="../1.jpg" alt="first">
<img style="display:none;" src="../2.jpg" alt="sencond">
<img style="display:none;" src="../3.jpg" alt="third">
<img style="display:none;" src="../4.jpg" alt="forth">
</div>
*/
