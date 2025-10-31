import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const cvPath = path.join(process.cwd(), "rafael-farsura-outubro-2025.pdf");
    const fileBuffer = await fs.readFile(cvPath);

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=rafael-farsura-outubro-2025.pdf",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `CV não encontrado. ${error instanceof Error ? error.message : "Erro desconhecido"}` },
      { status: 404 }
    );
  }
}
