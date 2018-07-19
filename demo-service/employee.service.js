var express = require('express');
var morgan = require('morgan');
var models = require('express-cassandra');
var faker = require('faker');
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:9000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var debug = require('debug')('http')
  , name = 'Lloyds POC';

var app = express();
models.setDirectory(__dirname + '/models').bind({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: {
      port: 9042
    },
    keyspace: 'mykeyspace',
    queryOptions: {
      consistency: models.consistencies.one
    }
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe'
  }
},
  function (err) {
    if (err) throw err;
  }
);



app.use(morgan('combined'));

/** Get All Employee List **/
app.get('/customers', cors(corsOptions), (req, res) => {
  models.instance.Customer.find({$limit: 10},
    function (err, respEmployee) {
      if (err) {
        console.log(err);
        return;
      }else{
      console.log('List Size ' + respEmployee.length);
      res.json(respEmployee);
      }
    });

});


app.get('/_customer/:firstName',  cors(corsOptions), (req, res) => {
  console.log(req.params);
  models.instance.Customer.findOne(req.params,
    function(err, respEmployee) {

      if(!respEmployee) return;
      if (err) {
        console.log(err);
        return;
      }else{
      console.log('Found ' + respEmployee.firstName + ' to be ' + respEmployee
        .age +
        ' years old!');
        res.json(respEmployee);
      }
    });

});





app.get('/getcustomers', cors(corsOptions), (req, res) => {
  let start = new Date();
  models.instance.Customer.findAsync({$limit: 100})
  .then((r) =>{
    let duration = new Date().getTime() - start.getTime();
    debug(r.length + ' retrieved in ' + duration + ' ms')
    res.json(r);
  })
  .catch((err)=> {res.status(500)});
});


app.get('/customer/:firstName', cors(corsOptions), (req, res) => {
  let start = new Date();
  models.instance.Customer.findOneAsync(req.params)
  .then((r) =>{
    if(!r){res.json({})} 
    let duration = new Date().getTime() - start.getTime();
    debug('Record retrieved in ' + duration + ' ms')
    res.json(r);
  })
  .catch((err)=> {res.status(500)});
});


app.listen(3000, function () {
  debug(name, ' started...');
  console.log('server started');
});
