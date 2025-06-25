import {createDirectus, rest, staticToken, readField} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('xRQM1o6Wnpyfy-r7To8dR1Y5ogDLgTNp'))
        .with(rest());
    const data = await client.request(
        readField('Contacts', 'subject')
    )

    return data.meta.options.choices
})