function convert()
{
    let toValue = document.getElementById("toUnit")
    const toUnit = toValue.value;
    let fromValue = document.getElementById("fromUnit")
    const fromUnit = fromValue.value;
    let num = document.getElementById("inputValue").value
    console.log(toUnit)
    console.log(fromUnit)
    console.log(num)

    let resultInMeters = convertUnit(Number(num), fromUnit)
    
    let finalResult = convertFromMeters(Number(resultInMeters), toUnit)

    document.getElementById("result").innerHTML = num + " " + fromUnit + " = " + finalResult + " " + toUnit
}
function convertUnit(num, fromUnit){
    console.log(num)
    // if(fromValue === "kilometers" && toValue === "meters"){
    //     num * 1000
        if(fromUnit === "kilometers"){
            return num / 1000;
        }
        if(fromUnit === "centimeters"){
           return  num * 100;
        }
        if(fromUnit === "feet"){
            return num / 3.28
        }
        if(fromUnit === "inches"){
            return num / 39.3701
        }
        return num 
}
function convertFromMeters(meters, toUnit){
    if(toUnit === "kilometers"){
        return meters / 1000
    }
    if(toUnit === "centimeters"){
        return meters * 100
    }
    if(toUnit === "feet"){
        return meters * 3.28
    }
    if(toUnit === "inches"){
        return meters * 39.3701
    }
    return meters
}