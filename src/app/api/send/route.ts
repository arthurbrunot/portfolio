import { Resend } from 'resend';
import {EmailTemplate} from "@/components/Emails/test-template";
import {NextRequest, NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const data = await req.json()

  try {
    // @ts-ignore
    const mail = await resend.emails.send({
      from: 'contact@aknown.dev',
      to: ['arthur.brunot.pro@gmail.com'],
      subject: 'Nouveau contact depuis le site !',
      react: EmailTemplate(data),
    });
    return NextResponse.json(mail);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export type ContactFormData = {
  name: string
  email: string
  company: string
  phone: string
  message: string
  budget: string
}
