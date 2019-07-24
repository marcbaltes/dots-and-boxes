/* NOT NEEDED
   I included this file in the folder so I can see how much percent of the 
   repo uses JS. Without this file GitHub thinks the whole game is written
   in HTML when in reality it's really just a big <script> element. This 
   file can be disregarded when it comes to gameplay.
*/
// global rows
var row0 = [];
var row1 = [];
var row2 = [];

// main class
// keeps track of game state

// ADDING MORE ROWS
// 1. add global row(n) variable
// 2. add for loop for the row in the Game's render() function and add it to a <div> in the return() statement
// 3. add for loop for the row in updateHorizontalLines() and updateVerticalLines()
// 4. add for loop for the row in updateBoxesHorizontal() and updateBoxesVertical()
// 5. last row should have className = "border-row-bottom" in the Game's render() function
class Board extends React.Component {
   state = {
      player: 0,
      x: 0,
      y: 0,
      dot1: [0, 0],
      dot2: [0, 0],
      dotsClicked: 0,
      redBoxes: 0,
      blueBoxes: 0,
      generateBoard: true
   };

   checkFromRight = (j, k) => {
      var boxMade = false;
      var lines = 2;
      // check up-left and down-left lines
      var upId = j + " " + k + " " + (k+1);
      var topLine = document.getElementById(upId);
      if(topLine != null && topLine.className != "line-hor"){
         lines++;
      }
      var botId = (j+1) + " " + k + " " + (k+1);
      var botLine = document.getElementById(botId);
      if(botLine != null && botLine.className != "line-hor"){
         lines++;
      }

      // box id: row(up), index
      if(lines == 4){
         boxMade = true;
         var boxId = j + " " + k;
         this.updateBoxesVertical(j, boxId);

         
      }
      return boxMade;
   }

   checkFromLeft = (j, k) => {
      var boxMade = false;
      var lines = 2;
      // check up-right and down-right lines
      var upId = j + " " + (k-1) + " " + k;
      var topLine = document.getElementById(upId);
      if(topLine != null && topLine.className != "line-hor"){
         lines++;
      }
      var botId = (j+1) + " " + (k-1) + " " + k;
      var botLine = document.getElementById(botId);
      if(botLine != null && botLine.className != "line-hor"){
         lines++;
      }

      // box id: row(up), index
      if(lines == 4){
         boxMade = true;
         var boxId = j + " " + (k-1);
         this.updateBoxesVertical(j, boxId);
      }
      return boxMade;
   }

   updateBoxesVertical = (j, boxId) => {
      // boxes are in rows: row - 1
      // row 1 boxes
      if(j == 0){
         // red player
         if(this.state.player % 2 == 0){
            for(var i = 0; i < row1.length; i++){
               if(row1[i].props.id == boxId){
                  row1[i] = <span className="square-red" id={boxId}></span>
                  this.setState({redBoxes: this.state.redBoxes+1})
               }
            }
         }

         // blue player
         else{
            for(var i = 0; i < row1.length; i++){
               if(row1[i].props.id == boxId){
                  row1[i] = <span className="square-blue" id={boxId}></span>
                  this.setState({blueBoxes: this.state.blueBoxes+1})
               }
            }
         }
      }

      // row 2 boxes
      if(j == 1){
         // red player
         if(this.state.player % 2 == 0){
            for(var i = 0; i < row2.length; i++){
               if(row2[i].props.id == boxId){
                  row2[i] = <span className="square-red" id={boxId}></span>
                  this.setState({redBoxes: this.state.redBoxes+1})
               }
            }
         }

         // blue player
         else{
            for(var i = 0; i < row2.length; i++){
               if(row2[i].props.id == boxId){
                  row2[i] = <span className="square-blue" id={boxId}></span>
                  this.setState({blueBoxes: this.state.blueBoxes+1})
               }
            }
         }
      }
   }

   checkFromAbove = (j, k) => {
      var lines = 2;
      var boxMade = false;

      // check top-left and top-right lines
      var tLeftId = (j-1) + " " + j + " " + (k-1) + " v";
      var tRightId = (j-1) + " " + j + " " + k + " v";
      var tLeftLine = document.getElementById(tLeftId);
      var tRightLine = document.getElementById(tRightId);

      if(tLeftLine != null && tLeftLine.className != "line-ver"){
         lines++;
      }
      if(tRightLine != null && tRightLine.className != "line-ver"){
         lines++;
      }

      if(lines == 4){
         boxMade = true;
         var boxId = (j-1) + " " + (k-1);
         this.updateBoxesHorizontal((j-1), boxId)
      }
      return boxMade;
   }

   checkFromBelow = (j, k) => {
      var lines = 2;
      var boxMade = false;

      // check bottom-left and bottom-right lines
      var bLeftId = j + " " + (j+1) + " " + (k-1) + " v";
      var bRightId = j + " " + (j+1) + " " + k + " v";
      var bLeftLine = document.getElementById(bLeftId);
      var bRightLine = document.getElementById(bRightId);

      if(bLeftLine != null && bLeftLine.className != "line-ver"){
         lines++;
      }
      if(bRightLine != null && bRightLine.className != "line-ver"){
         lines++;
      }

      if(lines == 4){
         boxMade = true;
         var boxId = j + " " + (k-1);
         this.updateBoxesHorizontal(j, boxId);
         
      }
      return boxMade;
   }

   updateBoxesHorizontal = (j, boxId) => {
      // boxes are in rows: row - 1
      // row 1 boxes
      if(j == 0){
         // red player
         if(this.state.player % 2 == 0){
            for(var i = 0; i < row1.length; i++){
               if(row1[i].props.id == boxId){
                  row1[i] = <span className="square-red" id={boxId}></span>
                  this.setState({redBoxes: this.state.redBoxes+1})
               }
            }
         }

         // blue player
         else{
            for(var i = 0; i < row1.length; i++){
               if(row1[i].props.id == boxId){
                  row1[i] = <span className="square-blue" id={boxId}></span>
                  this.setState({blueBoxes: this.state.blueBoxes+1})
               }
            }
         }
      }

      // row 2 boxes
      if(j == 1){
         // red player
         if(this.state.player % 2 == 0){
            for(var i = 0; i < row2.length; i++){
               if(row2[i].props.id == boxId){
                  row2[i] = <span className="square-red" id={boxId}></span>
                  this.setState({redBoxes: this.state.redBoxes+1})
               }
            }
         }

         // blue player
         else{
            for(var i = 0; i < row2.length; i++){
               if(row2[i].props.id == boxId){
                  row2[i] = <span className="square-blue" id={boxId}></span>
                  this.setState({blueBoxes: this.state.blueBoxes+1})
               }
            }
         }
      }
   }

   updateHorizontalLines = (row, id) => {
      // update red rows
      if(this.state.player%2 == 0){
         if(row == "0"){
            for(var y = 0; y < row0.length; y++){ 
               if(row0[y].props.id == id){
                  row0[y] = <span className="line-hor-red" id={id}></span>
               }
            }
         }
         if(row == "1"){
            for(var y = 0; y < row1.length; y++){ 
               if(row1[y].props.id == id){
                  row1[y] = <span className="line-hor-red" id={id}></span>
               }
            }
         }
         if(row == "2"){
            for(var y = 0; y < row2.length; y++){ 
               if(row2[y].props.id == id){
                  row2[y] = <span className="line-hor-red" id={id}></span>
               }
            }
         }
      }

      // update blue rows
      else{
         if(row == "0"){
            for(var y = 0; y < row0.length; y++){ 
               if(row0[y].props.id == id){
                  row0[y] = <span className="line-hor-blue" id={id}></span>
               }
            }
         }
         if(row == "1"){
            for(var y = 0; y < row1.length; y++){ 
               if(row1[y].props.id == id){
                  row1[y] = <span className="line-hor-blue" id={id}></span>
               }
            }
         }
         if(row == "2"){
            for(var y = 0; y < row2.length; y++){ 
               if(row2[y].props.id == id){
                  row2[y] = <span className="line-hor-blue" id={id}></span>
               }
            }
         }
      }
   }

   updateVerticalLines = (row, id) => {
      // update red rows
      if(this.state.player%2 == 0){
         if(row == "1"){
            for(var y = 0; y < row1.length; y++){ 
               if(row1[y].props.id == id){
                  row1[y] = <span className="line-ver-red" id={id}></span>
               }
            }
         }
         if(row == "2"){
            for(var y = 0; y < row2.length; y++){ 
               if(row2[y].props.id == id){
                  row2[y] = <span className="line-ver-red" id={id}></span>
               }
            }
         }
      }

      // update blue rows
      else{
         if(row == "1"){
            for(var y = 0; y < row1.length; y++){ 
               if(row1[y].props.id == id){
                  row1[y] = <span className="line-ver-blue" id={id}></span>
               }
            }
         }
         if(row == "2"){
            for(var y = 0; y < row2.length; y++){ 
               if(row2[y].props.id == id){
                  row2[y] = <span className="line-ver-blue" id={id}></span>
               }
            }
         }
      }
   }


   handleDotClick = (e) => {
      // dot1
      if(this.state.dotsClicked == 0){
         this.setState({dotsClicked: 1});
         this.setState({dot1: [e.target.attributes.x.nodeValue, e.target.attributes.y.nodeValue]});
         e.target.className = "dot-white";
         e.target.id = "selected";
      }
      // dot2
      else if(this.state.dotsClicked == 1){
         // unselect dot if pressed again
         if(e.target.className == "dot-white"){
            this.setState({dotsClicked: 0});
            e.target.id = "";
            e.target.className = "dot";
         }

         // coords
         var h, v, legalMove = false;
         var y1 = parseInt(this.state.dot1[1], 10);
         var y2 = parseInt(e.target.attributes.y.nodeValue, 10);
         var x1 = parseInt(this.state.dot1[0], 10);
         var x2 = parseInt(e.target.attributes.x.nodeValue, 10);
         var lineId = "";

         // check if horizontal move
         if(y1 == (y2 + 1) || y1 == (y2 - 1)){
            // check diagonal
            if(x1 == x2){
               h = true;
            }
         }

         // check vertical move
         if(x1 == (x2 + 1) || x1 == (x2 - 1)){
            if(y1 == y2){
               v = true;
            }
            
         }

         // find corresponding horizontal line
         if(h == true){
            var row = this.state.dot1[0];
            if(y1 > y2){   // left dot comes first
               var tmp = y1;
               y1 = y2;
               y2 = tmp;
            }
            y1 = y1.toString();
            y2 = y2.toString();
            var id = row + " " + y1 + " " + y2;
            lineId = id;
            var line = document.getElementById(id);
            if(line.className == "line-hor"){
               legalMove = true;
            }

            if(legalMove){
               this.updateHorizontalLines(row, id);
            }
         }

         // find corresponding vertical line
         if(v == true){
            var index = e.target.attributes.y.nodeValue;
            if(x1 > x2){   // upper row comes first
               var tmp = x1;
               x1 = x2;
               x2 = tmp;
            }
            x1 = x1.toString();
            x2 = x2.toString();
            var id = x1 + " " + x2 + " " + index + " v";
            lineId = id;
            var line = document.getElementById(id);
            if(line.className == "line-ver"){
               legalMove = true;
            }
            var row = x2;
            
            if(legalMove){
               this.updateVerticalLines(row, id);
            }
         }

         // check if box made
         if(legalMove){
            // check verticals to the left and right
            var boxMade = false;
            var id = lineId;
            lineId = lineId.split(" ");
            var a = lineId[0];
            var b = lineId[1];
            var c = lineId[2];
            var d = lineId[3];

            // vertical lines:
            // a: row(up), b: row(down), c: index, d: indicator
            // check left vertical and right vertical lines first

            // horizontal lines:
            // a: row, b: y2, c: y1, d: undef
            // check square id: row, dot1
            var i = parseInt(c, 10);
            var j = parseInt(a, 10);
            var rightId = a + " " + b + " " + (i+1) + " v";
            var leftId = a + " " + b + " " + (i-1) + " v";
            var topId = (j-1) + " " + b + " " + c;
            var belowId = (j+1) + " " + b + " " + c;
            var rightLine = document.getElementById(rightId);
            var leftLine = document.getElementById(leftId);
            var aboveLine = document.getElementById(topId);
            var belowLine = document.getElementById(belowId);
            
            // vertical line placed
            if(id.includes("v")){
               var j = parseInt(a, 10);
               var k = parseInt(c, 10);
               var rightBox = false;
               var leftBox = false;

               // box only has a line on the right
               if((rightLine != null && rightLine.className != "line-ver") && (leftLine == null || leftLine.className == "line-ver")){
                  rightBox = this.checkFromRight(j, k);
               }

               // box only has a line on the left
               else if((leftLine != null && leftLine.className != "line-ver") && (rightLine == null || rightLine.className == "line-ver")){
                  leftBox = this.checkFromLeft(j, k);
               }

               // box has a line on the left and the right
               else if(leftLine != null && rightLine != null && leftLine.className != "line-ver" && rightLine.className != "line-ver"){
                  rightBox = this.checkFromRight(j, k);
                  leftBox = this.checkFromLeft(j, k); 
               }

               // check for double boxes
               if(leftBox && rightBox){
                  if(this.state.player % 2 == 0){
                     this.setState({redBoxes: this.state.redBoxes+2})
                  }
                  else{
                     this.setState({blueBoxes: this.state.blueBoxes+2})
                  }
               }
            }

            // horizontal line placed
            else{
               var j = parseInt(a, 10);
               var k = parseInt(c, 10);
               var topBox = false;
               var botBox = false;

               // box only as a line above it
               if((aboveLine != null && aboveLine.className != "line-hor") && (belowLine == null || belowLine.className == "line-hor")){
                  topBox = this.checkFromAbove(j, k);
               }

               // box only as a line below it
               else if((belowLine != null && belowLine.className != "line-hor") && (aboveLine == null || aboveLine.className == "line-hor")){
                  botBox = this.checkFromBelow(j, k);
               }

               // box has lines below and above it
               else if(aboveLine != null && belowLine != null && aboveLine.className != "line-hor" && belowLine.className != "line-hor"){
                  topBox = this.checkFromAbove(j, k);
                  botBox = this.checkFromBelow(j, k);
               }

               // check for double boxes
               if(topBox && botBox){
                  if(this.state.player % 2 == 0){
                     this.setState({redBoxes: this.state.redBoxes+2})
                  }
                  else{
                     this.setState({blueBoxes: this.state.blueBoxes+2})
                  }
               }
            }

            // update selected dot and id
            $("#selected").attr("class", "dot");
            $("#selected").attr("id", "");

            // player moves again if they made a box
            if(!(leftBox || rightBox || topBox || botBox)){
               this.setState({player: this.state.player+1});
            }
            this.setState({dotsClicked: 0});
         }
      }
   }

   render(){
      // first turn, generate board
      if(this.state.generateBoard == true){
         this.setState({generateBoard: false});

         // row 0 (dot, h-line)
         for(var y = 0; y < 13; y++){            
            row0.push(<input type="button" className="dot" onClick={this.handleDotClick} x={0} y={y}/>)
            var id = "0 " + y + " " + (y+1); // row, dot1(left), dot2(right)
            row0.push(<span className="line-hor" id={id}></span>)
         }
         row0.pop();

         // row 1 (dot, v-line, square, h-line)
         for(var y = 0; y < 13; y++){            
            row1.push(<input type="button" className="dot" onClick={this.handleDotClick} x={1} y={y}/>)
            var idV = "0 " + "1 " + y + " v";   // row1(up), row2(down), index, indicator
            row1.push(<span className="line-ver" id={idV}></span>)
            var idS = "0 " + y;  // row-1, index;
            row1.push(<span className="square" id={idS}></span>)
            var idH = "1 " + y + " " + (y+1);   // row, dot1(left), dot2(right)
            row1.push(<span className="line-hor" id={idH}></span>)
         }
         row1.pop();
         row1.pop();

         // row 2 (dot, v-line, square, h-line)
         for(var y = 0; y < 13; y++){            
            row2.push(<input type="button" className="dot" onClick={this.handleDotClick} x={2} y={y}/>)
            var idV = "1 " + "2 " + y + " v";   // row2(up), row2(down), index, indicator
            row2.push(<span className="line-ver" id={idV}></span>)
            var idS = "1 " + y;  // row-1, index;
            row2.push(<span className="square" id={idS}></span>)
            var idH = "2 " + y + " " + (y+1);   // row, dot1(left), dot2(right)
            row2.push(<span className="line-hor" id={idH}></span>)
         }
         row2.pop();
         row2.pop();
      }

      var gameOver = this.checkWinner();
      
      if(!gameOver){
         if(this.state.player % 2 == 0){
            status = "Red's turn"
         }
         else{
            status = "Blue's turn"
         }
      }
      else{
         if(this.state.redBoxes > this.state.blueBoxes){
            status = "Red wins!";
         }
         else if(this.state.redBoxes < this.state.blueBoxes){
            status = "Blue wins!";
         }
         else{
            status = "It's a tie!";
         }
      }


      var redCount = "Red boxes: " + this.state.redBoxes;
      var blueCount = "Blue boxes: " + this.state.blueBoxes;
      return(
         <div>
            <div className="status">{status}</div>
            <div className="board-row-top">{row0}</div>
            <div className="board-row">{row1}</div>
            <div className="board-row">{row2}</div>
            <div className="status">
               <span>{redCount}</span>
               <span>{blueCount}</span>
            </div>
         </div>

      );
   }

   checkWinner = () => {
      // go row by row (start at row 1) and determine if there are
      // any squares that just have the className "square"
      var gameOver = true;

      var checkRow1 = true;
      for(var i = 0; i < row1.length; i++){
         if(row1[i].props.className == "square"){
            checkRow1 = false;
         }
      }

      var checkRow2 = true;
      for(var i = 0; i < row2.length; i++){
         if(row2[i].props.className == "square"){
            checkRow2 = false;
         }
      }
      
      if(!(checkRow1 & checkRow2)){
         gameOver = false;
      }
      return gameOver;
   }
}

// header for game
class Header extends React.Component {
   render(){
      return(
      <div className="header container">Dots and Boxes</div>
      );
   }
}

// main render
class Game extends React.Component {
   render() {
      return (
         <div className="game">
            <div className="game-board">
               <Header />
               <Board />
            </div>
         </div>
      );
   }
}

// ========================================

ReactDOM.render(<Game/>,document.getElementById('game'));