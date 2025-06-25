import {createDirectus, rest, staticToken, readSingleton} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('xRQM1o6Wnpyfy-r7To8dR1Y5ogDLgTNp'))
        .with(rest());

    return await client.request(
        readSingleton("About", {
            fields: ['about_text', 'about_image_1', 'about_image_2']
        })
    )
})