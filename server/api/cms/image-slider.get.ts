import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('2w35cE_ABhTKSSTksbls4fenQtN-pIeq'))
        .with(rest());

    return await client.request(
        readItems('image_slider', {
            fields: ['image_position', 'image_file', 'alternative_text'],
        })
    )
})