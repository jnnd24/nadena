$(document).ready(function(){
	$("ul.sub_menu").hide(); //기본은 안보이게
	  
	$("ul.menu > li").hover(function(e){
		$("ul.sub_menu").hide(); //리셋
		$("ul:not(:animated)",this).slideDown("slow"); // 메뉴 나오기	
		      
		$("ul:not(:animated)",this).slideDown("slow");
			} , function(){
		$("ul.sub_menu", this).slideUp("slow");
	});
});