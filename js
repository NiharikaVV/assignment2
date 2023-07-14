let result='';
            function calcu (){
                
                document.querySelector('.dis').innerHTML = `${eval(result)}`
            }
            function display(para){
                if(para === 'clear'){
                    result = '';
                    document.querySelector('.dis').innerHTML = null;
                }
                else{
                    document.querySelector('.dis').innerHTML = `${result}`;
                }
                
            }
