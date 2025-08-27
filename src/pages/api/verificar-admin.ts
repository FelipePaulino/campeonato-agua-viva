// pages/api/verificar-admin.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const EMAIL_ADMIN = "admin@meusite.com";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email não enviado" });
  }

  const isAdmin = email === EMAIL_ADMIN;

  res.status(200).json({ isAdmin });
}
