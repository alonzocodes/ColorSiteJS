//create a program that lets users pick a color and it changes the background color of the page.

function myFunction () {
    let color = document.getElementById("myInput").value;
    let userInput = color.toLowerCase();

if (userInput === 'red') {    
    text = 'Do you like Red circles?';//aniamte red circles
}
    else 
        if (userInput === 'blue') {
    text = 'You typed triangles, yes?';
} 
    else 
        if (userInput === 'green') {
    text = 'Like money!';
}
    else 
        if (userInput === 'yellow') {
    text = 'Like the sun!';
}
    else 
        if (userInput === 'purple') {
    text = 'Like the dinosaur';
}
    else 
        if (userInput === 'pink') {
    text = 'Pink is a beautiful color!';
}
    else 
        if (userInput === 'brown') {
    text = 'Brown is a nuetral color!';
}
    else 
        if (userInput === 'black') {
    text = 'Black is one of my favorite colors!';
}
    else 
        if (userInput === 'teal') {
    text = 'Like a blue and green mixed!';
}
    else 
        if (userInput === 'white') {
    text = 'White is a neutral color.';
}
    else 
        if (userInput === 'Orange') {
    text = 'Vitamin C!';
}
    else {
    text = 'Hmm... I dont have that color listed. Sorry';
}
    document.getElementById("demo").innerHTML = text;

}

/* 
## I want this program to allow users to enter a color, and the background and font colors change to that color selected and a predetermined matching color scheme.

## I need to add in the toLowerCase (method?) so users can use lower or uppercase and it still reads.

## I want the enter key to be usable.

## After an input, I want it to reset the input field, and ask the user to enter another color.

## */