/*global document*/
//Tic_Tac_Toe_JQuery.js
//Variables

var turn = -1;
var board = ["", "", "","", "", "","", "", ""];
var button_id;
function board_turn_set(){
    //Create function for changing pieces in the board
    var counter = 0; 
    for (counter = 0; counter < 9; counter++){
//        board[button_id]= $(this).attr("id"); 
       }
    gameplay();
}

function gameplay(){
    //store the board, each three array elements represents a row, switch turns
    var row, col, diag1, diag2, col_c, row_c;
           //column wins
    for (col =0; col<3; col++){
        col_c = board[col]+board[col+3]+board[col+6];
        (function($){
            $(function(){
                if(col_c == 'XXX'){
                    $("#test").html("Player " + "X"+ " Wins");
                }
                else if(col_c == 'OOO') {
                    $("#test").html("Player " + "O"+ " Wins");
                }
            });
        });
        }
              //row wins
        for (row =0; row<7; row = row + 3){
            row_c = board[row]+board[row+1]+board[row+2];
            (function($){
                $(function(){
                    if(row_c == 'XXX'){
                        $("#test").html("Player " + "X"+ " Wins");
                    }
                    else if(row_c == 'OOO') {
                        $("#test").html("Player " + "O"+ " Wins");
                    }
                });
            });
        }
            //Diagonal wins
            diag1 = board[0]+board[4]+board[8];
            diag2 = board[2]+board[4]+board[6];
            (function($){
                    $(function(){
                        if(diag1 == 'XXX' || diag2 == 'XXX'){
                            $("#test").html("Player " + "X"+ " Wins");
                        }
                        else if(diag1 == 'OOO' || diag2 == 'OOO') {
                            $("#test").html("Player " + "O"+ " Wins");
                        }
                    });
                });
        return;
}

