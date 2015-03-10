<div>
	<h1>Menu</h1>
	<form method="post" action="<?php $_SERVER['REQUEST_URI']?>">
		<input type="submit" name="menu" value="Breakfast" />
		<input type="submit" name="menu" value="Starters" />
		<input type="submit" name="menu" value="Mains" />
		<input type="submit" name="menu" value="Drinks" />
		<input type="submit" name="menu" value="Desserts" />	
	</form>

<!-- 	<?php 
		// if(isset($_POST['menu'])){
		// 	switch($_POST['menu']){
		// 		case 'Breakfast':
		// 			include('includes/breakfast.php');
		// 			break;
		// 		case 'Starters':
		// 			include('includes/starters.php');
		// 			break;
		// 		case 'Mains':
		// 			include('includes/mains.php');
		// 			break;
		// 		case 'Desserts':
		// 			include('includes/desserts.php');
		// 			break;
		// 		case 'Drinks':
		// 			include('includes/drinks.php');
		// 			break;
		// 	}
		// } else {
		// 	include('breakfast.php');
		// }
	?> -->
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="js/menuAjax"></script>