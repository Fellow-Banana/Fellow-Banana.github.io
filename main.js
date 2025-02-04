document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in class once the page is loaded
    document.body.classList.add("fade-in");
});

// GitHub API URL
const githubUrl = 'https://api.github.com/users/Fellow-Banana'; // Replace with your GitHub username

// Fetch GitHub profile data
fetch(githubUrl)
    .then(response => response.json())
    .then(data => {
        // Grab the profile data
        const profileHTML = `
            <h3><a href="${data.html_url}" target="_blank" style="color: #f6f8fa;">${data.name}</a></h3>
            <p>${data.bio}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
            <img src="${data.avatar_url}" alt="${data.name}" style="width: 100%; max-width: 120px; border-radius: 50%;">
        `;
        
        // Insert the profile data into the page
        document.getElementById('github-profile').innerHTML = profileHTML;
    })
    .catch(error => {
        console.error('Error fetching GitHub data:', error);
        document.getElementById('github-profile').innerHTML = '<p>Failed to load GitHub profile.</p>';
    });
