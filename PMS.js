
function getWeather(){
    return new promise(function(resolve, reject){
        resolve("Sunny")
    })
}
const promise= getWeather()
promise.then(function(data){
    console.log(data)
})