"use server";

import { db } from "@/db";
import { contactMessages, jobApplications, newsletterSubscribers } from "@/db/schema";

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await db.insert(contactMessages).values({
      name,
      email,
      phone: phone || null,
      company: company || null,
      subject,
      message,
    });
    return {
      status: "success",
      message: "Thank you. Your message has been received and our team will respond within one business day.",
    };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again shortly." };
  }
}

export async function subscribeNewsletter(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  try {
    await db
      .insert(newsletterSubscribers)
      .values({ email })
      .onConflictDoNothing({ target: newsletterSubscribers.email });
    return { status: "success", message: "You're subscribed. Welcome aboard!" };
  } catch {
    return { status: "error", message: "Could not subscribe right now. Please try again." };
  }
}

export async function submitJobApplication(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const position = String(formData.get("position") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !position) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await db.insert(jobApplications).values({
      name,
      email,
      phone: phone || null,
      position,
      message: message || null,
    });
    return {
      status: "success",
      message: "Application received. Our crewing team will be in touch if there is a match.",
    };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again shortly." };
  }
}
