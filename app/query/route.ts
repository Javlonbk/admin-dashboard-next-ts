import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function listInvoices() {
  const client = await db.connect();

  try {
    // Execute the query to fetch invoice amounts and customer names
    const data = await client.sql`
      SELECT 
        invoices.amount, 
        customers.name 
      FROM 
        invoices
      JOIN 
        customers 
      ON 
        invoices.customer_id = customers.id
      WHERE 
        invoices.amount = 666;
    `;

    return data.rows; // Return rows of data
  } catch (error) {
    console.error("Error querying invoices:", error);
    throw error; // Rethrow error to be handled by the caller
  } finally {
    client.release(); // Ensure the client is released back to the pool
  }
}

export async function GET() {
  try {
    // Fetch and return the list of invoices
    const invoices = await listInvoices();
    return NextResponse.json({ invoices });
  } catch (error) {
    // Return a 500 error if something goes wrong
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
