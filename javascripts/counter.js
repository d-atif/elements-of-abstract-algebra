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

/// Add this to docs/javascripts/counter.js
const NAMESPACE = 'algebra';  // Can be any string you want
const KEY = '1234';  // Choose any random string as your private key

// Function to get the count privately
function logVisit() {
    fetch(`https://api.countapi.xyz/key/${KEY}/hit/${NAMESPACE}`)
        .catch(error => console.error('Error logging visit:', error));
}

// Make the check function globally accessible
window.checkVisits = function() {
    fetch(`https://api.countapi.xyz/key/${KEY}/get/${NAMESPACE}`)
        .then(response => response.json())
        .then(data => console.log('Total visits:', data.value))
        .catch(error => console.error('Error fetching count:', error));
}

// Log the visit when page loads
document.addEventListener('DOMContentLoaded', logVisit);