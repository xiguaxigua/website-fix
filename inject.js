var url = chrome.extension.getURL('js/main.js');
var script = document.createElement('script');
script.src=url;
script.async=false;
(document.head || document.documentElement).appendChild(script);
var styleUrl = chrome.extension.getURL('css/main.css');
var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = styleUrl;
(document.head || document.documentElement).appendChild(style);
