let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitRepos").innerHTML = gitObject.repos_url;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/Anders44", true);
gitHubRequest.send();