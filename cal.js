
function clean()
{
    document.getElementById("screen").value=0;
}
function solve(){
   var input = document.getElementById("screen").value;
   var result = eval(input);
   var input = document.getElementById("screen").value=result;

}
function back()
{
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1);
}