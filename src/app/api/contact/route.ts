import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { copy } from "@/data/copy";

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  const result = bodySchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, message } = result.data;
  const attachments = formData
    .getAll("attachments")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    attachments.length > 0
      ? `Attachments: ${attachments.map((file) => file.name).join(", ")}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not configured. Message logged only.",
    );
    return NextResponse.json({
      delivered: false,
      message: "Message logged. Email service not configured.",
    });
  }

  const resend = new Resend(apiKey);

  try {
    const attachmentPayload =
      attachments.length > 0
        ? await Promise.all(
            attachments.map(async (file) => ({
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            })),
          )
        : undefined;
    await resend.emails.send({
      from: "Synerva Dynamics <notifications@synerva-dynamics.com>",
      to: copy.global.contact.email,
      replyTo: email,
      subject: `New Synerva inquiry from ${name}`,
      text,
      attachments: attachmentPayload,
    });
    return NextResponse.json({ delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json(
      { delivered: false, message: "Failed to deliver message" },
      { status: 500 },
    );
  }
}
