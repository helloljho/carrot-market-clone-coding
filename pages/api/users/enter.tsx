import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: 'Anomymous',
      ...payload,
    },
    update: {},
  });
  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (!user) {
  //     console.log('Did not found. Will create');
  //     user = await client.user.create({
  //       data: {
  //         name: 'Anomymous',
  //         email,
  //       },
  //     });
  //   }
  // }
  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: parseInt(phone),
  //     },
  //   });
  //   if (!user) {
  //     console.log('Did not found. Will create');
  //     user = await client.user.create({
  //       data: {
  //         name: 'Anomymous',
  //         phone: parseInt(phone),
  //       },
  //     });
  //   }
  // }

  console.log(user);
  return res.status(200).end();
}

export default withHandler('POST', handler);
