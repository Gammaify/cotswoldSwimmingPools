import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {
 try{
    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('aDC420JnsUO4uBAR9EqFgI_h71uBYWmx'))
        .with(rest());

    return await client.request(
        readItems('image_slider', {
            fields: ['image_position', 'image_file', 'alternative_text'],
        })
    )
 } catch(err){
    console.log(err)
 }
    
})