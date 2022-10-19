//create a program that lets users pick a color and it changes the background color of the page.

function myFunction () {
    let color = document.getElementById("myInput").value;
//Add in toLowerCase 
if (color === 'red') {    
    text = 'Thats a great color!';
}
else if (color === 'blue') {
    text = 'That used to be my favorite color too!';
} 
else if (color === 'green') {
    text = 'Like money!';
}
else if (color === 'yellow') {
    text = 'Like the sun!';
}
else if (color === 'purple') {
    text = 'Like the dinosaur';
}
else if (color === 'pink') {
    text = 'Pink is a beautiful color!';
}
else if (color === 'brown') {
    text = 'Brown is a nuetral color!';
}
else if (color === 'black') {
    text = 'Black is one of my favorite colors!';
}
else if (color === 'teal') {
    text = 'Like a blue and green mixed!';
}
else if (color === 'white') {
    text = 'White is a neutral color.';
}
else {
    text = 'Hmm... I dont have that color listed. Sorry';
}
document.getElementById("demo").innerHTML = text;

}

function enterKeyPressed(event) {
    let numKey = color + event.keyCode;
    if (event.keyCode == 13) {
          
            text = 'Thats a great color!';
        }
        else if (color === 'blue') {
            text = 'That used to be my favorite color too!';
        } 
        else if (color === 'green') {
            text = 'Like money!';
        }
        else if (color === 'yellow') {
            text = 'Like the sun!';
        }
        else if (color === 'purple') {
            text = 'Like the dinosaur';
        }
        else if (color === 'pink') {
            text = 'Pink is a beautiful color!';
        }
        else if (color === 'brown') {
            text = 'Brown is a nuetral color!';
        }
        else if (color === 'black') {
            text = 'Black is one of my favorite colors!';
        }
        else if (color === 'teal') {
            text = 'Like a blue and green mixed!';
        }
        else if (color === 'white') {
            text = 'White is a neutral color.';
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