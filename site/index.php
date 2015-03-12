<!DOCTYPE html>
<html>
<head>
	<style>
	#map-canvas{
		width:400px;
		height:400px;
	}
	</style>
	<title>Strawberry Fare</title>
	<meta charset="utf-8" />
	<meta type="description" content="Strawberry Fare is New Zealand's number one dessert restaurant" />
	<meta type="keywords" content="Strawberry, Fare, New Zealand, dessert, restaurant" />
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Roboto:500italic' rel='stylesheet' type='text/css'>
</head>
<body>

	<?php
		include('pages/landing.php'); //Ian
		include('pages/about.php'); //Cilla
		include('pages/menu.php'); //Jake
		include('pages/contact.php'); //Hannah
	?>

<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCXKnJ21plLH05VREvnz5lEPSW1JE5gigM&amp;sensor=false"></script>
<script src="js/main.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="js/menuAjax.js"></script>
<script type="text/javascript" src="js/keyNavigation.js"></script>
</body>
</html>