import {createDirectus, rest, staticToken, readSingleton} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('aDC420JnsUO4uBAR9EqFgI_h71uBYWmx'))
        .with(rest());

    return await client.request(
        readSingleton("About", {
            fields: ['about_text', 'about_image_1', 'about_image_2']
        })
    )
})