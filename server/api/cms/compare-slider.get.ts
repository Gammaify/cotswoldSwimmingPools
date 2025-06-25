import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('xRQM1o6Wnpyfy-r7To8dR1Y5ogDLgTNp'))
        .with(rest());

    return await client.request(
        readItems('Compare_Sliders', {
            fields:['image_position', 'after_image', 'before_image']
        })
    )
})