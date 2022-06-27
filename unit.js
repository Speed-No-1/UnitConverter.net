//   function unit_changer(){

//     var first_val = document.getElementById("input_1").value;
//     var second_val = document.getElementById("input_2").value;

//     var type_1 =  document.getElementById("first_drpd").value;
//     var type_2 =  document.getElementById("second_drpd").value;
//     console.log(first_val,second_val);

//     if(type_1=="meter" && type_2=="centimeter"){
//         var result = eval(first_val)*+100;
//         document.getElementById("input_2").value = result;
//         console.log(result);
//     }
// }
var input = document.getElementById("input");
var result = document.getElementById("result");

var inputType = document.getElementById("inputType")
var resultType = document.getElementById("resultType")
var inputTypeValue, resultTypeValue;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// takking value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){
    // when we change the input, output value than we need to0 update inputTypeValue and resultTypeValue
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    if(inputTypeValue ==="meter" && resultTypeValue==="centimeter"){

        // meter formula
        result.value = Number(input.value) * 100;
        
    }else if(inputTypeValue ==="meter" && resultTypeValue==="kilometer"){
        // meter to kilometer
        result.value = Number(input.value) * 0.001;

    }else if(inputTypeValue ==="meter" && resultTypeValue==="meter"){
        // meter to meter
        result.value = input.value;
    

   
        

    }else if(inputTypeValue ==="meter" && resultTypeValue==="millieter"){
        // meter to milimeter
        result.value = Number(input.value) * 1000;
        
        

    }else if(inputTypeValue ==="meter" && resultTypeValue==="nanometer"){
        // meter to nanometer
        result.value = Number(input.value) * 1000000000;
        
        

    }else if(inputTypeValue ==="meter" && resultTypeValue==="yard"){
        // meter to yard
        result.value = Number(input.value) * 1.094;
        
        

    }else if(inputTypeValue ==="meter" && resultTypeValue==="feet"){
        // meter to feet
        result.value = Number(input.value) * 3.28;
        
        

    }else if(inputTypeValue ==="meter" && resultTypeValue==="inchi"){
        // meter to inchi
        result.value = Number(input.value) * 39.37;
                        
    }
    
    // meter formula ends

     // kilometer meter formula starts

      

         // kilometer to centimeter
    if(inputTypeValue ==="kilometer" && resultTypeValue==="centimeter"){

       
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="kilometer"){
        // kilometer to kilometer
        result.value = input.value;

    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="meter"){
        // kilometer to meter
        result.value = (input.value) * 1000;
    

   
        

    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="millieter"){
        // kilometer to milimeter
        result.value = Number(input.value) * 1000000;
        
        

    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="nanometer"){
        // kilometer to nanometer
        result.value = Number(input.value) * 1000000000000;
        
        

    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="yard"){
        //kilometer to yard
        result.value = Number(input.value) * 1093.61;
        
        

    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="feet"){
        // kilometer to feet
        result.value = Number(input.value) * 3280.84;
        
        

    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="inchi"){
        // kilometer to inchi
        result.value = Number(input.value) * 39370.079;
                        
    }
    
    // kilometer formula end

// centimete meter formula starts

      

         // centimete to centimeter
         if(inputTypeValue ==="centimete" && resultTypeValue==="centimeter"){

       
            result.value = input.value;
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="kilometer"){
            // centimete to kilometer
            result.value = Number(input.value)* 1/100000;
    
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="meter"){
            // centimete to meter
            result.value = (input.value) * 0.01;
        
    
       
            
    
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="millieter"){
            // centimete to milimeter
            result.value = Number(input.value) * 10;
            
            
    
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="nanometer"){
            // centimete to nanometer
            result.value = Number(input.value) * 10000000;
            
            
    
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="yard"){
            //centimete to yard
            result.value = Number(input.value) * 0.01094;
            
            
    
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="feet"){
            // centimete to feet
            result.value = Number(input.value) * 0.03281;
            
            
    
        }else if(inputTypeValue ==="centimete" && resultTypeValue==="inchi"){
            // centimete to inchi
            result.value = Number(input.value) * 0.3937;
                            
        }
        
    // centimete formula end
    // inchi meter formula starts

      

         // inchi to centimeter
         if(inputTypeValue ==="inchi" && resultTypeValue==="centimeter"){

       
            result.value = Number(input.value) * 2.54;
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="kilometer"){
            //inchi to kilometer
            result.value = Number(input.value)* 2.54/100000;
    
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="meter"){
            // inchi to meter
            result.value = (input.value) * 0.0254;
        
    
       
            
    
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="millieter"){
            // inchi to milimeter
            result.value = Number(input.value) * 25.4;
            
            
    
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="nanometer"){
            // inchi to nanometer
            result.value = Number(input.value) * 25400000;
            
            
    
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="yard"){
            //inchi to yard
            result.value = Number(input.value) * 0.027778;
            
            
    
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="feet"){
            // inchi to feet
            result.value = Number(input.value) * 0.0833333;
            
            
    
        }else if(inputTypeValue ==="inchi" && resultTypeValue==="inchi"){
            // inchi to inchi
            result.value = input.value;
                            
        }
        
    // inchi formula end

    // millieter formula starts

      

         // millieter to centimeter
         if(inputTypeValue ==="millieter" && resultTypeValue==="centimeter"){

       
            result.value = Number(input.value) * 0.01;
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="kilometer"){
            //millieter to kilometer
            result.value = Number(input.value)* 1/1000000;
    
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="meter"){
            // millieter to meter
            result.value = (input.value) * 0.001;
        
    
       
            
    
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="millieter"){
            // millieter to milimeter
            result.value = input.value;
            
            
    
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="nanometer"){
            // millieter to nanometer
            result.value = Number(input.value) * 1000000;
            
            
    
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="yard"){
            //millieter to yard
            result.value = Number(input.value) * 0.0010936;
            
            
    
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="feet"){
            // millieter to feet
            result.value = Number(input.value) * 0.00328084;
            
            
    
        }else if(inputTypeValue ==="millieter" && resultTypeValue==="inchi"){
            // millieter to inchi
            result.value = Number(input.value) * 0.03937;
                            
        }
        
    // millieter formula end


    // nanometer formula starts

      

         // nanometer to centimeter
         if(inputTypeValue ==="nanometer" && resultTypeValue==="centimeter"){

       
            result.value = Number(input.value) * 1/10000000;
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="kilometer"){
            //nanometer to kilometer
            result.value = Number(input.value)* 1/1000000000000;
    
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="meter"){
            // nanometer to meter
            result.value = (input.value) * 1/1000000000;
        
    
       
            
    
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="millieter"){
            // nanometer to milimeter
            result.value = Number(input.value) * 1/1000000;
            
            
    
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="nanometer"){
            // nanometer to nanometer
            result.value = input.value;
            
            
    
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="yard"){
            //nanometer to yard
            result.value = Number(input.value) * 1.094/1000000000;
            
            
    
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="feet"){
            // nanometer to feet
            result.value = Number(input.value) * 0.00328084;
            
            
    
        }else if(inputTypeValue ==="nanometer" && resultTypeValue==="inchi"){
            // nanometer to inchi
            result.value = Number(input.value) * 3.937/1000000000;
                            
        }
        
    // nanometer formula end

    // yard formula starts

      

         // yard to centimeter
         if(inputTypeValue ==="yard" && resultTypeValue==="centimeter"){

       
            result.value = Number(input.value) * 91.44;
        }else if(inputTypeValue ==="yard" && resultTypeValue==="kilometer"){
            //yard to kilometer
            result.value = Number(input.value)* 0.0009144;
    
        }else if(inputTypeValue ==="yard" && resultTypeValue==="meter"){
            // yard to meter
            result.value = (input.value) * 0.9144;
        
    
       
            
    
        }else if(inputTypeValue ==="yard" && resultTypeValue==="millieter"){
            // yard to milimeter
            result.value = Number(input.value) * 914.4;
            
            
    
        }else if(inputTypeValue ==="yard" && resultTypeValue==="nanometer"){
            // yard to nanometer
            result.value = Number(input.value) * 914400000;
            
            
    
        }else if(inputTypeValue ==="yard" && resultTypeValue==="yard"){
            //yard to yard
            result.value = input.value
            
            
    
        }else if(inputTypeValue ==="yard" && resultTypeValue==="feet"){
            // yard to feet
            result.value = Number(input.value) * 3;
            
            
    
        }else if(inputTypeValue ==="yard" && resultTypeValue==="inchi"){
            // yard to inchi
            result.value = Number(input.value) * 36;
                            
        }
        
    // yard formula end


    // feet formula starts

      

         // feet to centimeter
         if(inputTypeValue ==="feet" && resultTypeValue==="centimeter"){

       
            result.value = Number(input.value) * 30.48;
        }else if(inputTypeValue ==="feet" && resultTypeValue==="kilometer"){
            //feet to kilometer
            result.value = Number(input.value)* 0.000305;
    
        }else if(inputTypeValue ==="feet" && resultTypeValue==="meter"){
            // feet to meter
            result.value = (input.value) * 0.3048;
        
    
       
            
    
        }else if(inputTypeValue ==="feet" && resultTypeValue==="millieter"){
            // feet to milimeter
            result.value = Number(input.value) * 304.8;
            
            
    
        }else if(inputTypeValue ==="feet" && resultTypeValue==="nanometer"){
            // feet to nanometer
            result.value = Number(input.value) * 304800000;
            
            
    
        }else if(inputTypeValue ==="feet" && resultTypeValue==="yard"){
            //feet to yard
            result.value = Number(input.value) * 0.3333333;
            
            
    
        }else if(inputTypeValue ==="feet" && resultTypeValue==="feet"){
            // feet to feet
            result.value = input.value
            
            
    
        }else if(inputTypeValue ==="feet" && resultTypeValue==="inchi"){
            // feet to inchi
            result.value = Number(input.value) * 12;
                            
        }
        
    // feet formula end
    }




















































 
