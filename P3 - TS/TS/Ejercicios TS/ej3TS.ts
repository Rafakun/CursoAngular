class Rombo{
    private diaVer:number;
    private diaHor:number;

    constructor(diaVer:number, diaHor:number){
        this.diaVer = diaVer;
        this.diaHor = diaHor;
    }
    setDiaVer(diaVer:number){
        this.diaVer = diaVer;
    }
    getDiaVer(){
        return this.diaVer;
    }   

    setDiaHor(diaHor:number){
        this.diaHor = diaHor;
    }
    getDiaHor(){
        return this.diaHor;
    }

    getArea(){
        this.diaHor * this.diaVer;
    }
}
