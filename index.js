


document.getElementById("btnRegistrar").addEventListener("click",function(){

    /*Nombre*/
    var txtnombre = document.getElementById("txtNombre");
    if(txtnombre.value == "")
    {
        swal({
                title:"Error",
                text:"Debe ingresar el nombre",
                icon:"error",
            }).then((value) => {
                txtnombre.focus();
            });                
        return;
    }

    /*Apellido*/
    var txtapellido = document.getElementById("txtApellido");

    if(txtapellido.value == "")
    {
        swal({
                title:"Error",
                text:"Debe ingresar el apellido",
                icon:"error",
            }).then((value) => {
                txtapellido.focus();
            });                
        return;
    } 

    /*Email*/
    var txtemail = document.getElementById("txtEmail");
    if(txtemail.value == "")
    {
        swal({
                title:"Error",
                text:"Debe ingresar el Email",
                icon:"error",
            }).then((value) => {
                txtemail.focus();
            });                
        return;
    } 

    /*Validar Modalidad de Cursado*/

    var radios = document.getElementsByName("Modalidad");
    var radioSelect = false;

    for(var i = 0; i < radios.length; i++)
    {
        if(radios[i].checked)
        {
            radioSelect = true;
            break;
        }
           
    }

    if(!radioSelect)
    {
        swal({
                title:"Error",
                text:"Debe seleccionar una modalidad",
                icon:"error",
            });                
        return;
    }   
    /*FIN Validar Modalidad de Cursado*/


    /*Nro Telefono*/

    var codArea = document.getElementById("ddlCodArea");
    var textCodArea = codArea.options[codArea.value].text;

    var nrowsp = document.getElementById("txtNroContacto");
    if(nrowsp.value == "")
    {
        swal({
                title:"Error",
                text:"Debe ingresar el nro de teléfono",
                icon:"error",
            }).then((value) => {
                nrowsp.focus();
            });                
        return;
    } 


    var lengthNum = textCodArea.length + nrowsp.value.length;
    if(lengthNum != 10)
    {
        swal({
                title:"Error",
                text:"Debe ingresar un nro de teléfono válido",
                icon:"error",
            }).then((value) => {
                nrowsp.focus();
            });                
        return;
               
    }

    var cursoSelected = document.getElementById("ddlCursos");

    if(cursoSelected.value == "0")
    {
        swal({
                title:"Error",
                text:"Debe seleccionar un curso",
                icon:"error",
            }).then((value) => {
                nrowsp.focus();
            });                
        return;
               
    }

    var cursoSelectedText = cursoSelected.options[cursoSelected.value].text;

    swal({
        title:"Éxito",
        text: "Usted se registro correctamente en el curso de \"" + cursoSelectedText + "\"",
        icon:"success",
    });

    txtnombre.value = "";
    txtapellido.value = "";
    txtemail.value = "";
    for(var i = 0;i < radios.length;i++)
    {
        radios[i].checked = false;
    }
    codArea.value = "0";
    nrowsp.value = "";
    cursoSelected.value = "0";



});

