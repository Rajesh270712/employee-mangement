// yourScript.js

const triggerTrackingEvents = () => {
  const config = {
    url: 'https://analytics.synthaxia.com/v1/measurement/analytics'
  };

  window.PhylloConnect.initialize(config);
}

function loadScript(src, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = callback;

  document.body.appendChild(script);
}

// Load the Phyllo Connect script and call triggerTrackingEvents when it's loaded
loadScript('https://cdn.dev.getphyllo.com/connect/v2/phyllo-connect.js', triggerTrackingEvents);

// Call triggerTrackingEvents when the window location changes
window.addEventListener('hashchange', triggerTrackingEvents);
