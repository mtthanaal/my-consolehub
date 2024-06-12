function sendForm() {
  // Get the form element
  var form = document.getElementById("feedback");

  // Get the values from the form fields
  var satisfaction = form.elements["Satisfaction"].value;
  var reasonForRating = form.elements["reason-for-rating"].value;
  var deviceOptionUsed = form.elements["device-option-used"].value;
  var nextDeviceOption = form.elements["next-device-option"].value;

  //  the email content
  var subject = "Feedback Form Submission";
  var body =
    "Satisfaction Rating: " +
    satisfaction +
    "\nReason for Rating: " +
    reasonForRating +
    "\nDevice Option Used: " +
    deviceOptionUsed +
    "\nNext Device Option: " +
    nextDeviceOption;

  // Create the mailto link
  var mailtoLink =
    "mailto:geeth.20221821@iit.ac.lk" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  // Open the user's email
  window.location.href = mailtoLink;

  // Show the "Thank You" message after submission
  var thankYouContainer = document.getElementById("thankYouContainer");
  thankYouContainer.style.display = "block";
}
