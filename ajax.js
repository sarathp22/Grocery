function ajax()
{
//creating an xhr object
var xhttp=new XMLHttpRequest();
//event llistner
xhttp.onreadystatechange=function(){
    //condition
    if(this.readyState==4 && this.status==200)
    {
        // document.getElementById("demo").innerHTML=this.responseText;
        var response=JSON.parse(this.responseText);
        // console.log(response);
        var jpeople=response.grocery;
        // var output="";
        // for(var i=0;i<jpeople.length;i++)
        // {
        //     output+="<li>" +jpeople[i].name + "</li>";
        // }
        
        document.getElementById("tab").innerHTML="<table border=2px solid black class='table' id='t1'><tr id='t2'><th>Serial Number</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr><tr><td id='a1'></td><td id='a2'></td><td id='a3'></td><td id='a4'></td><td id='a5'></td><td id='a6'></td></tr><tr><td id='b1'></td><td id='b2'></td><td id='b3'></td><td id='b4'></td><td id='b5'></td><td id='b6'></td></tr><tr><td id='c1'></td><td id='c2'></td><td id='c3'></td><td id='c4'></td><td id='c5'></td><td id='c6'></td></tr><tr><td id='d1'></td><td id='d2'></td><td id='d3'></td><td id='d4'></td><td id='d5'></td><td id='d6'></td></tr><tr><td id='e1'></td><td id='e2'></td><td id='e3'></td><td id='e4'></td><td id='e5'></td><td id='e6'></td></tr><tr><td id='f1'></td><td id='f2'></td><td id='f3'></td><td id='f4'></td><td id='f5'></td><td id='f6'></td></tr><tr><td id='g1'></td><td id='g2'></td><td id='g3'></td><td id='g4'></td><td id='g5'></td><td id='g6'></td></tr><tr><td id='h1'></td><td id='h2'></td><td id='h3'></td><td id='h4'></td><td id='h5'></td><td id='h6'></td></tr><tr><td id='i1'></td><td id='i2'></td><td id='i3'></td><td id='i4'></td><td id='i5'></td><td id='i6'></td></tr><tr><td id='j1'></td><td id='j2'></td><td id='j3'></td><td id='j4'></td><td id='j5'></td><td id='j6'></td></tr></table>";
        document.getElementById("a1").innerHTML=jpeople[0].SerialNumber;
        document.getElementById("a2").innerHTML=jpeople[0].Name;
        document.getElementById("a3").innerHTML=jpeople[0].Quality;
        document.getElementById("a4").innerHTML=jpeople[0].Unit;
        document.getElementById("a5").innerHTML=jpeople[0].Department;
        document.getElementById("a6").innerHTML=jpeople[0].Notes;

        document.getElementById("b1").innerHTML=jpeople[1].SerialNumber;
        document.getElementById("b2").innerHTML=jpeople[1].Name;
        document.getElementById("b3").innerHTML=jpeople[1].Quality;
        document.getElementById("b4").innerHTML=jpeople[1].Unit;
        document.getElementById("b5").innerHTML=jpeople[1].Department;
        document.getElementById("b6").innerHTML=jpeople[1].Notes;

        document.getElementById("c1").innerHTML=jpeople[2].SerialNumber;
        document.getElementById("c2").innerHTML=jpeople[2].Name;
        document.getElementById("c3").innerHTML=jpeople[2].Quality;
        document.getElementById("c4").innerHTML=jpeople[2].Unit;
        document.getElementById("c5").innerHTML=jpeople[2].Department;
        document.getElementById("c6").innerHTML=jpeople[2].Notes;

        document.getElementById("d1").innerHTML=jpeople[3].SerialNumber;
        document.getElementById("d2").innerHTML=jpeople[3].Name;
        document.getElementById("d3").innerHTML=jpeople[3].Quality;
        document.getElementById("d4").innerHTML=jpeople[3].Unit;
        document.getElementById("d5").innerHTML=jpeople[3].Department;
        document.getElementById("d6").innerHTML=jpeople[3].Notes;

        document.getElementById("e1").innerHTML=jpeople[4].SerialNumber;
        document.getElementById("e2").innerHTML=jpeople[4].Name;
        document.getElementById("e3").innerHTML=jpeople[4].Quality;
        document.getElementById("e4").innerHTML=jpeople[4].Unit;
        document.getElementById("e5").innerHTML=jpeople[4].Department;
        document.getElementById("e6").innerHTML=jpeople[4].Notes;

        document.getElementById("f1").innerHTML=jpeople[5].SerialNumber;
        document.getElementById("f2").innerHTML=jpeople[5].Name;
        document.getElementById("f3").innerHTML=jpeople[5].Quality;
        document.getElementById("f4").innerHTML=jpeople[5].Unit;
        document.getElementById("f5").innerHTML=jpeople[5].Department;
        document.getElementById("f6").innerHTML=jpeople[5].Notes;

        document.getElementById("g1").innerHTML=jpeople[6].SerialNumber;
        document.getElementById("g2").innerHTML=jpeople[6].Name;
        document.getElementById("g3").innerHTML=jpeople[6].Quality;
        document.getElementById("g4").innerHTML=jpeople[6].Unit;
        document.getElementById("g5").innerHTML=jpeople[6].Department;
        document.getElementById("g6").innerHTML=jpeople[6].Notes;

        document.getElementById("h1").innerHTML=jpeople[7].SerialNumber;
        document.getElementById("h2").innerHTML=jpeople[7].Name;
        document.getElementById("h3").innerHTML=jpeople[7].Quality;
        document.getElementById("h4").innerHTML=jpeople[7].Unit;
        document.getElementById("h5").innerHTML=jpeople[7].Department;
        document.getElementById("h6").innerHTML=jpeople[7].Notes;

        document.getElementById("i1").innerHTML=jpeople[8].SerialNumber;
        document.getElementById("i2").innerHTML=jpeople[8].Name;
        document.getElementById("i3").innerHTML=jpeople[8].Quality;
        document.getElementById("i4").innerHTML=jpeople[8].Unit;
        document.getElementById("i5").innerHTML=jpeople[8].Department;
        document.getElementById("i6").innerHTML=jpeople[8].Notes;

        document.getElementById("j1").innerHTML=jpeople[9].SerialNumber;
        document.getElementById("j2").innerHTML=jpeople[9].Name;
        document.getElementById("j3").innerHTML=jpeople[9].Quality;
        document.getElementById("j4").innerHTML=jpeople[9].Unit;
        document.getElementById("j5").innerHTML=jpeople[9].Department;
        document.getElementById("j6").innerHTML=jpeople[9].Notes;
    }

};
// xhttp.open("GET","ajax.txt",true);
xhttp.open("GET","grocery.json",true);
xhttp.send();
}