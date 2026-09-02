import emailjs from '@emailjs/browser';

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export interface SendResult {
  success: boolean;
  message: string;
}

/**
 * Send email via SMTP EmailJS service or reliable SMTP cloud relay.
 */
export async function sendEmailSignal(payload: EmailPayload): Promise<SendResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 1. If EmailJS SMTP credentials are provided in env, use EmailJS directly
  if (serviceId && templateId && publicKey) {
    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: payload.name,
          from_email: payload.email,
          reply_to: payload.email,
          message: payload.message,
          to_email: 'kismats1107@gmail.com',
        },
        publicKey
      );

      if (res.status === 200) {
        return { success: true, message: 'Signal delivered directly to your inbox via SMTP!' };
      }
    } catch (err) {
      console.warn('EmailJS SMTP error, trying fallback relay:', err);
    }
  }

  // 2. Direct SMTP Cloud Dispatch Relay (delivers directly to kismats1107@gmail.com)
  try {
    const res = await fetch('https://formsubmit.co/ajax/kismats1107@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        'Sender Name': payload.name,
        'Sender Email': payload.email,
        Message: payload.message,
        _subject: `⚡ Portfolio Signal from ${payload.name} (${payload.email})`,
        _replyto: payload.email,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await res.json();
    if (res.ok && data.success !== 'false') {
      return { success: true, message: 'Signal delivered directly to your inbox!' };
    }
    throw new Error(data.message || 'SMTP Relay submission failed');
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, message: errorMsg };
  }
}
