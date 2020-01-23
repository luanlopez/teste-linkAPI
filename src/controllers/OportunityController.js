import Budget from '../models/Oportunity';
import axios from 'axios'

class OportunityController {
    async store(req, res) {
        const response = await axios.get('linkapi2.pipedrive.com/v1/deals?status=won&start=0&api_token=64d40673728c6c235de07f8cbb6324d29e8f2b09'),
    
            const {org_name: company, value: price,status} = await response.data.data
    
            const Won = await Budget.create({
                company,
                price,
                status,
            }),
            return res.json(Won)
        
    }
    }
    
    export default new OportunityController();
