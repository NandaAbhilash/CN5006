mongoose= require('mongoose')

const MONG_URI= 'mongodb://localhost:27017/Alib'
//const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net/labweek7?retryWrites=true&w=majority'
//const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net/ReplLab?retryWrites=true&w=majority'
mongoose.connect('your_connection_string')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const db= mongoose.connection;
db.on('error',function(err){
console.log('Error occured'+err)

})
db.once('connected',function(){
console.log('connection is successful to'+ MONG_URI)
 
})
module.exports=db 