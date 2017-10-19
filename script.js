
function peticion()
{
     var body = document.body;
    var wrapper = document.querySelector('#wrapper'); 
    var data=null;
    var xHttp=new XMLHttpRequest();
    var parametros= //json
            {
                a: 'Hola mundo',
                b: 'bb'
            };
            
      
          
    xHttp.onreadystatechange= function()
    {
        if ((this.readyState===4)&& (this.status===200))
        {
            data=JSON.parse(xHttp.responseText);
            
            console.log('---->' + data.json);
            
            if ((data.json!==undefined) && (data.json!==null) &&(data.json!==""))
            {
                 body.classList.add('cargado');
                console.log(data.json);
                 wrapper.innerHTML = data.json.a; //Incluye en el div "wrapper" el contenido del
                                                         //atributo "a"
                 
            }
        }
    };
    
    //Apertura, cabecera y envio
    xHttp.open("POST",'otro.php',true);
    xHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xHttp.send(JSON.stringify(parametros));
            
            

}

peticion();