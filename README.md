# Dots and Boxes

## Progress
-   turn based is working
-   can click to make lines in a horizontal line
-	added second row
-	can make vertical lines
-	base case for making a specific box done
-	added counter for boxes
-   added second case for making boxes with vertical lines
-   styling fixes for the dots
-  cases where box made with vertical line should be finished
-  game playable if only making boxes with vertical line (no winner yet)
-   third row added
-   vertical line boxes added for 3rd row
-   horizontal cases finished
-   code clean up (~200 lines not needed)
-  more code clean up
-  winner algorithm finished
-  styling changes
-  base cases for horizontal rectangles done
-  base cases for vertical rectangles done
-  horizontal rectangle cases finished

## Todo
-  add more rows
-  finish case 3 for vertical rectangles

### Description
Based off the Dots and Boxes game you can find pretty much anywhere you want to look. Each player takes turns drawing a line and if that player is able to close off the line and make a square the get a point. Doing so will also allow the player to move again. Whoever has the most points when there are no more squares left wins. This game was made using mostly JavaScript (with the React.js and jQuery libraries). HTML is also used and CSS is used for styling purposes.
>  Note: The code itself is probably not as optimal as it could be considering that I made it when I had just learned React.js. However, it works so ¯\_(ツ)_/¯
### Setup
All you need to do is clone or download this repo and make sure all the files are in the same folder. Then, double click **DotsAndBoxes.html** to open it and start the game.
### Gameplay
- Each player takes turns clicking two adjacent dots (not diagonally) to form a line. You cannot create a line that has already been made by you or the other player. Additionally, if you click a dot and decide to change your mind, click the dot again and you will be able to click a new starting dot to form a line.
- If that line was the final line to make a square, the square will be filled in with that player's colors and that player will receive a point for that square. This player will also take their turn again. Alternatively, if you happen to form a rectangle using the lines you will fill all the squares contained in the rectangle and receive points for all of them.
- This process repeats until there are no more squares that can be made.
- The winner is determined by the player that has the most squares filled with their color.
