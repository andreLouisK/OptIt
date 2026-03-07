"use server";

import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("API-nøkkel mangler i miljøvariabler!");
    return { error: "Konfigurasjonsfeil på serveren." };
  }

  const resend = new Resend(apiKey);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "OptIT Kontakt <onboarding@resend.dev>",
      to: ["andrek1994@gmail.com"],
      subject: `Ny henvendelse: ${service} fra ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #0ea5e9;">Ny melding fra kontaktskjema</h2>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Ikke oppgitt"}</p>
          <p><strong>Bedrift:</strong> ${company || "Ikke oppgitt"}</p>
          <p><strong>Tjeneste:</strong> ${service}</p>
          <br />
          <p><strong>Melding:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Catch Error:", err);
    return { error: "Noe gikk galt ved sending av e-post." };
  }
}