<!DOCTYPE html>
<html>
<head>
	<style>
	#map-canvas{
		width:100%;
		height:500px;
	}
	.scrollToTop{
		width:100px; 
		height:130px;
		padding:10px; 
		text-align:center; 
		background: whiteSmoke;
		font-weight: bold;
		color: #444;
		text-decoration: none;
		position:fixed;
		top:30px;
		right:20px;
		display:none;
		background: url('arrow_up.png') no-repeat 0px 20px;
	}
	.scrollToTop:hover{
		text-decoration:none;
	}
	</style>
	<title>Strawberry Fare</title>
	<meta charset="utf-8" />
	<meta name="description" content="Strawberry Fare is New Zealand's number one dessert restaurant" />
	<meta name="keywords" content="Strawberry, Fare, New Zealand, dessert, restaurant" />
	<link rel="stylesheet" type="text/css" href="css/responsive-nav.css">
	<link rel="stylesheet" type="text/css" href="css/responsive-styles.css">
	<link href="css/demo.css" rel="stylesheet" type="text/css">
</head>

<body>

	<?php
		include('pages/landing.php'); //Ian
		include('pages/about.php'); //Cilla
		include('pages/menu.php'); //Jake
		include('pages/contact.php'); //Hannah
	?>

	
	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCXKnJ21plLH05VREvnz5lEPSW1JE5gigM&amp;sensor=false"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/smoothScroll.js"></script>
	<script src="js/responsive-nav.js"></script>
	<script src="js/menuAjax.js"></script>
	<script src="js/keyNavigation.js"></script>
	<script src="js/scrollToTop.js"></script>

</body>
</html>