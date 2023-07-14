
function loaduser(){

      var xhr=new XMLHttpRequest();
      xhr.onload=function(){
            if(this.status==200){
                var obj=JSON.parse(this.responseText);
                var output="";

                output+="<center>"+
                "<table border='3'>"+
                "<tr>"+
                "<th>"+"ID"+"</th>"+
                "<th>"+"NAME"+"</th>"+
                "<th>"+"roolno"+"</th>"+
                "</tr>";
                for( var i=0;i<obj.length;i++){
                output+=
                "<tr>"+
                "<td>"+obj[i].id+"</td>"+
                "<td>"+obj[i].name+"</td>"+
                "<td>"+obj[i].roolno+"</td>"+
                "</tr>";
                }
                +"</table>"+"</center>";

                document.write(output);
            }
      }
      xhr.open('GET','http://localhost:8080/restapi/webapi/users',true);
      xhr.send();
}
