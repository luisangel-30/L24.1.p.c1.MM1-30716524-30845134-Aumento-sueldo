export default class CL_personal {
    constructor(nombre, tipo, sueldo){
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo = sueldo;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(t){
        this._tipo = +t;
    }
    get tipo(){
        return this._tipo;
    }
    set sueldo(s){
        this._sueldo = +s;
    }
    get sueldo(){
        return this._sueldo;
    }
    aumento(){
        if(this.tipo == "1")
            return this.sueldo * 0.20;
        else
        return this.sueldo * 0.10;
    }
    devolveraumento(){
        return this.aumento();
    }
}