var express = require('express');

var cors = require('cors')
var app = express()
 var fs=require('fs')
app.use(cors())


app.post('/try', function(req, res) {
    


fs.readFile('./text.txt', 'utf-8', (err, file) => {
const lines = file.split('\n')
    

  var1=lines[1]; 
  var2=lines[2]
  console.log("la première ligne c'est la date"+var1);
  console.log("la deuxième ligne c'est le nom de l'entreprise"+var2)

  results={
      first:var1,

    others:var2
}
        res.send(results);

})
  

      
});

app.get('/last', function(req, res) {
    fs.readFile('./contrat.txt', 'utf-8', (err, file) => {
        const lines = file.split('\n')
        
        lines.forEach(function(line) {
          if(line.indexOf('Date') >= 0 || line.indexOf('Entreprise')>= 0){
            fs.appendFile("./text.txt", line+ '\n ',function(err){
              if(err) throw err;
              console.log(line);
              });}
  }

)})
fs.readFile('./text.txt', 'utf-8', (err, file) => {
    const lines = file.split('\n')
        

      var1=lines[1]; 
      var2=lines[2]
      console.log("la première ligne c'est la date"+var1);
      console.log("la deuxième ligne c'est le nom de l'entreprise"+var2)

    

})
      
});
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});
app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
  });