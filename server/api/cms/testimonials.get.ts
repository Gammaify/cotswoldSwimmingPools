import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('uZ9L9aZVs79uWrxajZqO9oc7WcrchW9M'))
        .with(rest());

    return await client.request(
        readItems('Testimonials', {
            fields: ['id', 'name', 'quote'],
        })
    )
})