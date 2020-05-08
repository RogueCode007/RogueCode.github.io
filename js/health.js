      
      var agreeBox = document.getElementById("agree");
      var submitbtn = document.getElementById("submit-btn");
      submitbtn.addEventListener("click", function(){
        agreeBox.required = true;
      })
