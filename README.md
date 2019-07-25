# Dots and Boxes
>  Note: I just finished this so it *should* be working. If not let me know, thanks :)

### Description
Based off the Dots and Boxes game you can find pretty much anywhere you want to look. Each player takes turns drawing a line and if that player is able to close off the line and make a square the get a point. Doing so will also allow the player to move again. Whoever has the most points when there are no more squares left wins. This game was made using mostly JavaScript (with the React.js and jQuery libraries). HTML is also used and CSS is used for styling purposes.
>  Note: The code itself is probably not as optimal as it could be considering that I made it when I had just learned React.js. However, it works so ¯\\‗(ツ)‗/¯
### Setup
- Make sure you have Python 3 installed
- Open terminal and navigate to the folder that contains these files 
- In terminal type ```python -m SimpleHTTPServer```. This will start a local server at ```localhost:8000```. If 8000 is unavailable type ```python -m SimpleHTTPServer ####``` where #### is the number of the server
- Type ```localhost:8000``` (or whatever host number you used) into the URL of your browser and then click ```DotsAndBoxes.html``` on that page
### Gameplay
- Each player takes turns clicking two adjacent dots (not diagonally) to form a line. You cannot create a line that has already been made by you or the other player. Additionally, if you click a dot and decide to change your mind, click the dot again and you will be able to click a new starting dot to form a line.
- If that line was the final line to make a square, the square will be filled in with that player's colors and that player will receive a point for that square. This player will also take their turn again. Alternatively, if you happen to form a rectangle using the lines you will fill all the squares contained in the rectangle and receive points for all of them.
- This process repeats until there are no more squares that can be made.
- The winner is determined by the player that has the most squares filled with their color.
