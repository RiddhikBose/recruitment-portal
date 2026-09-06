import nodemailer from "nodemailer";
import { reviews } from "@/constants";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(req) {
    const { recipients, payloadData } = await req.json();

    if (!recipients || recipients.length === 0) {
        return new Response(
            JSON.stringify({ error: "No recipients provided" }),
            { status: 400 }
        );
    }

    try {
        for (const recipient of recipients) {
            let deptName = recipient.Department || "your selected department";

            let generalTemp = `
                <div>
                    ${payloadData.body}
                </div>
                `;

            generalTemp = generalTemp.replace(/#name/g, recipient.Name);
            generalTemp = generalTemp.replace(/#dept/g, deptName);

            const mailOptions = {
                from: process.env.EMAIL_USERNAME,
                to: recipient.Email,
                subject: payloadData.subject,
                html: generalTemp,
            };

            await transporter.sendMail(mailOptions);
        }

        return new Response(
            JSON.stringify({ message: "Emails sent successfully" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(
            JSON.stringify({ error: error.message || "Failed to send emails" }),
            { status: 500 }
        );
    }
}