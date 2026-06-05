import {createDirectus, rest, staticToken, readSingleton} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('2w35cE_ABhTKSSTksbls4fenQtN-pIeq'))
        .with(rest());
//aDC420JnsUO4uBAR9EqFgI_h71uBYWmx
    return await client.request(
        readSingleton("About", {
            fields: ['about_text', 'about_image_1', 'about_image_2']
        })
    )
})