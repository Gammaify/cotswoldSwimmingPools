import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('eVt0pO0izfB5O7YYTu5Duz3ft5wMgddO'))
        .with(rest());

    return await client.request(
        readItems('Compare_Sliders', {
            fields:['image_position', 'after_image', 'before_image']
        })
    )
})