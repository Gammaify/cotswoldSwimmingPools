import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {
 try{
    const client = createDirectus('https://cspadmin.gammaify.com')
            .with(staticToken('aDC420JnsUO4uBAR9EqFgI_h71uBYWmx'))
            .with(rest());

        return await client.request(
            readItems('Compare_Sliders', {
                fields:['image_position', 'after_image', 'before_image']
            })
        )
 } catch (err){
    console.log(err)
 }
    
})