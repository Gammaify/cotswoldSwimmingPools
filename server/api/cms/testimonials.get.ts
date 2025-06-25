import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('58uli_X9GRbtOrXwp1PsoZ4bjREqJ-9K'))
        .with(rest());

    return await client.request(
        readItems('Testimonials', {
            fields: ['id', 'name', 'quote'],
        })
    )
})