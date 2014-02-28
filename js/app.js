$(document).ready(function(){
var InputTaken;
var PastGuesses=new Array();
var Random=Math.round((Math.random()*99)+1);
	function InputValidator(){
		if(isNaN($("input[type='text']").val()) || $("input[type='text']").val()==" "){
			alert("Enter a number instead");
			$("input[type='text']").val("");
		}else if($("input[type='text']").val()<=0 || $("input[type='text']").val()>100){
			alert("Enter 1-100");
			$("input[type='text']").val("");
		}else{
			var InputTaken=+$("input[type='text']").val();
			InputProcessed(InputTaken);
			Guesses(InputTaken);
			$("input[type='text']").val("");
		}
	}
	function InputProcessed(input){
		var Difference=Math.abs(Random-input);
		if(Difference==0){
			$("ul li p").text("You got it");
			$("ul li").removeClass("Push");
		}else if(Difference >=50){
			$("#IceCold, #Cold, #Warm, #Hot, #VeryHot").removeClass("Push");
		$("#Cold, #Warm, #Hot, #VeryHot").addClass("Push");
			
			
		}else if(Difference >=30){
		$("#IceCold, #Cold, #Warm, #Hot, #VeryHot").removeClass("Push");
		$("#IceCold, #Warm, #Hot, #VeryHot").addClass("Push");
			
		}else if(Difference >=20){
			$("#IceCold, #Cold, #Warm, #Hot, #VeryHot").removeClass("Push");
			$("#IceCold, #Cold, #Hot, #VeryHot").addClass("Push");
		}else if(Difference >=10){
			$("#IceCold, #Cold, #Warm, #Hot, #VeryHot").removeClass("Push");
			$("#IceCold, #Warm, #Cold, #VeryHot").addClass("Push");
			
		}else{
			$("#IceCold, #Cold, #Warm, #Hot, #VeryHot").removeClass("Push");
			$("#IceCold, #Warm, #Hot, #Cold").addClass("Push");
			
	}
	if(input == Random){
		$(".UporDown").text("Nice job, You got it!");
	}else if(input > Random){
		$(".UporDown").text("I suggest you go down");
	}else{
		$(".UporDown").text("I suggest you go up");
	}
	}
	function Guesses(Pushed){
		PastGuesses.push(Pushed);
		$(".Edit-left").text(PastGuesses);
		$(".Edit-right").text(PastGuesses[PastGuesses.length-2]);
		$("span").text(PastGuesses.length);
	}
	function newGame(){
		Random=Math.round((Math.random()*99)+1);
		PastGuesses=[];
		$("span").text(" ");
		$(".Edit-left").text("0");
		$(".Edit-right").text("0");
		alert("Lets do a new game");
		$("ul li p").text("You got it");
		$("ul li").removeClass("Push");
		$("#IceCold p").text("Ice Cold");
		$("#Cold p").text("Cold");
		$("#Warm p").text("Warm");
		$("#Hot p").text("Hot");
		$("#VeryHot p").text("Very Hot");
		$("span").text("0");
		$(".UporDown").text("");
		
	}
  	$("input[type='submit']").click(function(e){
  		e.preventDefault();
  		InputValidator();
  	});
	$("a.new").click(function(e){
		e.preventDefault();
		newGame();

	});  	

});


