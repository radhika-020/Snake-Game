/*This file is created for generating a random number between any given interval for the purpose of generating food for the snake on the screen on the random positions.*/
function randomIntFromInterval(min, max) {
    /* min and max included */
    return Math.floor(Math.random() * (max - min +1) + min);
} 