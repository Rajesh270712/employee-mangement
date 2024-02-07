const triggerTrackingEvents = () => {
  const config = {
    url: 'https://analytics.synthaxia.com/v1/measurement/analytics'
  };

  window.PhylloConnect.initialize(config);
}

// Create script element
const script = document.createElement('script');
script.type = 'text/javascript';
script.async = true
script.src = 'https://cdn.dev.getphyllo.com/connect/v2/phyllo-connect.js';

// Set up the callback function directly on the script element
script.onload = function() {
  triggerTrackingEvents();
};

// Append script element to the body
document.body.appendChild(script);

// Call triggerTrackingEvents when the window location changes
window.addEventListener('hashchange', triggerTrackingEvents);

