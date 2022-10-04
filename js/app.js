$(document).ready(function (){
	$("#year").change(function (){
		alert($(this).val());
	});

	$("#agregar").click(function(){
		var year2=$("#year2").val();
		$("# year").append('<option value="'+year2+'">'+year2+'</option>');
	});
});