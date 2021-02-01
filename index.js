const MailGun = require('mailgun-js');

exports.getRandomColor = (apiKey,domain,data,callback) => {
    try{
        const mg = MailGun({apiKey: apiKey, domain: domain});
        mg.messages().send(data, async function (error, body) {
            await callback(body);
        });
    } catch(ex){
        console.error(ex);
    }
}
