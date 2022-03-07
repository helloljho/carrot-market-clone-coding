import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';
import twilio from 'twilio';
import mail from '@sendgrid/mail';
import { withApiSession } from '@libs/server/withSession';

mail.setApiKey(process.env.SENDGRID_API_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.body);
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) {
    return res.status(400).json({ ok: false });
  }
  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anomymous',
            ...user,
          },
        },
      },
    },
  });
  // if (phone) {
  //   const message = await twilioClient.messages.create({
  //     messagingServiceSid: process.env.TWILIO_SERVICE_SID,
  //     to: process.env.MY_PHONE!,
  //     body: `Your login token is ${payload}`,
  //   });
  //   console.log(message);
  // } else if (email) {
  //   const email = await mail.send({
  //     from: 'helloljho@gmail.com',
  //     to: 'helloljho@gmail.com',
  //     subject: 'Your Carrot Market Verification Email',
  //     text: `Your Token is ${payload}`,
  //     html: `<strong>Your Token is ${payload}</strong>`,
  //   });
  //   console.log(email);
  }
  return res.status(200).json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false })
);
