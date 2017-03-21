var fs = require('fs');
var rl = require('readline');

module.exports = (gameModel)=>{
  //delete previous data first
  gameModel.remove({},function(e,d){
    if(e){
      console.log(e);
    }
    else{
      //pu new data
      var head = true;
      var rlemitter = rl.createInterface({
        input:fs.createReadStream("games.csv"),
        output: fs.createWriteStream("temp.csv")
      });
      var header =[]
      rlemitter.on('line',function(line){
        if(head){
          header = line.split(',');
          head = false;
        }
        else{
          var data = line.split(',');
          var obj = {};
          for (var i = 0; i < data.length; i++) {
            obj[header[i]]=data[i];
          }
          obj = new gameModel(obj);
          obj.save(function(err){
            if(err){
              console.log('CSV Error : '+err);
            }
          });
        }
      });
      rlemitter.on('close',function(){
        console.log('Data from CSV put to Mongo Successfully');
      });
    }
  });
}
