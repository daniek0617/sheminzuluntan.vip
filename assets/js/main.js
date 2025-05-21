function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// 搜索功能（模糊过滤）
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;

  searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll("main article").forEach(article => {
      const visible = article.innerText.toLowerCase().includes(query);
      article.style.display = visible ? "" : "none";
    });
  });
});