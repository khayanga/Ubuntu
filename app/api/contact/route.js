import db from "@/lib/db";

export async function POST(request) {
    try {
      const { name, email, message } = await request.json();
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ success: false, message: 'Invalid input data' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const insertQuery = `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, message, created_at
    `;
    const values = [name, email, message];

    const result = await db.query(insertQuery, values);
  
      console.log('Received data:', { name, email, message });
  
      
      return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, message: 'Failed to send message' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  