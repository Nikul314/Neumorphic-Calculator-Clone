const input = document.getElementById('input')
const ac = document.getElementById('ac')
const del = document.getElementById('del')
const solve = document.getElementById('equal')
const per = document.getElementById('percentage')

// Shows values in input
function display(val){
    input.value += val
    return val
}

//To find percentage 
per.onclick = () =>{
    input.value = input.value/100
}

// To clear all input values
ac.onclick = () =>{
    input.value = ''
}

// To delete input values one by one
del.onclick = () =>{
    input.value = input.value.slice(0,-1)
}

// On click equal to will solve the equation in input
solve.onclick = () =>{ 
    const x = input.value
    const y = eval(x);
    input.value = y
}