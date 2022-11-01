const request =require('request')
const chalk =require('chalk')
const forecast=require('./utils/forecast')
const geocoding=require('./utils/mapbox')


const address=process.argv[2]

if(address){
    
    geocoding(address,(err,{lattitude,longitude,location})=>{
        if(err){
          return console.log(err)
        }
       forecast(lattitude,longitude,(err,forecastData)=>{
           if(err){
               console.log(err)
           }
           console.log(location)
           console.log(forecastData);
       })
    })

}else{
    console.log("please enter valid input");
}
