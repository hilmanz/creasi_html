<!DOCTYPE html>
<html>
<?php include("meta.php"); ?>
<body class="animated" data-animated="fadeIn">
<div id="body">
    <div id="page">
        <?php include("header.php"); ?> 
		<?php 
        if($_GET['page']==''){
            include("home.php");
        }else if($_GET['page']=='talent-board'){ 
            include("talent-board.php");
        }else{ 
            include("home.php");
        }?>
        <?php include("footer.php"); ?> 
    </div><!-- end #page -->
</div><!-- end #body --> 			
</body>
</html>