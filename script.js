const tempChart = new Chart(
document.getElementById("tempChart"),
{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Temperature (°C)",
data:[26,27,28,29,28,27,28],
borderWidth:3,
fill:false
}]
},
options:{
responsive:true
}
}
);

const humidityChart = new Chart(
document.getElementById("humidityChart"),
{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Humidity (%)",
data:[60,63,62,64,65,66,65],
borderWidth:3,
fill:false
}]
},
options:{
responsive:true
}
}
);

document.querySelector(".pump-btn")
.addEventListener("click",function(){

alert("Pump control will be connected to AWS IoT in Version 3.0");

});
