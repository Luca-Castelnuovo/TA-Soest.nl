const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const postalcode = document.querySelector('#postalcode');
const house = document.querySelector('#house');
const problem = document.querySelector('#problem');
const submit = document.querySelector('#submit');

submit.addEventListener("click", function() {
    jQuery.ajax({
        type: "POST",
        url: 'https://api.lucacastelnuovo.nl/mail/',
        dataType: "JSON",
        cache: false,
        data: {
            api_key: '2d7afd5f92589837f7d5e39b7fbb4ea6',
            to: 'info@ta-soest.nl',
            from_name: 'Afspraakformulier || TA-Soest',
            subject: 'Afspraakformulier || TA-Soest',
            body: '<table style=border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;background-color:#f6f6f6 border=0 cellpadding=0 cellspacing=0 class=body><tr><td style=font-family:sans-serif;font-size:14px;vertical-align:top> <td style="font-family:sans-serif;font-size:14px;vertical-align:top;display:block;Margin:0 auto;max-width:580px;padding:10px;width:580px"class=container><div class=content style="box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px"><span class=preheader style=color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0>Afspraak || TA-Soest</span><table style=border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;background:#fff;border-radius:3px class=main><tr><td style=font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px class=wrapper><table style=border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100% border=0 cellpadding=0 cellspacing=0><tr><td style=font-family:sans-serif;font-size:14px;vertical-align:top><p style=font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px>Beste Luca,<p style=font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px>Iemand heeft een afspraak gemaakt.<p style=font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px>Gegevens<br>Naam: ' + name.value + ',<br>Email: ' + email.value + ', Telefoon: ' + phone.value + ', Postcode: ' + postalcode.value + ', Huisnummer: ' + house.value + ',<br><br>Probleemomschrijving:<br><br>' + problem.value + '</table></table></div><td style=font-family:sans-serif;font-size:14px;vertical-align:top> </table>'
        },

        success: function(response) {
            if (response.status) {
                alert("Uw bericht is verstuurd");
            } else {
                alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
            }
        },

        error: function() {
            alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
        }
    });
});
