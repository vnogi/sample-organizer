//why and how you execute



total_sample_list=[]  //main register of all input nodes with value
container_counter=1;    // main container counter

//object that stores container_name: number of containers of the same name
containers={}

function container_update(input){
if(containers[input]==undefined){containers[input]=1}
else{containers[input]+=1}
}

let input_size=5;    //commands the input size of all the input elements in the document
function containded_in (input_string, search_string){
    if(input_string.search(search_string)!=-1){
        return true
    }else{return false}
}

function search_function(node_list,search_content){
    result_list=[]
    node_list.forEach(function(node,index,array){
    if(containded_in(node.value,search_content)){
        result_list.push(node)
    }
    })
    return result_list
}

var tag = document.createElement("p");
var text = document.createTextNode("Organiza pero tampoco tanto.");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);
let search_button = document.createElement("button");
let create_container = document.createElement("button");
create_container.innerHTML="Crear contenedor"

search_button.innerHTML="Buscar muestra"
//works, searches for a sample
search_button.onclick = function(){
    console.log("starting search")
    console.log(search_input.value) //has acces to all the document
    result_node_list=search_function(total_sample_list,search_input.value)
    console.log(result_node_list)
    alert(result_node_list[0].value)
}
element.appendChild(search_button)
let search_input=document.createElement("input")
search_input.id="search_input"
search_input.size=input_size
element.appendChild(search_input)

//creates an event handler, for clicking the creare container button
create_container.onclick=function(){ 
    let container_name=document.getElementById("container_name").value   
    container_update(container_name)
    current_container_paragraph_info=new container_input_info;
    create_container_paragraph(current_container_paragraph_info);
    containers;
}


var element2=document.getElementById("create_new_container_div");
element2.appendChild(create_container);




//let new_input_element=document.getElementById("created_input_form");

let main_counter=0;
let paragraph_insertion_destination_id="main_body";
//let gradilla_row_capacity=5;
//let gradilla_column_capacity=5;
//let gradilla_last_container_position=gradilla_row_capacity*gradilla_column_capacity; //creemos que va a ser llena

//works creates a new paragraph
function create_new_paragraph(main_counter,
    new_paragraph_name,
    text_node_text_content)
    {
    var tag = document.createElement("p");
    tag.id=new_paragraph_name;
    
    var text = document.createTextNode(text_node_text_content);
    tag.appendChild(text);
    var element = document.getElementById(paragraph_insertion_destination_id);
    element.appendChild(tag);
    main_counter+=1
}


function appendText(element_id,text_to_append)   //works appends text
    {
    let selected_paragraph=document.getElementById(element_id);
    let text_to_add= document.createTextNode(text_to_append);
    selected_paragraph.appendChild(text_to_add)}


function isolated_input_list(loop_cicles,
    new_paragraph_id,
    new_paragraph_text_content,
    
    base_input_id)
    {
    let title_paragraph_id ="title_"+new_paragraph_id;
    let paragraph_title=create_new_paragraph(main_counter,title_paragraph_id,new_paragraph_text_content)
    let new_paragraph=create_new_paragraph(main_counter,new_paragraph_id,"")
    document.getElementById(new_paragraph_id).classList.add("grid-container") 
    //adds css style, the grid template must be modified in order to diplay dinamical arrangement of elements
    my_current_paragraph=document.getElementById(new_paragraph_id);
    my_current_paragraph.style.gridTemplateColumns= " auto ".repeat(gradilla_column_capacity); 
    //works repeats auto the number of times of the column capacity
    my_current_paragraph.style.gridTemplateRows= " auto ".repeat(gradilla_row_capacity); // a lo mejor va bien
    my_current_paragraph.style.display="grid"; //activates the grid

    let input_form_list=[]
    
    for(i=0 ;i<loop_cicles;i+=1){
        new_input_element=document.getElementById(new_paragraph_id);
        
        let input_id=base_input_id+i.toString(10) +"_" + main_counter.toString(10);
        input_form_list.push(document.createElement("input")); //adds new input element to the array
        input_form_list[i].id=input_id;    //sets id
        console.log(input_form_list[i].id); //degugging line, inactivate afterwards 
        input_form_list[i].type="text";
        input_form_list[i].size=input_size;
        new_input_element.appendChild(input_form_list[i]);
        main_counter++
      }
      
     console.log("isolated input list done")
    return input_form_list;
}


function encapsulated_isolated_input_list(loop_cicles,
    new_paragraph_id,
    new_paragraph_text_content,
    
    base_input_id,
    gradilla_column_capacity,
    gradilla_row_capacity,
    debug
    )
    {
    let title_paragraph_id ="title_"+new_paragraph_id;
    let paragraph_title=create_new_paragraph(main_counter,title_paragraph_id,new_paragraph_text_content)
    let new_paragraph=create_new_paragraph(main_counter,new_paragraph_id,"")
    document.getElementById(new_paragraph_id).classList.add("grid-container") 
    //adds css style, the grid template must be modified in order to diplay dinamical arrangement of elements
    my_current_paragraph=document.getElementById(new_paragraph_id);
    my_current_paragraph.style.gridTemplateColumns= " auto ".repeat(gradilla_column_capacity); 
    //works repeats auto the number of times of the column capacity
    my_current_paragraph.style.gridTemplateRows= " auto ".repeat(gradilla_row_capacity); // a lo mejor va bien
    my_current_paragraph.style.display="grid"; //activates the grid

    let input_form_list=[]
    
    for(i=0 ;i<loop_cicles;i+=1){
        new_input_element=document.getElementById(new_paragraph_id);
        
        let input_id=base_input_id+i.toString(10) +"_" + main_counter.toString(10);
        input_form_list.push(document.createElement("input")); //adds new input element to the array
        input_form_list[i].id=input_id;    //sets id
        if(debug==true){console.log(input_form_list[i].id);} //degugging line, inactivate afterwards 
        input_form_list[i].type="text";
        input_form_list[i].size=input_size;
        new_input_element.appendChild(input_form_list[i]);
        main_counter++
      }
      
     if(debug==true){console.log("isolated input list done")}
    return input_form_list;
}




/*gradilla1=isolated_input_list(gradilla_last_container_position,
    "isolated_inputs_paragraph_2",
    "Gradilla 1. Escanea con la pistola.",
    "isolated_input_")

console.log(gradilla1);*/


function g1_enter_respose_function(){
    console.log("g1 function response");
    
}

//works good, moves from last row to first tow 
function get_next_input_reverse_filling(input_element,row_capacity,last_container_position){
    return_element=0;
    present_input_id= input_element.id;
    split_string_input_id=present_input_id.split("_");
    container_position=parseInt(split_string_input_id[2]);
    next_container_position=parseInt(container_position)+1

    global_counter_position=parseInt(split_string_input_id[3]);
    next_global_counter_position=parseInt(global_counter_position)+1;

    if (container_position==row_capacity-1){
        
        alert("contenedor lleno")
        return "container_full"
    }
    if (container_position%row_capacity==row_capacity-1){
        next_container_position=parseInt(container_position)-(2*row_capacity)+1;
        next_global_counter_position=parseInt(global_counter_position)-(2*row_capacity)+1;
    }
    
    next_element_id_data=split_string_input_id[0] + "_" +split_string_input_id[1] +"_" +next_container_position.toString()+"_"+next_global_counter_position.toString();
    console.log(next_element_id_data);
    return document.getElementById(next_element_id_data)
}

function get_next_input_forward_filling(input_element,row_capacity,last_container_position){
    return_element=0;
    present_input_id= input_element.id;
    split_string_input_id=present_input_id.split("_");
    container_position=parseInt(split_string_input_id[2]);
    next_container_position=parseInt(container_position)+1

    global_counter_position=parseInt(split_string_input_id[3]);
    next_global_counter_position=parseInt(global_counter_position)+1;
    
    if (container_position==last_container_position-1){
        
        alert("contenedor lleno")
        return "container_full"
    }
    
    
    next_element_id_data=split_string_input_id[0] + "_" +split_string_input_id[1] +"_" +next_container_position.toString()+"_"+next_global_counter_position.toString();
    console.log(next_element_id_data);
    return document.getElementById(next_element_id_data)
}


let gradilla_name="gradilla1"


//Works, adds event listener
function add_event_reverse_listener_to_input(input_node){
    input_node.addEventListener(
        "keyup",
        function(event){
            if (event.keyCode==13){
                console.log(input_node.value)
                next_input=get_next_input_reverse_filling(input_node,gradilla_row_capacity,gradilla_last_container_position);
                next_input.focus()
            }

        }

    )
}

function add_event_forward_listener_to_input(input_node){
    input_node.addEventListener(
        "keyup",
        function(event){
            if (event.keyCode==13){
                console.log(input_node.value)
                next_input=get_next_input_forward_filling(input_node,gradilla_row_capacity,gradilla_last_container_position);
                next_input.focus()
            }
        }
    )
}

function encapsulated_add_event_forward_listener_to_input(input_node,
    gradilla_row_capacity,
    gradilla_last_container_position,
    debug){
    input_node.addEventListener(
        "keyup",
        function(event){
            if (event.keyCode==13){
                if(debug==true){console.log(input_node.value)}
                if(input_node.value !=""){total_sample_list.push(input_node); 
                //saves the node that receiven input in the general registry, to be improved to validate input value
                next_input=get_next_input_forward_filling(input_node,gradilla_row_capacity,gradilla_last_container_position);
                next_input.focus()}
            }

        }

    )
    // works, also saves the node to the total_sample_list, on unfocusing, added get the samples with mouse clicking 
    input_node.addEventListener("blur", function (event){ 
        if(debug==true){console.log(input_node.value)};   
        if(input_node.value !=""){total_sample_list.push(input_node);}
        //saves the node that receiven input in the general registry, to be improved to validate input value
        } )
}



//works
alfabet="ABCDEFGH"


function get_letter_number_position (input_node,row_capacity){
    present_input_id= input_node.id;
    split_string_input_id=present_input_id.split("_");
    container_position=parseInt(split_string_input_id[2]);
    row_number=Math.floor(container_position/row_capacity);
    column_number=container_position%row_capacity;
    row_letter=alfabet[row_number]
    letter_number_position=row_letter + column_number
    return letter_number_position
}

function encapsulated_get_letter_number_position (input_node,row_capacity,alfabet){
    present_input_id= input_node.id;
    split_string_input_id=present_input_id.split("_");
    container_position=parseInt(split_string_input_id[2]);
    row_number=Math.floor(container_position/row_capacity);
    column_number=container_position%row_capacity;
    row_letter=alfabet[row_number]
    letter_number_position=row_letter + column_number
    return letter_number_position
}

function encapsulated_get_xy_number_position (input_node,column_capacity,row_capacity){
    present_input_id= input_node.id;
    split_string_input_id=present_input_id.split("_");
    container_position=parseInt(split_string_input_id[2]);
    row_number=Math.floor(container_position/column_capacity);
    column_number=container_position%column_capacity;
    position= column_number.toString()+"-"+row_number.toString();

    return position
}




/*
gradilla1.forEach(function(node,index,array){
    input_value=get_letter_number_position(node,gradilla_row_capacity)
    node.value=input_value + ":"
    node.name=gradilla_name
    add_event_forward_listener_to_input(node)
})

gradilla1[0].focus();

total_sample_list.push.apply(total_sample_list,gradilla1) //fuses the arrays
*/
//for creation of a full container
function container_input_info(){  //works, returns a new paragraph with container that is unique for every object
    this.paragraph_input_size=parseInt(document.getElementById("input_size").value),        // the size of the input paragraph
    this.paragraph_insertion_destination_id="main_body",  //the id of the destination html element
    this.new_paragraph_id=document.getElementById("container_name").value+ containers[document.getElementById("container_name").value], // most important creates a new paragraph every time
    
    this.new_paragraph_text_content = document.getElementById("container_name").value+ containers[document.getElementById("container_name").value], //variable so that new paragraphs are created
    this.base_input_id=document.getElementById("container_name").value+ 
    containers[document.getElementById("container_name").value]
    +"_"                           //works
    +main_counter.toString()+"_", //variable input id so that they dont colide
    this.container_row_capacity=parseInt(document.getElementById("container_rows").value),        
    this.container_column_capacity=parseInt(document.getElementById("container_colums").value),
    this.gradilla_last_container_position=this.container_row_capacity*this.container_column_capacity,
    this.alfabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    this.debug=false

}


function create_container_paragraph(container_input_info){ 
    let new_container = encapsulated_isolated_input_list(
        container_input_info["gradilla_last_container_position"], //primero ponemos la capacidad del contenedor es loop.
        container_input_info["new_paragraph_id"],  //ponemos la id del paragrafo que contiene la gradillla
        container_input_info["new_paragraph_text_content"], //el texto que aparece antes del contenedor
        container_input_info["base_input_id"], //el id basal de cada uno de los inputs creados, probablemente debiera contener 2 __ en cada id
        container_input_info["container_column_capacity"],
        container_input_info["container_row_capacity"],
        container_input_info["debug"]
        ) 
    
    //let container_name = "container" + main_counter.toString()    

    new_container.forEach(function(node,index,array){         // puts the default value in the input boxes, their position
            input_value=encapsulated_get_xy_number_position (node,
                container_input_info["container_column_capacity"],
                container_input_info["container_row_capacity"])
            node.value=input_value + ":";
            node.name=container_input_info["new_paragraph_id"]; //sets the name of every Input = the name of the paragraph for ease of posterior selection
            encapsulated_add_event_forward_listener_to_input(node,
                container_input_info["container_row_capacity"],
                container_input_info["gradilla_last_container_position"],
                container_input_info["debug"]
                )
        })
        container_counter +=1
    return new_container    
}

function input_node_objectifier (node){ //works returns an jason object 
    HTML_string=node.outerHTML
    console.log (HTML_string)
    return_object= {"HTML_string":HTML_string, "value":node.value, "id":node.id }
    return return_object;  
}

function input_node_inserter(target_node_id, objectified_input_node,div_id){ //works
    target_node=document.getElementById(target_node_id) 
    div_node=document.createElement("div")
    div_node.id=div_id
    div_node.innerHTML= objectified_input_node["HTML_string"]
    target_node.appendChild(div_node)
}


properties_to_copy=["value","size"] // global scope needs to be containerized

function input_node_cloner(input_node,destination_element_id,inserted_element_id,properties_to_copy){
//get the object representation
node_object=input_node_objectifier(input_node); 
//inserts the node without special attributes
input_node_inserter(destination_element_id, node_object , inserted_element_id ) 
//gets all the inserted nodes with the same id fpr posterior manipulation in a list
cloned_input_node_list=document.querySelectorAll ("#"+input_node.id) // works
//gets the last node
//console.log("cloned nodelist is ", cloned_input_node_list)


node_to_fix=cloned_input_node_list[cloned_input_node_list.length-1]  //works
properties_to_copy.forEach(function(property,index,array){
node_to_fix[property]=input_node[property];
 })
console.log("node to fix is ",node_to_fix)
node_to_fix.value=node_object["value"]
}

//input_node_cloner(gradilla1[0],"main_body","clone2",properties_to_copy)

test_obj={"input_id":"gradilla1_0_0",
           "container_id":"gradilla1" }

// makes an object with the completed container info to a PHP file for storage 
function completed_container_info(container_input_info){

}

function php_test_call(){
    console.log("test call starting")
    fetch ("http://localhost/small.php",{
        method:"POST",
        headers: { "Content-Type":"application/x-www-form-urlencoded", //x-www-form-urlencoded
    },
    body: ["name=john","surname=smith"],            ///works post a fucking variable
   })
   .then((response) => response.text() )
   .then (data => {console.log("Success:",data); })
   .catch ((error)=> {console.error("Error", error); } )

}
url="http://localhost/send_to_database.php"

function success(json){ 
    returnstring = JSON.stringify(json) 
    console.log(returnstring)
}

function failiure(error){console.log(error)};

function php_json_test(url, test_obj){  //works!!!
    console.log("JSON test call starting")
    fetch (url,{
     method:"POST",
     body : JSON.stringify(test_obj),
     headers: { "Content-Type":"application/json" }
    })
    .then (res => res.json())      //puede que no funcione
    .then (response => success(response))
    .catch (error => failiure(error))
}

//php_json_test(url, test_obj)

async function hello() {
    return await Promise.resolve ("Hello")
}

//works, returns a list of ids of a nodelist
function get_node_ids(node_list){
    return_list=[];
    node_list.forEach(node => return_list.push(node.id));
    return return_list;
}

//works raturns a list of objects with pairs of id and values
function get_node_ids_and_values(node_list){
    return_list=[];
    
    node_list.forEach(node => {
        node_object={}
        node_object["id"]=node.id
        node_object["value"]=node.value
        return_list.push(node_object)});
    return return_list;
}

//works makes un object that contains all the info of a container paragraph. can be stringified
function get_container_paragraph_representation_object(
    title_paragraph_node,
    container_node_list){
        return_object={};
        return_object["title_paragraph"]={
        "id":title_paragraph_node.id,
         "innerHTML":title_paragraph_node.innerHTML}
        return_object["container_input_id_and_value_pairs"]=get_node_ids_and_values(container_node_list);
        return return_object;
     }

     
/*
fetch("./test_obj.json")
    .then(response => response.json())
    .then(json => console.log(json))*/