$(document).ready(function(){

    var $reportBox = $('.report');

    var sendEMAIL = $('#sendR');
    var cancelEMAIL = $('#cancelR');

    var displayReportBox = $('#reportLink');

    displayReportBox.click(function(){
        $reportBox.slideToggle();
    });
    cancelEMAIL.click(function(){
        $reportBox.hide();
    });

    sendEMAIL.click(function(){
    var $name = $('#name').val();
    var $email = $('#reporter-email').val();
    var $message = $('#message').val();
    var $html = "<p style='font-size:20px;'>"+$message+"</p>";
        console.log($name);
        console.log($email);
        console.log($message);
        Email.send({
            Host : "smtp.sendgrid.net",
            Username : "apikey",
            Password : "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",
            To : 'environtech.company@gmail.com',
            From : $email,
            Subject : "Report from: "+ $name,
            Body : $html
        }).then(
          message => console.log(message)
        ); 
    });
});