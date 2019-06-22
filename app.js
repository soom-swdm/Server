var express = require('express');
var path = require('path');
var app = express();
var changetier = require('./routes/changetier');
var changeitem = require('./routes/changeitem');
var IsItem = require('./routes/IsItem');
var LogIn = require('./routes/LogIn');
var LogOut = require('./routes/LogOut');
var SignUp = require('./routes/SignUp');
var SeeList = require('./routes/SeeList');
var SeeHistory = require('./routes/SeeHistory');
var UserInform = require('./routes/UserInform');
var Pay = require('./routes/Pay');
app.use(express.json());
app.use('/changetier',changetier);
app.use('/changeitem',changeitem);
app.use('/IsItem', IsItem);
app.use('/LogIn', LogIn);
app.use('/LogOut', LogOut);
app.use('/SignUp', SignUp);
app.use('/SeeList', SeeList);
app.use('/SeeHistory', SeeHistory);
app.use('/UserInform', UserInform);
app.use('/Pay',Pay);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, function() {
  console.log("Connect!");
});
