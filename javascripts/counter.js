function getVisitorCount() {
    // Create a unique namespace for your site
    const namespace = window.location.hostname;
    const key = 'visits';
    
    // Make API call to CountAPI
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitor-count').textContent = data.value;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            document.getElementById('visitor-count').textContent = 'Error loading count';
        });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', getVisitorCount);

// Add this to docs/javascripts/counter.js
console.log('Counter script loaded');  // Debug log

const NAMESPACE = 'algebra';
const KEY = '1234';

function logVisit() {
    console.log('Logging visit...');  // Debug log
    fetch(`https://api.countapi.xyz/key/${KEY}/hit/${NAMESPACE}`)
        .catch(error => console.error('Error logging visit:', error));
}

// Explicitly attach to window
window.checkVisits = function() {
    console.log('Checking visits...');  // Debug log
    fetch(`https://api.countapi.xyz/key/${KEY}/get/${NAMESPACE}`)
        .then(response => response.json())
        .then(data => console.log('Total visits:', data.value))
        .catch(error => console.error('Error fetching count:', error));
};

// Log the visit when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, calling logVisit');  // Debug log
    logVisit();
});

// Additional debug check
console.log('checkVisits function is defined:', typeof window.checkVisits === 'function');