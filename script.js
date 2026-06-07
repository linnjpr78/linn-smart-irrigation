const tempChart = new Chart(
document.getElementById("tempChart"),
{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Temperature",
data:[26,27,28,29,28,27,28]
}]
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
label:"Humidity",
data:[60,63,62,64,65,66,65]
}]
}
}
);
