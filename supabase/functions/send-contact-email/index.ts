import { createClient } from 'npm:@supabase/supabase-js@2.39.7'
import { Resend } from 'npm:resend@2.1.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message } = await req.json();

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Insert into contact_submissions table
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, phone, company, message, status: 'new' }]);

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return new Response(
        JSON.stringify({ error: dbError.message }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      );
    }

    // Send email notification using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set.');
      return new Response(
        JSON.stringify({ error: 'Resend API key not configured.' }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error: resendError } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified Resend sender email
      to: 'anishjha65@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
          <li><strong>Company:</strong> ${company || 'N/A'}</li>
          <li><strong>Message:</strong><br>${message}</li>
        </ul>
      `,
    });

    if (resendError) {
      console.error('Resend email error:', resendError);
      return new Response(
        JSON.stringify({ error: resendError.message }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Submission successful and email sent!', data }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('General error:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});