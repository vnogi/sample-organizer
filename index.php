<!DOCTYPE html>
<html lang="en"> 
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body id="main_body">
    <h1>Organizador de muestras</h1>
    <p id="start">Staring  
     <?php  echo "PHP version " . phpversion() ;  
        include "organizador.php";
        ?> </p>   
    
    <div id="create_new_container_div" class="create-button">
      
    <br>Nombre de contenedor <input id= "container_name" type="text" size=6 value="gradilla">
     <br> Numero de columnas (x, largo)
     <input id= "container_colums" type="text" size=2 value=10>
     <br>Numero de filas (y, ancho) &#9;
     <input id= "container_rows" type="text" size=2 value=5>

     <br>Longitud celdilas en caracteres <input id= "input_size" type="text" size=1 value=10>  <br> 
     
     

    

    </div>


    <div id="new"></div> 
    


    <p id ="created_input_form" class="grid-container"></p>

    <script src="index.js">
    </script>
    
</body>
</html>