$(document).ready(function (){
	$("#year").change(function (){
		alert($(this).val());
	});

	$("#agregar").click(function(){
		var year2=$("#year2").val();
		$("# year").append('<option value="'+year2+'">'+year2+'</option>');
	});

	$.get( "https://jsonplaceholder.typicode.com/posts", function( data) {
		  console.log( data );
		  	data.forEach(function (dato,index){
		  		$("#datos-tabla").append('<tr><td>'+(index+1)+'</td><td>'+dato.userId+'</td><td>'+dato.id+'</td><td>'+dato.title+'</td></tr>');
		  	});
		});
});