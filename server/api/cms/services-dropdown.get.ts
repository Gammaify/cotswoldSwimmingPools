import {createDirectus, rest, staticToken, readField} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('uZ9L9aZVs79uWrxajZqO9oc7WcrchW9M'))
        .with(rest());
    const data = await client.request(
        readField('Contacts', 'subject')
    )

    return data.meta.options.choices
})