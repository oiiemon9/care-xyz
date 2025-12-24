export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  return `
  <div style="max-width:600px;margin:auto;font-family:Arial;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
    
    <div style="background:#0f172a;color:white;padding:20px;text-align:center">
      <h1 style="margin:0;font-size:22px">Service Order Invoice</h1>
      <p style="margin:4px 0;font-size:13px">Thank you for your order!</p>
    </div>

    <div style="padding:24px">
      <p><b>Order ID:</b> <span style="color:#2563eb">${orderId}</span></p>
      <p><b>Service Name:</b> ${items}</p>
      <hr style="margin:20px 0"/>

      <table width="100%" style="border-collapse:collapse">
        <thead>
          <tr style="background:#f1f5f9">
            <th align="left" style="padding:10px;border:1px solid #e5e7eb">Description</th>
            <th align="right" style="padding:10px;border:1px solid #e5e7eb">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px;border:1px solid #e5e7eb">${items}</td>
            <td align="right" style="padding:10px;border:1px solid #e5e7eb">$ ${totalPrice}</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top:20px;text-align:right">
        <p style="font-size:18px">
          <b>Total:</b> 
          <span style="color:#16a34a">$ ${totalPrice}</span>
        </p>
      </div>

      <p style="margin-top:30px;font-size:13px;color:#64748b">
        If you have any questions, reply to this email.
      </p>
    </div>
  </div>
  `;
};
