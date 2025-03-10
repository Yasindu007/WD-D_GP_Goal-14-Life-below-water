document.addEventListener('DOMContentLoaded', function() {


    function checkradioinputs() {
        var validityx = false;
        var x = document.getElementsByName('satisfaction');
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) {
                validityx = true;
                break;
            }
        }
        if (!validityx) {
            alert("Please select one from the rating scale");
        }
        return validityx;
    }

    function checkemailvalidity(email) {
        const validemailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return validemailRegex.test(email);
    }

    document.querySelector('.feedback-form').addEventListener('submit', function(event) {
       
        let isvalids=true;

        if (!checkemailvalidity(email.value)) {
            event.preventDefault();
            alert('Please enter a valid email address');
            isvalids=false;
        }
        if (!checkradioinputs()) {
            event.preventDefault();
            isvalids=false;

        }
        if(isvalids){
            alert('Thank you for your FeedBack')
        }
    });
    
});