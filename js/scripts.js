$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
  $("#Barry").hide();
  $("#Caitlin").hide();
  $("#Cisco").hide();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();

    var barryPoints = 0;
    var ciscoPoints = 0;
    var caitlinPoints = 0;

    if (question1 === "track") {
      barryPoints += 1;
    }
    else if (question1 ==="biology") {
      caitlinPoints += 1;
    }
    else {
      ciscoPoints += 1;
    }

    if (question2 === "Cold") {
      caitlinPoints += 1;
    }
    else if (question2 ==="Sarcastic") {
      ciscoPoints += 1;
    }
    else {
      barryPoints += 1;
    }

    if (question3 === "Darth Vader") {
      ciscoPoints += 1;
    }
    else if (question3 === "Charles Darwin") {
      caitlinPoints += 1;
    }
    else {
      barryPoints += 1;
    }
    if (barryPoints > caitlinPoints && barryPoints > ciscoPoints) {
      $("#Barry").show();
    }
    else if (caitlinPoints > barryPoints && caitlinPoints > ciscoPoints) {
      $("#Caitlin").show();
    }
    else if (ciscoPoints > barryPoints && ciscoPoints > caitlinPoints) {
      $("#Cisco").show();
    }
    else {
      alert("All points even");
    }
  });
});
