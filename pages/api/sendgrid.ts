// @ts-nocheck
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req: any, res: any) {
    try {
        // console.log('REQ.BODY', req.body);
        await sendgrid.send({
            to: 'christoffer.t.andersen@gmail.com', // Your email where you'll receive emails
            from: 'christoffer.t.andersen@gmail.com', // your website email address here
            subject: `${req.body.subject}`,
            html: `
                <div>En mail fra: ${req.body.name}<${req.body.email}></div>
                <div>Telefonnummer: ${req.body.phone}</div>
                <div>Med beskeden: ${req.body.message}</div>
            `,
        });
    } catch (error) {
        // console.log(error);
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }

    return res.status(200).json({ error: '' });
}

export default sendEmail;
