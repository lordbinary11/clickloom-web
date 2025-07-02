export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const link = searchParams.get('link');
  if (!link) {
    return new Response(JSON.stringify({ error: 'Missing link parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const apiUrl = `https://llm-2g3j.onrender.com/results/?link=${encodeURIComponent(link)}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch from analyzer API' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 