function dateHumanFormat(date){
    let string = date.toISOString().split('T')
    let result = string[0]
    console.log(result);
    return result 
}


module.exports = dateHumanFormat