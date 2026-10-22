
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #fffaf3;
    color: #3e2723;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background-color: #3e2723;
    color: white;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

.hero {
    text-align: center;
    padding: 100px 20px;
    background-color: #ead7c3;
}

.hero h1 {
    font-size: 40px;
    margin-bottom: 15px;
}

.hero p {
    margin-bottom: 25px;
}

.btn {
    display: inline-block;
    background-color: #6f4e37;
    color: white;
    padding: 12px 22px;
    border-radius: 6px;
    text-decoration: none;
}

#menu, #contact {
    text-align: center;
    padding: 50px 20px;
}

.menu-items {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.item {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 10px #ddd;
    max-width: 250px;
}

.item p {
    margin: 12px 0;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #3e2723;
    color: white;
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
        gap: 15px;
    }

    nav a {
        margin: 0 8px;
    }

    .hero h1 {
        font-size: 30px;
    }

    .menu-items {
        flex-direction: column;
        align-items: center;
    }

    .item {
        width: 100%;
    }
}

const menuButton = document.querySelector(".btn");

menuButton.addEventListener("click", function() {
    console.log("Welcome to Cozy Cup Cafe!");
});
