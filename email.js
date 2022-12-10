const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	host:"smtp.gmail.com",
	auth: {
		user: 'rajsony646@gmail.com',
		pass: 'Raj@646Sony'
	}
});

let mailDetails = {
	from: 'rajsony646@gmail.com',
	to: 'visheshpanchal145@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log(err);
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});
