document.getElementById('shortenBtn').addEventListener('click', function() {
    const originalUrl = document.getElementById('urlInput').value;
    if (!originalUrl) {
        alert('Please enter a URL to shorten.');
        return;
    }

    // Generate a random string for the shortened URL
    const shortUrlCode = Math.random().toString(36).substring(2, 8);
    const shortUrl = `${window.location.origin}/${shortUrlCode}`;

    // Display the shortened URL
    const resultDiv = document.getElementById('result');
    const shortUrlLink = document.getElementById('shortUrl');
    shortUrlLink.href = originalUrl;  // In a real app, this would point to the shortened URL
    shortUrlLink.textContent = shortUrl;
    resultDiv.classList.remove('hidden');
});
