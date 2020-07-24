class Main {
    input:string
    score:number = 0;
    // basic password length  p >6 = 1
    // specal keys =1
    // numbers = 1
    // comman password = -1



    constructor(input?:string){
     this.input = input
    
    }

    setInput(x:string):void{
        this.input = x
    }

    setScore(){
     

    }

    basicPasswordLength(){
        
       return this.input.split('').length

    }




}    
