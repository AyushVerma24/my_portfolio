
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4"
import { Resend } from "npm:resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize Resend with your API key
const resend = new Resend(Deno.env.get('RESEND_API_KEY') || 're_LMxBc6Rm_KWueu4NJEbPbgANNEQwa5AKK');

// Define the admin email where you want to receive notifications
const ADMIN_EMAIL = "verma24122003@gmail.com"; // This should be your email

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  try {
    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Parse request body
    const { name, email, message } = await req.json()

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Insert message into database
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({ name, email, message })

    if (dbError) throw dbError

    // Send email notification to admin
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ADMIN_EMAIL,
        subject: `New Contact Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3 style="color: #555;">Message:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #777; font-size: 12px; margin-top: 30px;">
              This email was sent automatically from your portfolio contact form.
            </p>
          </div>
        `
      });

      if (emailError) {
        console.error('Error sending email notification:', emailError);
        // We continue execution - DB entry was saved successfully
      } else {
        console.log('Email notification sent successfully:', emailData);
      }
    } catch (emailSendError) {
      console.error('Exception when sending email:', emailSendError);
      // We continue execution - DB entry was saved successfully
    }

    // Return success response
    return new Response(JSON.stringify({ success: true, message: 'Message submitted successfully' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error submitting contact message:', error)
    return new Response(JSON.stringify({ error: 'Failed to submit message' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
