document.body.innerHTML = `
<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f2f6fc;
        text-align: center;
        color: #222;
    }

    header {
        background: #0078d4;
        color: white;
        padding: 20px;
    }

    .container {
        padding: 70px 20px;
    }

    h1 {
        font-size: 40px;
        margin-bottom: 15px;
    }

    p {
        font-size: 18px;
        color: #555;
    }

    button {
        padding: 12px 25px;
        background: #0078d4;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background: #005a9e;
    }

    footer {
        margin-top: 80px;
        padding: 15px;
        background: #222;
        color: white;
    }
</style>

<header>
    <h2>My Azure Website</h2>
</header>

<div class="container">
    <h1>Welcome to Azure App Service</h1>
    <p>This simple website is built with JavaScript.</p>
    <button onclick="welcomeUser()">Get Started</button>
</div>

<footer>
    © 2026 My Azure Website
</footer>
`;

function welcomeUser() {
    alert("Welcome! Your Azure website is working.");
}
