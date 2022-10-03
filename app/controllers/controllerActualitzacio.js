const { default: inquirer } = require("inquirer");
const controlLocal = require("./controller");

function inquirerActualitzarFitxer() {
    controlLocal.llistarTotesLesTasques();
    // controlLocal.actualitzarFitxer();
    console.log(`\n`);
    return inquirer
        .prompt([
            {
                type: "number",
                name: "idTasca",
                message: "Identificador de la tasca a modificar:"
            },
        ])
        .then (async (answerId) => {
            let id = await controlLocal.actualitzarFitxer(answerId.idTasca);
            // console.log(llistatTodo.id)
            let tascaAModificar = tasques[id];
            console.log(`Usuari: ${tascaAModificar.usuari}`);
            console.log(`Tasca: ${tascaAModificar.nomTasca}`);
            console.log(`Estat Tasca: ${tascaAModificar.estat}`);
            // console.log(`Data Inicial: ${tasques[i].dataInici}`);
            // console.log(`Data final: ${tasques[i].dataFinal}`);
            console.log(`\n`);

            console.log(`\n`)
            return inquirer
                .prompt([
                    {
                        type: "list",
                        name: "propietatAModificar",
                        choices: [tascaAModificar.usuari, tascaAModificar.nomTasca, tascaAModificar.estat],
                        message: "Propietat a modificar:"
                    }
                ])
        }).then (async (propietatAModificar) => {
            console.log(propietatAModificar);
            return inquirer
                .prompt([
                    {
                        type: "input",
                        name: "valorNouPropietat",
                        message: "Introdueix el nou valor:"
                    }
                ])
        }).then (async (valorNouPropietat) => {
            console.log (valorNouPropietat);

                    //Local

                    //MongoDB
            
                    //Mysql

        })
        .catch((error) => {
            console.log(error);
        });
};

// Afegir  a  module.exports de    ==>>>  controllerInquirer.js 
