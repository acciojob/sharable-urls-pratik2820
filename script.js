// your code here
document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Get values from input fields
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;

      // Construct the query string
      var queryString = "name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

      // Update the URL text
      document.getElementById("url").textContent = "https://localhost:8080/?" + queryString;
    });
