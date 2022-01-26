import got from 'got';
import { messages } from '../Templates/Messages';
import { CepStatus } from '../Types/CepStatus';
import { endpoints } from '../Config/endpoints.config'

export class CepService {

	async CepStatus(cepNumber: number): Promise<CepStatus | String> {

		try {
			
			console.log( endpoints.cepBaseUrl );
			
			const res: any  = await got.get(`${endpoints.cepBaseUrl}/${cepNumber}/json`).json();
			if (!res) return messages.notFound.textContent;
			const { cep, localidade, uf, ddd } = res;
			const cepStatus = { cep, localidade, uf, ddd }
			return cepStatus;
		} catch (error) {
			return messages.notFound.textContent;
		}
	}

}