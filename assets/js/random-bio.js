document.addEventListener("DOMContentLoaded", function () {
  const bios = window.authorBios;

  if (!bios || bios.length === 0) {
    return;
  }

  const storageKey = "authorBio";

  let bio = sessionStorage.getItem(storageKey);

  if (!bio) {
    const randomIndex = Math.floor(Math.random() * bios.length);
    bio = bios[randomIndex];
    sessionStorage.setItem(storageKey, bio);
  }

  const bioElement = document.getElementById("author-bio");

  if (bioElement) {
    bioElement.innerHTML = bio;
  }
});