
============================================================================================================
CRUD OPERATION(USING VANILA JS MOST IMP..)
================
ADVANCED JS>NOTES>INDEX.HTML

INDEX.HTML
===========
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage App</title>
</head>
<body>
    <h1></h1>
    <form method="post" onsubmit="return register(event);" id="form">
       
        <p>RollNo : <input type="text" name="roll" id="roll" value="1001" readonly>
		<input type="hidden" name="index" id="index" value="" readonly>
		</p>
		

        <p>Name : <input type="text" name="name" id="name"></p>
        <p>Email : <input type="email" name="email" id="email"></p>
        <p>Password : <input type="password" name="password" id="password"></p>
        <p>Mobile : <input type="text" name="mobile" id="mobile"></p>
		
		<p>Pic : <input type="file" name="pic" id="pic" onchange="uploadPic(this); "></p>
		
        <p>
		<input type="submit" name="submit" id="submit">
		<input  style="display:none;" type="button" name="update" id="update" value="update" onclick="updateUser();">
		</p>
		
    </form>
	<hr/>
	<h1>Users Data</h1>
	<table rules="all" border="1">
		<thead>
			<th>SR No.</th>
			<th>RollNo</th>
			<th>Name</th>
			<th>Email</th>
			<th>Password</th>
			<th>Mobile</th>
			<th>pic</th>
			<th>Delete|Edit</th>
		</thead>
		<tbody id='user-data'>
		</tbody>
	</table>

    <script type="text/javascript" rel="javascript">

        var Roll = 1001;
        var collections = JSON.parse(window.localStorage.getItem('student_data')) || [];
		
		var users = {}; //Global => image key.
		 var inputs = ['#roll','#name','#email','#password','#mobile'];
		 var keys = ['roll','name','email','password','mobile'];

        (function(){
            setRollno();
			loadRecords();
        })();


        function register(e){
           
            inputs.forEach((item,index)=>{
                if(index == 0){
                    users[keys[index]] = generateRollNo(collections);
                }else{
                    users[keys[index]] = $(item).value;
                }
                
            });

            collections.push(users); //[]

    window.localStorage.setItem('student_data',JSON.stringify(collections));
             

            inputs.forEach((item,index)=>{
                $(item).value = "";
            })

            
            setRollno();
			//Reload the Data
			loadRecords();
            return false;
            
            //return false;
            
        }


        function setRollno(){
            if(collections.length>0){
                let maxIndex = (collections.length-1);
                $("#roll").value  = Number(collections[maxIndex].roll)+1;
            }else{
                $("#roll").value  = Roll;
            }

        }

        function generateRollNo(collections){
            if(collections.length>0){
                let maxIndex = (collections.length-1);
                return Number(collections[maxIndex].roll)+1;
            }
            return Roll;
           
        }

        function $(elementName){
            return document.querySelector(elementName);
        }


		
		function loadRecords(){		
			let row = "";
			collections.forEach((user,index)=>{
				
				let sr_no = Number(index)+1;				
				row = row + "<tr><td>"+sr_no+"</td><td>"+user.roll+"</td><td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.password+"</td><td>"+user.mobile+"</td><td><a href='"+user.pic+"' target='_blank'><img src='"+user.pic+"' height='50px' width='50px'/></a></td><td><a href='javascript:handleDelete("+index+");'>Delete</a></td><td><a href='javascript:handleEdit("+index+")'>Edit</a></td></tr>";
			});
			
			$('#user-data').innerHTML = row;
	}
		
	function handleDelete(index){
	if(window.confirm('Do you want to Delete?')){
		//console.log(index);
		//console.log('Before deleting',collections);
		collections.splice(index,1);
		//console.log('After Deleting');
		//console.log(collections);
		window.localStorage.setItem('student_data',JSON.stringify(collections));
		loadRecords();
	}
		
	}	
	
	
	function uploadPic(object){
		console.log(object.files[0]) //File Blob object
		
		//file reader class object
		//Scanner sc=new Scanner(System.in);
		var reader = new FileReader();
		
		reader.addEventListener('load',function(){
			//console.log(reader.result);
			users['pic'] = reader.result;
			console.log(collections);
		});
		
		//convert Blob Object => data Url => Binary Data.
		reader.readAsDataURL(object.files[0]);
	
	}
		
	function handleEdit(index){
	  let currentUser = collections[index];
	  
	   //$('#roll').value = currentUser.roll;
	   //$('#name').value = currentUser.name;
	   //$('#email').value = currentUser.email;
	   //$('#mobile').value = currentUser.mobile;
	   //$('#password').value = currentUser.password;
	   
	   inputs.forEach((item,ind)=>{
	   
			 $(item).value = currentUser[keys[ind]];
	   });
	   
	  
	  $('#submit').style.display = 'none';
	  $('#update').style.display = 'block';
	  
	  //$('#form').innerHTML =  $('#form').innerHTML + "<input type='text' id='index' value='"+index+"'>";
	  
	  $('#index').value = index;
	  
	}
	
	function updateUser(){
		
		let index = $('#index').value;
		collections[index].name = $('#name').value;
		collections[index].email = $('#email').value;
		collections[index].mobile = $('#mobile').value;
		collections[index].password = $('#password').value;
		
		//console.log(collections[index]);
		window.localStorage.setItem('student_data',JSON.stringify(collections))
		window.location.reload();
	}
		

    </script>

</body>
</html>
