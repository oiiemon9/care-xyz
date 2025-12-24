import { orderInvoiceTemplate } from '@/app/lib/orderInvoice';
import { sendMail } from '@/app/lib/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, serviceName, totalPrice, orderId } = await req.json();

  try {
    await sendMail({
      to: email,
      subject: 'Your Service Invoice - Care IO',
      html: orderInvoiceTemplate({
        orderId,
        items: serviceName,
        totalPrice,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
