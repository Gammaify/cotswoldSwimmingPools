import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('3QLMY8PhhKjMPAX5z3_QRQAg7HBYtCDO'))
        .with(rest());

    return await client.request(
        readItems('Services', {
            fields: ['id', 'Name', 'image_of_service', 'alternative_text'],
        })
    )
})