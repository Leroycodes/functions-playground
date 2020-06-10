const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];

function randomColor() {
    //  chose random color from array of colors
    const index = (Math.floor(Math.random() * Math.floor(6)));
    return colors[index];
}

const color = randomColor();

console.log(color);