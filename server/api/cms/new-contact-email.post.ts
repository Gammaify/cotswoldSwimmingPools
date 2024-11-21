import nodemailer from 'nodemailer';
import {createDirectus, rest, staticToken, readItems} from '@directus/sdk';
import { SentMessageInfo } from 'nodemailer';

export default defineEventHandler( async () => {
    const client = createDirectus('https://admin.cotswoldswimmingpools.co.uk')
        .with(staticToken('GlUkchVDK8SWu0I3AnpWHvUZvNV8CTCc'))
        .with(rest());

    const directusData = await client.request(readItems('Contacts', {
        fields: ['full_name', 'email', 'subject', 'email_content'],
    }));
    const full_name = directusData[directusData.length - 1].full_name;
    const email = directusData[directusData.length - 1].email;
    const subject = directusData[directusData.length - 1].subject;
    const email_content = directusData[directusData.length - 1].email_content;
    const transport = nodemailer.createTransport({
        host: "smtp.livemail.co.uk",
        port: 465,
        auth: {
            user: 'noreply@gammaify.com',
            pass: 'SGN*5U6b3H&'
        }
    });


    const mailOptions = {
        from: '"Web Team" <noreply@gammaify.com>',
        to: 'oliver@gammaify.com',
        subject: '[NEW] Contact Submission',
        html: `<p>Hello James,</p><i>You have a new message below from a customer:</i><hr><p><b><u>Contact Details</u></b></p><p>Full Name: ${ full_name }</p><p>Email: ${ email }</p><b><u>Message Details</u></b><p>Subject: ${ subject }</p><p>Message: ${ email_content }</p><hr><b>Do not reply to this email. You will have to create a new email to respond to the customer.</b><p>Kind Regards,</p><p>Web Team</p>`,
    };

    transport.sendMail(mailOptions, (error: Error|null) => {
        if (!error) {
            console.log("successfully sent email")
        }
        else{
            console.log(error)
        }

    });


    return 'success';
})