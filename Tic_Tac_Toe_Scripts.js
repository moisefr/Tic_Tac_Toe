/*global document*/
/*global alert*/

//Variables
var turn = -1;
var board = ["", "", "","", "", "","", "", ""];
var placement_val;

//Code goes here

//fucntion definitions
function userinput(clicked_id){
    //Create function for changing pieces in the board
    player_input();
    var counter = 0; 
    for (counter = 0; counter < 9; counter++){
        document.getElementById(clicked_id).innerHTML = placement_val;
        board[clicked_id]= document.getElementById(clicked_id).innerHTML; 
    }
    turn = (-1)*turn;
    gameplay();
}
function player_input(){
    //determine who is playing

    if (turn<0){
        placement_val = "X";
    }
    else if(turn>0) {
        placement_val = "O";
    }
    else{
        return
    }
    
}
function gameplay(){
    //store the board, each three array elements represents a row, switch turns
    var row, col, diag1, diag2, col_c, row_c;
    for (col =0; col<3; col++){
        col_c = board[col]+board[col+3]+board[col+6];
        //column wins
        if(col_c == 'XXX'){
            document.getElementById("test").innerHTML= "Player " + "X"+ " Wins";
        }
        else if(col_c == 'OOO') {
            document.getElementById("test").innerHTML= "Player " + "O"+ " Wins";
        }
    }
    for (row =0; row<7; row = row + 3){
        //row wins
        row_c = board[row]+board[row+1]+board[row+2];
        if(row_c == 'XXX'){
            document.getElementById("test").innerHTML= "Player " + "X"+ " Wins";
        }
        else if(row_c == 'OOO') {
            document.getElementById("test").innerHTML= "Player " + "O"+ " Wins";
        }
    }
        //Diagonal wins
        diag1 = board[0]+board[4]+board[8];
        diag2 = board[2]+board[4]+board[6];
        if(diag1 == 'XXX' || diag2 == 'XXX'){
            document.getElementById("test").innerHTML= "Player " + "X"+ " Wins";
        }
        else if(diag1 == 'OOO' || diag2 == 'OOO') {
            document.getElementById("test").innerHTML= "Player " + "O"+ " Wins";
        }
    
    return;
    
}

//code run here
