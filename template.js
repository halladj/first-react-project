export default ({markup, css})=>{
  return `
    <html lang="eng">
      <head>
        <meta charset="utf-8">
        <title>BLOG</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <link rel="stylesheet" href="/dist/ss.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      </head>
      <body>
        <div id="root">${markup}</div>
        <style id="jss-server-side">${css}</style>
        <script src="/dist/bundle.js" ></script> 
      </body>
    </html>
  
  `;
}
