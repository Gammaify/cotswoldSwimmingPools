import {createDirectus, rest, staticToken, createItem} from '@directus/sdk';
export default defineEventHandler( async (event) => {
    const data = await readBody(event);
    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('eVt0pO0izfB5O7YYTu5Duz3ft5wMgddO'))
        .with(rest());

    const cloudflareResponse = await verifyTurnstileToken(data['cf-turnstile-response']);
    if (cloudflareResponse.success) {
        await client.request(
            createItem('Contacts', {
                "full_name": data.full_name,
                "email": data.email,
                "phone": data.phone,
                "subject": data.subject,
                "email_content": data.email_content
            })
        )
        return 'true';
    }
    else{
        return 'false';
    }
})