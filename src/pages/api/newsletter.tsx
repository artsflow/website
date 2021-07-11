import { VercelResponse, VercelRequest } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const listId = '8908902c-e236-11eb-96e5-06b4694bee2a'
  const options = {
    api_key: process.env.EMAIL_OCTOPUS_KEY,
    email_address: req.body.email,
    fields: {
      FirstName: req.body.name,
    },
    status: 'PENDING',
  }

  try {
    await fetch(`https://emailoctopus.com/api/1.5/lists/${listId}/contacts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    }).then((r) => r.json())
    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(400).json({ ok: false, error: e.error.error })
  }
}
