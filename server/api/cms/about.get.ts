import {createDirectus, rest, staticToken, readSingleton} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('GlUkchVDK8SWu0I3AnpWHvUZvNV8CTCc'))
        .with(rest());

    return await client.request(
        readSingleton("About", {
            fields: ['about_text', 'about_image_1', 'about_image_2']
        })
    )
})