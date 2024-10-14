let user2 = prompt("Choose One: 'S' , 'W' , 'G'")
let user=user2.toLocaleUpperCase()
let cpu1= Math.floor(Math.random()*3)
let cpu = ['S', 'W', 'G'][cpu1]
const match=(cpu, user)=>{
if(cpu==user){
    return 'Game is tied'
}
else if(cpu=='S'&& user=='W'){
    return 'cpu'
}
else if(cpu=='S'&& user=='G'){
    return 'user'
}
else if(cpu=='G'&& user=='W'){
    return 'user'
}
else if(cpu=='G'&& user=='S'){
    return 'cpu'
}
else if(cpu=='W'&& user=='G'){
    return 'cpu'
}
else if(cpu=='W'&& user=='S'){
    return 'user'
}}
let result = match(cpu,user)
document.write(`'CPU: ' ${cpu} <br> 'USER: ' ${user} <br> The Winner of Game is: ${result}`)
