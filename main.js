const scoreTxt = document.getElementById("score");
const colorTxt = document.getElementById("color");
const resetBtn = document.getElementById("reset-btn");

const colorTiles = document.querySelectorAll(".color-tile");

let color = ``;
let score = 0;

main();

function main() {
    scoreTxt.textContent = `Score: ${score}`;

    let r_value, g_value, b_value = 255;

    r_value = Math.floor(Math.random() * 256);
    g_value = Math.floor(Math.random() * 256);
    b_value = Math.floor(Math.random() * 256);
    
    color = `rgb(${r_value}, ${g_value}, ${b_value})`
    
    changeTxtColor(r_value, g_value, b_value);
    colorTxt.textContent = color;
    colorTxt.style.background = color;
    
    let c_tile = Math.floor(Math.random() * 4);
    
    colorTiles[c_tile].style.background = color;
    
    colorTiles.forEach(function (tile) {
        if(tile.style.background != color) {
            let sub_color = ``;
            let r, g, b = 255;
    
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
    
            sub_color = `rgb(${r}, ${g}, ${b})`;
    
            tile.style.background = sub_color;
        }   
    });
}

colorTiles.forEach(function (tile) {
    tile.addEventListener('click', function(e){
        if(e.target.style.background == color) {
            score++;
            main();
        } else {
            scoreTxt.textContent = 'GAME OVER!';
        }
    });
})

resetBtn.onclick = function() {
    score = 0;
    main();
};

function changeTxtColor(r, g, b) {
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luma < 128) {
        colorTxt.style.color = '#fff';
    } else{
        colorTxt.style.color = '#000';
    }
}