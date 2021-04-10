
    //code to change button color
    document.getElementById('btn1').addEventListener('click',changeColor)

    //function to change color
    function changeColor(){
        document.getElementById('btn1').style.backgroundColor='red';
    }


        //code to change button text color
        document.getElementById('btn2').addEventListener('click',changetxtColor)

        //function to change color
        function changetxtColor(){
            document.getElementById('btn2').style.color='black';
            document.getElementById('btn2').style.backgroundColor='brown';
        }

        //code to change background color
        document.getElementById('btn3').addEventListener('click',changebgColor)

        //function to change color
        function changebgColor(){
            document.getElementById('btn3').style.color='blue';
            document.getElementById('btn3').style.backgroundColor='white';
            document.getElementById('bdy').style.backgroundColor='grey';
        }
