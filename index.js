const MailGun = require('mailgun-js');

exports.getRandomColor = async (apiKey,domain,data) => {
    const mg = MailGun({apiKey: apiKey, domain: domain});
    await mg.messages().send(data, function (error, body) {
        return body;
    });
}