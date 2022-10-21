function tester() {
  var message;
  if (confirm("Press a button!")) {
    message = "You pressed OK!";
  } else {
    message = "You pressed Cancel!";
  }
  console.log(message);
}
tester();
