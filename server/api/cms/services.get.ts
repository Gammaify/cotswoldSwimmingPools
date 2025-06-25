import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    try{
const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('aDC420JnsUO4uBAR9EqFgI_h71uBYWmx'))
        .with(rest());

    return await client.request(
        readItems('Services', {
            fields: ['id', 'name', 'image_of_service', 'alternative_text'],
        })
    )
    } catch(err){
        console.log(err)
    }
    
})