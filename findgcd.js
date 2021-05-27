//this is only the code for calculating gcd written in javascript
function gcd(a,b){
    if (a==0)
        return b;
    return gcd(b%a,a);

}

//find gcd of number's array
function find(arr,m)
{
    let result = arr[0];
    for (let i =1; i< m; i++)
    {
       result = gcd(arr[i],result);

       if (result ==1)
       {
           return 1;
        }
    }
    return result ;
}

let arr = {};
let n =arr.length;
//document.write(find(arr,n) + "<br>");

