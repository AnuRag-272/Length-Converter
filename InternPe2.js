var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue, resultTypeValue;

input.addEventListener('keyup', myResult)
inputType.addEventListener('change', myResult)
resultType.addEventListener('change', myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult() {
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    //for mm to cm
    if (inputTypeValue === 'milimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 0.1

        //for mm to m
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.001

        //for mm to km
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.000001

        //for mm to mm    
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'milimeter') {
        result.value = input.value
    }
    

    //for cm to mm
    if (inputTypeValue === 'centimeter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 10

        //for cm to km
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.00001

        //for cm to m
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.01

        //for cm to cm
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter') {
        result.value = input.value
    }

    //For m to mm
    if (inputTypeValue === 'meter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 1000

        //for m to km
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.001

        //For m to cm
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100

        //For m to m
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
        result.value = input.value
    }

    //for Km to mm
    if (inputTypeValue === 'kilometer' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 1000000

        //for km to m
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 1000

        //for km to cm
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100000

        //for km to km
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer') {
        result.value = input.value
    }

}