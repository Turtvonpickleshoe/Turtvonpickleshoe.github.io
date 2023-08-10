   const purify = require("purify-css");
   
   let content = ['calendar.html', 'about.html','contact.html' , 'warrior-script.js'];
   let css = ['calendar.css'];
   let options = {
       output: 'purified.css',
       minify: true,
       rejected: true
   };
   
   purify(content, css, options, function (purifiedAndMinifiedResult) {
       console.log(purifiedAndMinifiedResult);
   });