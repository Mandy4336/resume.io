// script.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  const messageBox = document.getElementById('messageBox');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        messageBox.textContent = '⚠️ Please fill out all fields.';
        messageBox.style.color
