maintitle=document.getElementById("maintitle");
submit = document.getElementById("stylebutton");


document.querySelectorAll('.stylebutton').forEach(function(e) {
    e.addEventListener('click', function() {
      this.style.backgroundColor = "red";
    })
  });