import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Harshit Anchan",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "harshitanchan647@gmail.com" }],
      template_uuid: "1bcffa4d-6864-4268-b9d3-819f54788771",
      template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "Invox",
        company_info_address: "tendercoconut",

        company_info_city: "Mumbai",
        company_info_zip_code: "000000",
        company_info_country: "India",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 }
    );
  }
}
