function sendMail(contactForm) {
    emailjs.send("service_o5i0hir","template_savnrya", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "project_request": contactForm.projectsummary.value
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        }, 
        function(error) {
            console.log("FAILED", error);
        }
    );

    return false;
}