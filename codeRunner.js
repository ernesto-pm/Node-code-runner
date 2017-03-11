var fs = require('fs');
var exec = require('child_process').exec;
var app = require('express')();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var express = require('express');

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.text());
app.use(express.static(__dirname + '/CodeRunner')); // set the static files location /public/img will be /img for users


app.get('/',function(req,res){
  res.sendFile(__dirname+"/CodeRunner/index.html");
});

app.post('/',function(req,res){
  //console.log(req.body);
  fs.writeFile(__dirname+"/Test.java",req.body,function(err){
    if(err){
      return console.log(err);
    }
    exec('javac test.java',function(error,stdout,stderr){
      //if(error) return res.status(500).send(error);
      if(stdout) console.log(stdout);
      if(stderr) return res.status(500).send(stderr);
      exec('java Test',function(error,stdout,stderr){
        if(error) return res.status(500).send(error);
        if(stdout) res.status(200).send(stdout);
        if(stderr) return res.status(500).send(stderr);
      })
    })

    //console.log("The file was saved!");
  });
  //res.sendFile(__dirname + '/index.html');
});

server.listen(3000);

/*
fs.writeFile(__dirname+"/Test.java","class Test{public static void main(String[] args){System.out.println(\"Hola\");}}",function(err){
  if(err){
    return console.log(err);
  }
  exec('javac test.java',function(error,stdout,stderr){
    if(error) console.log(error);
    if(stdout) console.log(stdout);
    if(stderr) console.log(stderr);
    exec('java Test',function(error,stdout,stderr){
      if(error) console.log(error);
      if(stdout) console.log(stdout);
      if(stderr) console.log(stderr);
    })
  })

  console.log("The file was saved!");
});
*/
