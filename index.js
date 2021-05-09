var fs = require("fs");
let count=0;
let value=0;

fs.readFile("Sample_data.txt", function(err, buf) {
  let data="";
  data=buf.toString();

  let dataTable=data.split("\n")
  for(let i=0;i<dataTable.length;i++){
      let row=dataTable[i].split(" ");
      if(row[1]=="01"){
        count+=1;
        value+=parseInt(row[4],16);
      }
      if(i==dataTable.length-1){
        let avg=Math.floor(value/count);
        console.log(avg.toString(16));
      }
  }

});


