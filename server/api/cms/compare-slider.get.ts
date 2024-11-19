import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('GlUkchVDK8SWu0I3AnpWHvUZvNV8CTCc'))
        .with(rest());

    return await client.request(
        readItems('Compare_Sliders', {
            fields:['image_position', 'after_image', 'before_image']
        })
    )
})