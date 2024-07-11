export default class CL_empresa {
    constructor(){
    this.acumaumento = 0.0;
    }
    procesarpersonal(per){
        this.acumaumento+=per.aumento();
    }
    totalaumento(){
        return this.acumaumento;
    }
}