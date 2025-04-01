document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var message = document.getElementById("message");

    // Podmień URL na swój link Mailchimp API
    var mailchimpUrl = "https://XXXXXXX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members/";

    fetch(mailchimpUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "apikey YOUR_API_KEY"
        },
        body: JSON.stringify({
            email_address: email,
            status: "subscribed"
        })
    })
    .then(response => {
        if (response.ok) {
            message.innerText = "Dziękujemy za zapis!";
            message.style.color = "green";
        } else {
            message.innerText = "Błąd! Spróbuj ponownie.";
            message.style.color = "red";
        }
    })
    .catch(error => {
        message.innerText = "Błąd połączenia!";
        message.style.color = "red";
    });
});
