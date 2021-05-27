var express = require('express')
const app = express()

function findgcd(a,b){
    if (a==0)
    {
        return b; 
    }

    return gcd(b%a,a);
}


//from post
app.post('/find', function(req,res){
    //read num
    var arr = req.bady.numbers
    var leng = arr.length
    result = arr[0];
    for (let i =0; i< leng ; i++)
    {
       result = findgcd(arr[i],result);

       if (result ==1)
       {
           return 1;
        }
    }

    res.send({
        "GCD : " : result 
    })

});


var server = app.listen(8080, function(){
    //var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://localhost:%s", port)
})