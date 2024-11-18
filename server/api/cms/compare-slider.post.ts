import {createDirectus, rest, staticToken, readItem} from '@directus/sdk';

export default defineEventHandler( async (event) => {

    const data = await readBody(event);
    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('GlUkchVDK8SWu0I3AnpWHvUZvNV8CTCc'))
        .with(rest());

    return await client.request(
        readItem('Compare_Sliders', data.id, {
            fields:['after_image', 'before_image']
        })
    )
})