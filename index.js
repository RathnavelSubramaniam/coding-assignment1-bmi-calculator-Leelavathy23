const express= require('express');
const bodyparser=require('body-parser')

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const port= 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmicalc.html');
  })

   app.post('/', (req,res)=>{
    var name=req.body.Name;
   var heigh = Number(req.body.Height);
   var weigh =Number(req.body.Weight);
     var bmi= weigh/(heigh*heigh);
     if (bmi <19){
    res.send("<h2>Hey! " + name + " your bmi is " + bmi + " <br/> <b>You are underweight!</b>");
     }
     else if(19<=bmi && bmi <25){
        res.send("<h2 >Hey! " + name + " your bmi is " +bmi+ "<br/><b>You are Normalweight!</b>");   
     }
     else if(25<=bmi && bmi <30){
        res.send("<h2>Hey! " + name + " your bmi is " +bmi+  "<br/><b>You are Overweight!</b>");   
     }
     else {
        res.send("<h2>Hey! " + name + " your bmi is " +bmi+ "<br/><b>You are Obese!</b>");   
     }
   })


 
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
