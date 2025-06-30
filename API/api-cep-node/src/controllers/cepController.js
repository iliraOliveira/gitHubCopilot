const axios = require('axios');

class CepController {
    async getAddressByCep(req, res) {
        const cep = req.params.cep;

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                return res.status(404).json({ error: 'CEP não encontrado' });
            }
            const address = {
                cep: response.data.cep,
                logradouro: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
            };
            res.json(address);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao consultar o CEP' });
        }
    }
}

module.exports = CepController;