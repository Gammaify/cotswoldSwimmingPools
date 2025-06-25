import {createDirectus, rest, staticToken, readField} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('58uli_X9GRbtOrXwp1PsoZ4bjREqJ-9K'))
        .with(rest());
    const data = await client.request(
        readField('Contacts', 'subject')
    )

    return data.meta.options.choices
})