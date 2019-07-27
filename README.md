# ☐ • Dots and Boxes • ☐ 

### Description
- Based off the Dots and Boxes game you can find pretty much anywhere you want to look. Each player takes turns drawing a line and if that player is able to close off the line and make a square the get a point. Doing so will also allow the player to move again. Whoever has the most points when there are no more squares left wins. 
- This game was made using JavaScript (with the React.js and jQuery libraries). However, GitHub says that this repo is all HTML because I put the code in a <script> element so that you can play the game locally without having to set up a server. CSS is also used for styling purposes.
>  Note: The code itself is probably not as optimal as it could be considering that I made it when I had just learned React.js. However, it works so ¯\\‗(ツ)‗/¯
### Setup
- Clone or download this repo and make sure all the files are in the same folder 
- Double click **DotsAndBoxes.html** to open it in your default browser and start the game
### Gameplay
- Each player takes turns clicking two adjacent dots (not diagonally) to form a line. You cannot create a line that has already been made by you or the other player. Additionally, if you click a dot and decide to change your mind, click the dot again and you will be able to click a new starting dot to form a line.
- If that line was the final line to make a square, the square will be filled in with that player's colors and that player will receive a point for that square. This player will also take their turn again. Alternatively, if you happen to form a rectangle using the lines you will fill all the squares contained in the rectangle and receive points for all of them.
- This process repeats until there are no more squares that can be made.
- The winner is determined by the player that has the most squares filled with their color.
