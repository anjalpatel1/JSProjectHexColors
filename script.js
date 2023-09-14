function changeColor() {
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"] //creating/implementing an array of hex numbers
    
    var hexcode = '';

    for (var i=0; i<6; i++){
        var random_index = Math.floor(Math.random()* hex_numbers.length); //We use math.floor to round of the integer to the nearest whole number
    
        hexcode += hex_numbers[random_index]
        
        // console.log(Math.random() * hex_numbers.length)  // This means that the length of hex numbers which is 16
    }

    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;


    
}