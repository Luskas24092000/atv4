
function buscarPerfil() {
    var user = document.getElementById("username").value;

    if (user) {
        var url = "https://api.github.com/users/" + user;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Not Found") {
                    alert("Usuário não encontrado");
                } else {
                    document.getElementById("profile-image").src = data.avatar_url;
                    document.getElementById("name").innerText = data.name;
                    document.getElementById("login").innerText = data.login;
                    document.getElementById("bio").innerText = data.bio;
                    document.getElementById("public_repos").innerText = data.public_repos;
                    document.getElementById("seguindo").innerText = data.following;
                    document.getElementById("seguidores").innerText = data.followers;
                    document.getElementById("github").href = data.html_url;
                    document.getElementById("twitter").href = "https://twitter.com/" + data.login;
                    document.getElementById("instagram").href = "https://www.instagram.com/" + data.login;

                    if (data.blog) {
                        var card = '<a href="' + data.blog + '" class="card" target="_blank"><img src="https://github.com/lepture/github-cards/blob/gh-pages/default-medium.png?raw=true" alt="GitHub Card" class="card-image"></a>';
                        document.getElementById("github-card").innerHTML = card;
                    }
                }
            })
            .catch(error => console.error("Error:", error));
    } else {
        alert("Por favor, insira um nome de usuário");
    }
}











