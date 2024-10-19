
Handlebars.registerHelper('extrairDia', function(data_despesa) {
    if (!/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/.test(data_despesa)) {
        throw new Error("Formato de data inválido");
    }
    const partes = data_despesa.split(" ");
    const dataPartes = partes[0].split("/");
    return dataPartes[0];
});