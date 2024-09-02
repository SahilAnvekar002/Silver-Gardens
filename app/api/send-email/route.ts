const nodemailer = require('nodemailer');

export const POST = async (req: Request) => {

    try {

        const body = await req.json();
        const { id, time, email } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        });
    

        // Set up email data
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL, // Sender address
            to: email, // List of recipients
            subject: 'Appointment Request Accepted', // Subject line
            //text: `Your appointment request has been accepted.\n\nAppointment ID: ${id}\nAllocated Time: ${time}`, // Plain text body
            html: `<div style="font-family: Arial, sans-serif; text-align: center;">
            <h2 style="color: #4CAF50;">Appointment Booking</h2>
            <p style="font-size: 18px;">Your appointment has been accepted. Your appointment id is:</p>
            <h1 style="font-size: 36px; color: #333;">${id}</h1>
            <p style="font-size: 16px; color: #777;">Your appointment is scheduled at ${time}. Please use appointment id for further processing.</p>
          </div>
`, // HTML body
        };

        await transporter.sendMail(mailOptions);
        return Response.json({success: 'Email sent successfully'});

    } catch (error) {
        return Response.json({ error: "Internal server error" });
    }

}



