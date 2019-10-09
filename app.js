var app = angular.module("calcApp",[]);

app.controller("calculatorCtrl",calculateValue);


function calculateValue() {
    // this reference would be used here since we have used AS
    this.result=0;
    this.operand1=""
    this.operand2="";
    this.operation="";
    this.buttonClicked = function(button){

        this.operation=button;

    }

    this.clearValues = function() {

        this.operation="";
        this.operand1="";
        this.operand2="";
        this.result=0;

    }

    this.computeResult = function() {

        if(this.operation === ""){
            alert("Please select an operation.")
        }

        if(this.operand1 === "" || this.operand2 === ""){
            alert("Please enter the operand(s).")
        }

        if( isNaN(this.operand1) || isNaN(this.operand2)){
            alert("Please enter number(s).")
        }
        else{
            var num1 = parseFloat(this.operand1);
            var num2 = parseFloat(this.operand2);

            if(this.operation === "+"){
                this.result=num1+num2;
            }
            else if(this.operation === "-"){
                this.result=num1-num2;
            }
            else if(this.operation === "*"){
                this.result=num1*num2;
            }
            else if(this.operation === "/"){
                this.result=num1/num2;
            }

        }




    }


}
