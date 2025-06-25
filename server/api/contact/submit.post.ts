import {createDirectus, rest, staticToken, createItem} from '@directus/sdk';
export default defineEventHandler( async (event) => {
    const data = await readBody(event);
    const client = createDirectus('https://cspadmin.gammaify.com')
        .with(staticToken('xRQM1o6Wnpyfy-r7To8dR1Y5ogDLgTNp'))
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