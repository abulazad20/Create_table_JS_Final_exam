// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated

  amount = parseInt( form.elements['deposit'].valueAsNumber);
  rate = parseInt(form.elements['rate'].valueAsNumber);
  years = parseInt(form.elements['years'].valueAsNumber);
  

  // year1


let year1InterestEarned = (amount * rate)/100;
let year1EndingValue = amount +  year1InterestEarned ;
//}
//year2
let year2InterestEarned = (year1EndingValue * rate)/100;
let year2EndingValue = year1EndingValue + year2InterestEarned;

//year3
let year3InterestEarned = (year2EndingValue * rate)/100;
let year3EndingValue = year2EndingValue + year3InterestEarned;

//year4
let year4InterestEarned = (year3EndingValue * rate)/100;
let year4EndingValue = year3EndingValue + year4InterestEarned;

//year5
let year5InterestEarned = (year4EndingValue * rate)/100;
let year5EndingValue = year4EndingValue + year5InterestEarned;

//year6
let year6InterestEarned = (year5EndingValue * rate)/100;
let year6EndingValue = year5EndingValue + year6InterestEarned;

//year7
let year7InterestEarned = (year6EndingValue * rate)/100;
let year7EndingValue = year6EndingValue + year7InterestEarned;


//year8
let year8InterestEarned = (year7EndingValue * rate)/100;
let year8EndingValue = year7EndingValue + year8InterestEarned;

//year9
let year9InterestEarned = (year8EndingValue * rate)/100;
let year9EndingValue = year8EndingValue + year9InterestEarned;
//year10
let year10InterestEarned = (year9EndingValue * rate)/100;
let year10EndingValue = year9EndingValue + year10InterestEarned;

//year11
let year11InterestEarned = (year10EndingValue * rate)/100;
let year11EndingValue = year10EndingValue + year11InterestEarned;

//year12
let year12InterestEarned = (year11EndingValue * rate)/100;
let year12EndingValue = year11EndingValue + year12InterestEarned;

//year13
let year13InterestEarned = (year12EndingValue * rate)/100;
let year13EndingValue = year12EndingValue + year13InterestEarned;


//year14
let year14InterestEarned = (year13EndingValue * rate)/100;
let year14EndingValue = year13EndingValue + year14InterestEarned;

//year15
let year15InterestEarned = (year14EndingValue * rate)/100;
let year15EndingValue = year14EndingValue + year15InterestEarned;

//year16
let year16InterestEarned = (year15EndingValue * rate)/100;
let year16EndingValue = year15EndingValue + year16InterestEarned;


//year17
let year17InterestEarned = (year16EndingValue * rate)/100;
let year17EndingValue = year16EndingValue + year17InterestEarned;


//year18
let year18InterestEarned = (year17EndingValue * rate)/100;
let year18EndingValue = year17EndingValue + year18InterestEarned;

//year19
let year19InterestEarned = (year18EndingValue * rate)/100;
let year19EndingValue = year18EndingValue + year19InterestEarned;

//year20
let year20InterestEarned = (year19EndingValue * rate)/100;
let year20EndingValue = year19EndingValue + year20InterestEarned;


// ---> Write your code here to generate the table and show it in the page
//table =
    //'<table>' +
    //'<tr><th>Year</th><th>Starting Value</th>' +
    //'<th>Interest Earned</th><th>Ending Value</th></tr>';


    if (years == 1){


      document.getElementById("result").innerHTML =table =  
      '<table>' +
      '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
      //year 1
      + 
      '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr></table>';
      
      '<table>'

      }
      
      if (years == 2){
      document.getElementById("result").innerHTML =table =  
      '<table>' +
      '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
       //year 1
      + 
      '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
        //year 2
        + 
        '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr></table>';
        
      '<table>'
      
      }
      if (years == 3){
        document.getElementById("result").innerHTML =table =  
        '<table>' +
        '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
         //year 1
        + 
        '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
          //year 2
          + 
          '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
         
         //year 3
          + 
          '<tr><td>'+2+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr></table>';
          
        '<table>'
      }
        if (years == 4){
          document.getElementById("result").innerHTML =table =  
          '<table>' +
          '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
           //year 1
          + 
          '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
            //year 2
            + 
            '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
           
           //year 3
            + 
            '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
            //year 4
            + 
            '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr></table>';
            
          '<table>'
        }
          if (years == 5){
            document.getElementById("result").innerHTML =table =  
            '<table>' +
            '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
             //year 1
            + 
            '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
              //year 2
              + 
              '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
             
             //year 3
              + 
              '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
              //year 4
              + 
              '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
              
      
                    //year 5
                    + 
                    '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr></table>';
                    
            '<table>'
          }

            if (years == 6){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr>  </table>';
                      
                   
            
                      
              '<table>'

            }

                            
            if (years == 7){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr>  </table>';
             '<table>'     
            }
             if (years == 8){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  </table>';
                 
             '<table>'     
             
             }
                                  
         
             
             if (years == 9){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>  </table>';
                           
             '<table>'   
                              
             }
                      
                             
             if (years == 10){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> </table>';
               
                     
                                                 
             '<table>'   
                              
             } 
                 
             if (years == 11){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>  </table>';
                                                 
             '<table>'   
                              
             } 

             if (years == 12){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr>  </table>';
                                


             '<table>'   
             }
             if (years == 13){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr>  </table>';
                               

             '<table>' 
                              
             } 
        

             if (years == 14){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr>  </table>';
                                                   

             '<table>' 
                              
             }


             if (years == 15){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr> '
                                 //year 15
                                 + 
                                 '<tr><td>'+15+'</td><td>'+"$"+year14EndingValue+'</td><td>'+"$"+year15InterestEarned+'</td><td>'+"$"+year15EndingValue+'</td></tr>  </table>';
                                                               

             '<table>' 
                              
             }


             
             if (years == 16){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr> '
                                 //year 15
                                 + 
                                 '<tr><td>'+15+'</td><td>'+"$"+year14EndingValue+'</td><td>'+"$"+year15InterestEarned+'</td><td>'+"$"+year15EndingValue+'</td></tr> '
                                                               
                             //year 16
                             + 
                             '<tr><td>'+16+'</td><td>'+"$"+year15EndingValue+'</td><td>'+"$"+year16InterestEarned+'</td><td>'+"$"+year16EndingValue+'</td></tr>  </table>';
                                               
             '<table>' 
                              
             }


             if (years == 17){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr> '
                                 //year 15
                                 + 
                                 '<tr><td>'+15+'</td><td>'+"$"+year14EndingValue+'</td><td>'+"$"+year15InterestEarned+'</td><td>'+"$"+year15EndingValue+'</td></tr> '
                                                               
                             //year 16
                             + 
                             '<tr><td>'+16+'</td><td>'+"$"+year15EndingValue+'</td><td>'+"$"+year16InterestEarned+'</td><td>'+"$"+year16EndingValue+'</td></tr> '
                                                    //year 17
                                                    + 
                                                    '<tr><td>'+17+'</td><td>'+"$"+year16EndingValue+'</td><td>'+"$"+year17InterestEarned+'</td><td>'+"$"+year17EndingValue+'</td></tr>  </table>';
                                                                      
             '<table>' 
                              
             }


             if (years == 18){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr> '
                                 //year 15
                                 + 
                                 '<tr><td>'+15+'</td><td>'+"$"+year14EndingValue+'</td><td>'+"$"+year15InterestEarned+'</td><td>'+"$"+year15EndingValue+'</td></tr> '
                                                               
                             //year 16
                             + 
                             '<tr><td>'+16+'</td><td>'+"$"+year15EndingValue+'</td><td>'+"$"+year16InterestEarned+'</td><td>'+"$"+year16EndingValue+'</td></tr> '
                                                    //year 17
                                                    + 
                                                    '<tr><td>'+17+'</td><td>'+"$"+year16EndingValue+'</td><td>'+"$"+year17InterestEarned+'</td><td>'+"$"+year17EndingValue+'</td></tr>'
                                                                      
                                                    //year 18
                                                    + 
                                                    '<tr><td>'+18+'</td><td>'+"$"+year17EndingValue+'</td><td>'+"$"+year18InterestEarned+'</td><td>'+"$"+year18EndingValue+'</td></tr>  </table>';
                                            
             
                                                    '<table>' 
                              
             }


             if (years == 19){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr> '
                                 //year 15
                                 + 
                                 '<tr><td>'+15+'</td><td>'+"$"+year14EndingValue+'</td><td>'+"$"+year15InterestEarned+'</td><td>'+"$"+year15EndingValue+'</td></tr> '
                                                               
                             //year 16
                             + 
                             '<tr><td>'+16+'</td><td>'+"$"+year15EndingValue+'</td><td>'+"$"+year16InterestEarned+'</td><td>'+"$"+year16EndingValue+'</td></tr> '
                                                    //year 17
                                                    + 
                                                    '<tr><td>'+17+'</td><td>'+"$"+year16EndingValue+'</td><td>'+"$"+year17InterestEarned+'</td><td>'+"$"+year17EndingValue+'</td></tr>'
                                                                      
                                                    //year 18
                                                    + 
                                                    '<tr><td>'+18+'</td><td>'+"$"+year17EndingValue+'</td><td>'+"$"+year18InterestEarned+'</td><td>'+"$"+year18EndingValue+'</td></tr> '
                                            
             


                                                                                                    //year 19
                                                                                                    + 
                                                                                                    '<tr><td>'+19+'</td><td>'+"$"+year18EndingValue+'</td><td>'+"$"+year19InterestEarned+'</td><td>'+"$"+year19EndingValue+'</td></tr>  </table>';
                                                                                            
                                                             
                                                    '<table>' 
                              
             }

             
             if (years == 20){
              document.getElementById("result").innerHTML =table =  
              '<table>' +
              '<tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>' 
               //year 1
              + 
              '<tr><td>'+1+'</td><td>'+"$"+amount+'</td><td>'+"$"+year1InterestEarned+'</td><td>'+"$"+year1EndingValue+'</td></tr>'
                //year 2
                + 
                '<tr><td>'+2+'</td><td>'+"$"+year1EndingValue+'</td><td>'+"$"+year2InterestEarned+'</td><td>'+"$"+year2EndingValue+'</td></tr>'
               
               //year 3
                + 
                '<tr><td>'+3+'</td><td>'+"$"+year2EndingValue+'</td><td>'+"$"+year3InterestEarned+'</td><td>'+"$"+year3EndingValue+'</td></tr>'
                //year 4
                + 
                '<tr><td>'+4+'</td><td>'+"$"+year3EndingValue+'</td><td>'+"$"+year4InterestEarned+'</td><td>'+"$"+year4EndingValue+'</td></tr>'
                
        
                      //year 5
                      + 
                      '<tr><td>'+5+'</td><td>'+"$"+year4EndingValue+'</td><td>'+"$"+year5InterestEarned+'</td><td>'+"$"+year5EndingValue+'</td></tr> '
                      
                      
                      //year 6
                      + 
                      '<tr><td>'+6+'</td><td>'+"$"+year5EndingValue+'</td><td>'+"$"+year6InterestEarned+'</td><td>'+"$"+year6EndingValue+'</td></tr> '
                      
             //year 7
                    + 
             '<tr><td>'+7+'</td><td>'+"$"+year6EndingValue+'</td><td>'+"$"+year7InterestEarned+'</td><td>'+"$"+year7EndingValue+'</td></tr> '
             
            //year 8
            + 
            '<tr><td>'+8+'</td><td>'+"$"+year7EndingValue+'</td><td>'+"$"+year8InterestEarned+'</td><td>'+"$"+year8EndingValue+'</td></tr>  '
                 

                      //year 9
                      + 
                      '<tr><td>'+9+'</td><td>'+"$"+year8EndingValue+'</td><td>'+"$"+year9InterestEarned+'</td><td>'+"$"+year9EndingValue+'</td></tr>'
                    
                      //year 10
                      + 
                      '<tr><td>'+10+'</td><td>'+"$"+year9EndingValue+'</td><td>'+"$"+year10InterestEarned+'</td><td>'+"$"+year10EndingValue+'</td></tr> '
               
                      //year 11
                      + 
                      '<tr><td>'+11+'</td><td>'+"$"+year10EndingValue+'</td><td>'+"$"+year11InterestEarned+'</td><td>'+"$"+year11EndingValue+'</td></tr>'
                                 
                      
                     //year 12
                     + 
                     '<tr><td>'+12+'</td><td>'+"$"+year11EndingValue+'</td><td>'+"$"+year12InterestEarned+'</td><td>'+"$"+year12EndingValue+'</td></tr> '
                                
                     //year 13
                     + 
                     '<tr><td>'+13+'</td><td>'+"$"+year12EndingValue+'</td><td>'+"$"+year13InterestEarned+'</td><td>'+"$"+year13EndingValue+'</td></tr> '
                                   //year 14
                                   + 
                                   '<tr><td>'+14+'</td><td>'+"$"+year13EndingValue+'</td><td>'+"$"+year14InterestEarned+'</td><td>'+"$"+year14EndingValue+'</td></tr> '
                                 //year 15
                                 + 
                                 '<tr><td>'+15+'</td><td>'+"$"+year14EndingValue+'</td><td>'+"$"+year15InterestEarned+'</td><td>'+"$"+year15EndingValue+'</td></tr> '
                                                               
                             //year 16
                             + 
                             '<tr><td>'+16+'</td><td>'+"$"+year15EndingValue+'</td><td>'+"$"+year16InterestEarned+'</td><td>'+"$"+year16EndingValue+'</td></tr> '
                                                    //year 17
                                                    + 
                                                    '<tr><td>'+17+'</td><td>'+"$"+year16EndingValue+'</td><td>'+"$"+year17InterestEarned+'</td><td>'+"$"+year17EndingValue+'</td></tr>'
                                                                      
                                                    //year 18
                                                    + 
                                                    '<tr><td>'+18+'</td><td>'+"$"+year17EndingValue+'</td><td>'+"$"+year18InterestEarned+'</td><td>'+"$"+year18EndingValue+'</td></tr> '
                                            
             


                                                                                                    //year 19
                                                                                                    + 
                                                                                                    '<tr><td>'+19+'</td><td>'+"$"+year18EndingValue+'</td><td>'+"$"+year19InterestEarned+'</td><td>'+"$"+year19EndingValue+'</td></tr>'
                                                                                            
                                                             

                                                                          
                                                                                                    //year 20
                                                                                                    + 
                                                                                                    '<tr><td>'+20+'</td><td>'+"$"+year19EndingValue+'</td><td>'+"$"+year20InterestEarned+'</td><td>'+"$"+year20EndingValue+'</td></tr>  </table>';
                                                                                            
                                                             
                                                    '<table>' 
                              
             }
      
      document.getElementById("result").innerHTML = table;
} // end generateTable






 