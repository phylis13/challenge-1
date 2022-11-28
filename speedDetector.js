function speedDetector (speed) {
  if(speed<=70){
    return "Ok"
}else{
    return "Points:"+((speed-70)/5)
    if((speed-70)/5 >12 )
    return `License suspended`
      }
}
       
console.log(speedDetector(70))
