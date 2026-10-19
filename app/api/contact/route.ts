import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  console.log({
    formLink,
    fieldIdName,
    fieldIdEmail,
    fieldIdMessage,
    fieldIdSocial,
  });

  if (
    !formLink ||
    !fieldIdName ||
    !fieldIdEmail ||
    !fieldIdMessage ||
    !fieldIdSocial
  ) {
    console.error("Google Forms environment variables are missing.");

    return NextResponse.json(
      { error: "Contact form is not configured correctly." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const formResponseUrl = `${formLink
      .trim()
      .split("?")[0]
      .replace(/\/viewform\/?$/, "")
      .replace(/\/$/, "")}/formResponse`;

    const formData = new URLSearchParams();

    formData.set(fieldIdName, name.trim());
    formData.set(fieldIdEmail, email.trim());
    formData.set(fieldIdMessage, message.trim());

    if (typeof social === "string" && social.trim()) {
      formData.set(fieldIdSocial, social.trim());
    }

    const response = await fetch(formResponseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();

      console.error("Google Forms submission failed:", {
        status: response.status,
        url: response.url,
        responseBody: errorBody.slice(0, 500),
      });

      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
