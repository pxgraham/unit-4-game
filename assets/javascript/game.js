$(document).ready(function() {                      //when document loads

    var score = 0;                                      //stores current score
    var loses = 0;                                      //stores your loses
    var wins = 0;                                       //stores your wins
    var target = Math.floor(Math.random() * 90 + 10);   //random target
    $('#target').text(target);                          //random target number displays in target ID
    var g1 = Math.floor(Math.random() * 9 + 2);         //stores hidden value for btn 1
    var g2 = Math.floor(Math.random() * 9 + 2);         //stores hidden value for btn 2
    var g3 = Math.floor(Math.random() * 9 + 2);         //stores hidden value for btn 3
    var g4 = Math.floor(Math.random() * 9 + 2);         //stores hidden value for btn 4
    
        $('#first').on('click', function() {            //when the first btn is clicked
            score += g1;                                //add hidden value 1 to score
            reset();                                    //reset function only does something if you win or lose. otherwise does nothing
            $('#score').text(score);                    //updated score displays to score ID
        });                                           
        $('#second').on('click', function() {           //when second btn is clicked
            score += g2;                                //add hidden value 2 to score
            reset();                                    //reset function only does something if you win or lose. otherwise does nothing
            $('#score').text(score);                    //updated score displays to score ID
        });
        $('#third').on('click', function() {            //when third btn is clicked       
            score += g3;                                //add hidden value 3 to score
            reset();                                    //reset function only does something if you win or lose. otherwise does nothing
            $('#score').text(score);                    //updated score displays to score ID
        });
        $('#fourth').on('click', function() {           //when fourth btn is clicked
            score += g4;                                //add hidden value to score
            reset();                                    //reset function only does something if you win or lose. otherwise does nothing
            $('#score').text(score);                    //updated score displays to score ID
        });
    
        function reset() {                              //reset function only does something if you win or lose. otherwise does nothing
            if(score > target) {                        //if your score goes over the target, you lose
                loses += 1;                             //add 1 to loses variable
                $('#loses').text(loses);                //display amount of losses to loses ID
                target = Math.floor(Math.random() * 90 + 10);   //give target a new random value
                score = 0;                              //reset score to 0
                $('#target').text(target);              //display new target amount to target ID
                $('#score').text(score);                //display 0 to score
                g1 = Math.floor(Math.random() * 9 + 2); //new random val for btn 1
                g2 = Math.floor(Math.random() * 9 + 2); //new random val for btn 2
                g3 = Math.floor(Math.random() * 9 + 2); //new random val for btn 3
                g4 = Math.floor(Math.random() * 9 + 2); //new random val for btn 4
            } 
            if(score === target) {                      //if score matches the target, you win(everything else is exactly the same as losing, except for adding 1 to wins instead of losses)
                wins += 1;                             
                $('#wins').text(wins);                 
                target = Math.floor(Math.random() * 90 + 10); 
                score = 0;                              
                $('#target').text(target);              
                $('#score').text(score);
                g1 = Math.floor(Math.random() * 9 + 2);
                g2 = Math.floor(Math.random() * 9 + 2);
                g3 = Math.floor(Math.random() * 9 + 2);
                g4 = Math.floor(Math.random() * 9 + 2); 
            }
        }
    });   