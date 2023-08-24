const fs = require('fs');

const inquirer = require('inquirer');

const qr = require('qr-image');

inquirer
    .prompt([
        {
        message: 'Enter the name of website to create QR Code',
        name: 'URL'
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qrcode.png'));

        // fs.writeFile("URL.txt", url, (err) => {
        //     if(err) throw err;
        //     console.log("The file has been saved!");
        // });
    })
    .catch((error) => {
        if(error.isTtyError) {
            // something
        } else {
            // something else im pretty sure
        }
    });