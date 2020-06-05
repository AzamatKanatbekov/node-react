const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/bundle.js?v=1d3c479a-a2d5-45ba-b119-af9f05d0f143"></script>
    </body>
  </html>
`
}

export default Html
