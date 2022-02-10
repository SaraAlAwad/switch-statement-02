let info = document.getElementById("bundeslandInfo");
let result = document.getElementById("bundeslandInfoErgebnis");

function check() {
    console.log(info.value);
    let bundesland = info.value;

    switch (bundesland) {
        case "Baden-Württemberg":
            result.innerHTML = `
            Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt
            `;
            break;
        case "Bayern":
            result.innerHTML = `
                Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt
                `;
            break;
        case "Berlin":
            result.innerHTML = `
                    Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt
                    `;
            break;
        case "Brandenburg":
            result.innerHTML = `
                        Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt
                        `;
            break;
        case "Bremen":
            result.innerHTML = `
                            Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt
                            `;
            break;
        case "Hamburg":
            result.innerHTML = `
                            Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt
                            `;
            break;
        case "Hessen":
            result.innerHTML = `
                                Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt
                                `;
            break;
        case "Nordrhein-Westfalen":
            result.innerHTML = `
                                    Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt
                                    `;
            break;
        default:
            document.write("Ein solches Bundesland gibt es in Deutschland nicht.")
    }
}