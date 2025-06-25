import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('3QLMY8PhhKjMPAX5z3_QRQAg7HBYtCDO'))
        .with(rest());

    return await client.request(
        readItems('Compare_Sliders', {
            fields:['image_position', 'after_image', 'before_image']
        })
    )
})