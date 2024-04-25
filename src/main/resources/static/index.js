 function regBillett() {
 let billett = {
     film: $("#film").val(),
     antall: $("#antall").val(),
      fornavn: $("#fornavn").val(),
     etternavn: $("#etternavn").val(),
    telefonnr: $("#telefonnr").val(),
     epost: $("#epost").val()
        };

    if (billett.fornavn === "") {
        $("#FNavn").html("Skriv inn fornavn!");
        feilTeller++
    } else {
        $("#FNavn").html("");
    }
    if (billett.etternavn === "") {
        $("#fENavn").html("Skriv inn etternavn!");
        feilTeller++
    } else {
        $("#fENavn").html("");
    }
//feil ved telefonnummer ikke er langt nok eller
// eller blankt
    if
    (billett.telefonnr === "" ||
        billett.telefonnr.length
        !== 8) {
        $("#fTlfNr").html("Skriv inn korrekt telefonnr!" +
            " Ingen mellomrom!");
        feilTeller++
    } else {
        $("#fTlfNr").html("")
    }
//Feil ved epost
    if (billett.epost === "") {
        $("#fEpost").html("Skriv inn epost!");
        feilTeller++
    } else {
        $("#fEpost").html("")
    }
//Hvis det ikke er noen feil, vises billetten.
        $.post("/lagre", billett, function () {
            hentAlle();
        })

        $(':input').val("")
        console.log(billett)



}


$(function () {
    hentAlle();
});
function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
        console.log(data);
    });
}
//Legger all data i en tabell
function formaterData(billetter) {
    let ut = "<table class = 'table table-striped'>" + "<tr>" +
        "<th> Film </th> <th> Antall billetter </th> <th>" +
        " Fornavn</th> <th> Etternavn </th>" +
        " <th>TlfNr</th><th>Epost</th>" +
        " </tr>"

    for (let i in billetter) {
        ut += "<tr><td>" + billetter[i].film + "</td><td>" +
            billetter[i].antall + "</td><td>" + billetter[i].fornavn + "</td><td>" +
            billetter[i].etternavn + "</td><td>" + billetter[i].telefonnr + "</td><td>" +
            billetter[i].epost + "</td>" +
            "<td> <button class='btn btn-danger' onclick='slettEnkeltBillett(" + billetter[i].id + ")'>Slett</button> </td>" +
            "<tr>"
    }
    $("#alleBillettene").html(ut);
}

// Sletter enkeltbilletter
function slettEnkeltBillett(id) {

    $.get("/slettBillett?id="+id, function () {
       hentAlle();
    });

}


//For å slette alle billeter
    function slettBilletter() {
         $.get("/slettAlle", function () {
                hentAlle();
            });

    }

