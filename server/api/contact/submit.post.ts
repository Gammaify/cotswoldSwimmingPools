import {createDirectus, rest, staticToken, createItem} from '@directus/sdk';
export default defineEventHandler( async (event) => {
    const data = await readBody(event);
    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('GlUkchVDK8SWu0I3AnpWHvUZvNV8CTCc'))
        .with(rest());

    const cloudflareResponse = await verifyTurnstileToken(data['cf-turnstile-response']);
    if (cloudflareResponse.success) {
        await client.request(
            createItem('Contacts', {
                "full_name": data.full_name,
                "email": data.email,
                "subject": data.subject,
                "email_content": data.email_content
            })
        )
    }
})