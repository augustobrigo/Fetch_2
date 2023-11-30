window.onload=inicio;

function inicio(){
    let btnCargar=document.getElementById("btnMostrar");
    btnCargar.onclick=cargar;
}
function cargar(){
    let tabla=document.getElementById("tabla");
    const url="http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php";
    var headers = {}
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    .then(data => data.json())
    .then(data2 =>{
        console.table(data2);
        crearTabla(data2,tabla)
    })
    .catch(error=> alert (error))
    .finally(alert (()=>"fin de programa"));
}
function crearTabla(datos,tabla){
    console.log(datos,tabla);
   
    for (let valor of datos){
      tabla.innerHTML+=`
      <tr>
       <th>
       ${valor.name}
      </th>
      <th>
       ${valor.price}
      </th>
     <th>
      <img src='${valor.photo}' width="100px" height="80px">
     </th></tr>
      `
    }
}