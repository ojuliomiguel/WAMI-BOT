import { CepStatus } from "../Types/CepStatus";

export function foundCepMessage(cepStatus: CepStatus): string {
    
    const cepStatusMessage = 'Ebah! Encontramos informações a respeito deste CEP. \n\n' +
        `CEP: ${cepStatus.cep} \n` +
        `Localidade: ${cepStatus.localidade} \n` +
        `Sigla do estado: ${cepStatus.uf} \n` +
        `DDD: ${cepStatus.ddd} \n`;
    return cepStatusMessage;
    
}