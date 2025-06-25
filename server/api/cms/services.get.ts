import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('eVt0pO0izfB5O7YYTu5Duz3ft5wMgddO'))
        .with(rest());

    return await client.request(
        readItems('Services', {
            fields: ['id', 'Name', 'image_of_service', 'alternative_text'],
        })
    )
})