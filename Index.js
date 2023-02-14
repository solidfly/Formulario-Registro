var formulario = document.querySelector ('#formulario');

var nombre = document.querySelector ('#Nombre');
var email = document.querySelector ('#Email');
var clave = document.querySelector ('#Clave');
var confirmacion = document.querySelector ('#Confirmacion');
var email_correcto =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var button = document.querySelector ('#submit');
var a ="";
var b ="";
var c = "";
var d = "";


button.addEventListener('click', (e)=>{
    e.preventDefault();
    validar_nombre(nombre.value, nombre,);
    validar_correro(email.value,email, email_correcto)
    validar_clave(clave.value,clave)
    validar_confirmacion(confirmacion.value, confirmacion, clave.value)
    enviar();
    a =""; b =""; c =""; d =""; 
});


    

function validar_nombre(valueInput, divInput){
    if (valueInput.length == 0){
        divInput.style.border = '3px solid red ';
        document.getElementById("vacio").style.display = 'block';
        document.getElementById("iconError").style.display = 'block';
        document.getElementById("iconSuccess").style.display = 'none';

    } else {
        divInput.style.border = '3px solid green';
        document.getElementById("vacio").style.display = 'none';
        document.getElementById("iconError").style.display = 'none';
        document.getElementById("iconSuccess").style.display = 'block';
         a = 1;
      

          }

      }


        
     



function validar_correro (valueInput, divInput,correctInput){
    if (valueInput.length == 0){
        divInput.style.border = '3px solid red ';
        document.getElementById("vacio_email").style.display = 'block';
        document.getElementById("iconError_email").style.display = 'block';
        document.getElementById("iconSuccess_email").style.display = 'none';

    } else { if (correctInput.test (divInput.value) ) {
        divInput.style.border = '3px solid green';
        document.getElementById("vacio_email").style.display = 'none';
        document.getElementById("iconError_email").style.display = 'none';
        document.getElementById("iconSuccess_email").style.display = 'block';
        document.getElementById("error_correo").style.display = 'none';
        b= 1 ;
        
    }else{ divInput.style.border = '3px solid red ';
    document.getElementById("error_correo").style.display = 'block';
    document.getElementById("iconError_email").style.display = 'block';
    document.getElementById("iconSuccess_email").style.display = 'none';
    document.getElementById("vacio_email").style.display = 'none';

    }
        
        }

}

function validar_clave (valueInput, divInput){
    if (valueInput.length == 0){
        divInput.style.border = '3px solid red ';
        document.getElementById("vacio_clave").style.display = 'block';
        document.getElementById("iconError_clave").style.display = 'block';
        document.getElementById("iconSuccess_clave_apta").style.display = 'none';

    } else { if(valueInput.length>8){
        divInput.style.border = '3px solid red ';
        document.getElementById("error_clave").style.display = 'block';
        document.getElementById("iconError_clave").style.display = 'block';
        document.getElementById("iconSuccess_clave_apta").style.display = 'none';
        document.getElementById("success_clave").style.display= 'none';
     } else{
        divInput.style.border = '3px solid green';
        document.getElementById("vacio_clave").style.display = 'none';
        document.getElementById("iconError_clave").style.display = 'none';
        document.getElementById("iconSuccess_clave_apta").style.display = 'block';
        document.getElementById("error_clave").style.display = 'none';
        document.getElementById("success_clave").style.display= 'block';
        c=1;
      
     } 
    
    }
    
}


function validar_confirmacion (valueInput, divInput, clave1){ 

    if (valueInput.length == 0){
        divInput.style.border = '3px solid red ';
        document.getElementById("vacio_confirmacion").style.display = 'block';
        document.getElementById("iconError_confirmacion").style.display = 'block';
        document.getElementById("iconSuccess_confirmacion").style.display = 'none';
    
    } else{ if(valueInput!=clave1){ 
        divInput.style.border = '3px solid red ';
        document.getElementById("error_confirmacion").style.display = 'block';
        document.getElementById("iconError_confirmacion").style.display = 'block';
     document.getElementById("iconSuccess_confirmacion").style.display = 'none';
     



    }else{
         divInput.style.border = '3px solid green';
        document.getElementById("vacio_confirmacion").style.display = 'none';
        document.getElementById("iconError_confirmacion").style.display = 'none';
        document.getElementById("iconSuccess_confirmacion").style.display = 'block';
        document.getElementById("error_confirmacion").style.display = 'none';
        d=1;
       
    }


    }


}

function enviar(){
    if(a== 1 && b== 1 && c== 1 && d==1)
       alert("correcto")
     }




  





   




   


 
 
 
    
 





    
   
