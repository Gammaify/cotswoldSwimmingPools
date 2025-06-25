import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('xRQM1o6Wnpyfy-r7To8dR1Y5ogDLgTNp'))
        .with(rest());

    return await client.request(
        readItems('image_slider', {
            fields: ['image_position', 'image_file', 'alternative_text'],
        })
    )
})