const username = "AdamChoong0095"; // ← Replace with your GitHub username
const list = document.getElementById("project-list");

fetch(`https://api.github.com/users/${AdamChoong0095}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      // Skip forks or specific repos if needed
      if (repo.fork) return;

      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank";
      item.appendChild(link);
      list.appendChild(item);
    });
  })
  .catch(error => {
    console.error("Error fetching repos:", error);
    list.innerHTML = "<li>Failed to load projects 😞</li>";
  });
