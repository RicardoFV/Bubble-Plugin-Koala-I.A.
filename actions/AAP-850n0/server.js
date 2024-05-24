async function(properties, context) {
    
    if(properties.campo_texto != null || properties.campo_texto != '' && properties.token != null || properties.token != ''){
    	const fetch = require("node-fetch");
    	// faz a requisição de forma assicroma	
        let retorno;
    	let resultado = await context.v3.async(async callback =>{ // inicio da função async
        	
        	let url = 'https://koala.sh/api/gpt/'
        	
        	fetch(url, {
    			method: "POST",
    			headers: {
      				"Content-Type": "application/json",
      				'Authorization': 'Bearer '+properties.token
    			},
                body: JSON.stringify({
        			input: properties.campo_texto,
        			//inputHistory: ['Hello'],
       				// outputHistory: ['Hi! What is your name?'],
        			realTimeData: properties.tempo_real,
    			})
  			})
    		.then((response) => {
      		
      			return response.json();
    		})
    		.then(response => {
                callback(null, response.output);
                
      		})
       		
          
 		}); // fim da função async
        
        return {
            status: 200,
        	resposta : resultado
        }
    
    }
    return {
        	status: 204,
        	resposta : 'Não foi possivel realizar a Consulta !'
    }

}