product.html=>image uploading concept

practical

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage App</title>
</head>
<body>
    <h1>Image Uploading Concept</h1>
	<form>
		<p> Img = <input type="file" onchange="uploadPic(this);"></p>
		<img src="" height="200px" width="200px">
	</form>
	<script>
	
	window.onload = function(){		
			var imgData = window.localStorage.getItem('imgs');
			document.querySelector('img').src = imgData;
	}
	
	
	function uploadPic(object){
	   //object.files[0];
	   
	   var reader = new FileReader();
	   reader.addEventListener('load',function(){
		   document.querySelector('img').src = reader.result;
		   window.localStorage.setItem('imgs',reader.result);
	   });
	   reader.readAsDataURL(object.files[0]);
	   
	}
    </script>
</body>
</html>
