import {createDirectus, rest, staticToken, readField} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('aDC420JnsUO4uBAR9EqFgI_h71uBYWmx'))
        .with(rest());
    const data = await client.request(
        readField('Contacts', 'subject')
    )

    return data.meta.options.choices
})