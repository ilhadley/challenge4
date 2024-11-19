import { storeLocalStorage, redirectPage } from "./logic";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const submitButton = document.getElementById("submit");
  const errorElement = document.getElementById("error");

  //const redirectPage = function (url) {
    //  location.assign(url);
    //};

const handleFormSubmission = (event) => {
    event.preventDefault();

    const formData = {
      username: username.value,
      title: title.value,
      content: content.value,
    };

if(!username.value || !title.value || !content.value) {
    errorElement.style.display = 'block';
    errorElement.textContent = "Please fill out all fields";
    return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const post = {
      title: title.value,
      content: content.value
    };
    storeLocalStorage(post);
    redirectPage("view.html");
  });
}
