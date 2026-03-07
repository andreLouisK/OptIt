"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "OptIT Kontakt <onboarding@resend.dev>", // Se note under
      to: ["andrek1994@gmail.com"],
      subject: `Ny henvendelse: ${service} fra ${name}`,
      replyTo: email,
      html: `
        <h2>Ny melding fra kontaktskjema</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Ikke oppgitt"}</p>
        <p><strong>Bedrift:</strong> ${company || "Ikke oppgitt"}</p>
        <p><strong>Tjeneste:</strong> ${service}</p>
        <br />
        <p><strong>Melding:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { error: "Noe gikk galt ved sending av e-post." };
  }
}