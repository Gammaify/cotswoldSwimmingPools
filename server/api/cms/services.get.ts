import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';

export default defineEventHandler( async () => {

    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('2w35cE_ABhTKSSTksbls4fenQtN-pIeq'))
        .with(rest());

    return await client.request(
        readItems('Services', {
            fields: ['id', 'name', 'image_of_service', 'alternative_text'],
        })
    )
})