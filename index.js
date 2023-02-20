const scoreTxt = document.getElementById("score");
const colorTxt = document.getElementById("color");
const resetBtn = document.getElementById("reset-btn");

const colorTiles = document.querySelectorAll(".color-tile");
console.log(colorTiles)

// step 1 - generate random color
// rgb(red, green, blue) -> 0-255
var color = ``; // template string
let score = 0;

main();

function main() {
    scoreTxt.innerText = `Score: ${score}`;

    let r_value, g_value, b_value;

    r_value = Math.floor(Math.random() * 256);
    g_value = Math.floor(Math.random() * 256);
    b_value = Math.floor(Math.random() * 256);

    color = `rgb(${r_value}, ${g_value}, ${b_value})`;
    colorTxt.innerText = color;
    colorTxt.style.background = color;

    // step - 2, assign the color to one of 4 tiles
    let c_tile = Math.floor(Math.random() * 4);
    colorTiles[c_tile].style.background = color;

    // step 3, Assign colors to other 3 tiles
    colorTiles.forEach(function(tile, index) {
        if(index != c_tile) {
            let r, g, b;

            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);

            tile.style.background = `rgb(${r}, ${g}, ${b})`;
        }
    })
}

// step 4, Make options clickable
colorTiles.forEach((tile) => {
    tile.addEventListener('click', function(e) {
        if(e.target.style.background == color){
            score++;
            main();
        } else {
            scoreTxt.innerText = "GAME OVER!";
        }
    })
})

// step 5, reset btn
resetBtn.onclick = function(){
    score = 0;
    main();
};