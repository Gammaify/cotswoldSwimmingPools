import nodemailer from 'nodemailer';

export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const full_name = body.full_name
    const email = body.email;
    const phone = body.phone ?? 'N/A';
    const subject = body.subject;
    const email_content = body.email_content;
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    const mailOptions = {
        from: '"Web Team" <noreply@gammaify.com>',
        to: 'info@cotswoldswimmingpools.co.uk',
        subject: '[NEW] Contact Submission',
        html: `<p>Hello James,</p><i>You have a new message below from a customer:</i><hr><p><b><u>Contact Details</u></b></p><p>Full Name: ${ full_name }</p><p>Email: ${ email }</p><p>Phone: ${ phone }</p><b><u>Message Details</u></b><p>Subject: ${ subject }</p><p>Message: ${ email_content }</p><hr><b>Do not reply to this email. You will have to create a new email to respond to the customer.</b><p>Kind Regards,</p><p>Web Team</p>`,
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