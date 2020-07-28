const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { getMaxListeners, listenerCount } = require("process");

possibleNumberOfEmployeesArray = [1,2,3,4];

const teamQuestions = [{
    type: `string`,
    name: `managerName`,
    message: `Manager name?`
}, {
    type: `string`,
    name: `managerEmail`,
    message: `Manager email?`
}, {
    type: `string`,
    name: `managerOfficeNumber`,
    message: `Manager office number?`
}, {
    type: `list`,
    name: `numberOfInterns`,
    message: `How many Interns are a part of your team?`,
    choices: possibleNumberOfEmployeesArray
}, {
    type: `list`,
    name: `numberOfEngineers`,
    message: `How many Engineers are a part of your team?`,
    choices: possibleNumberOfEmployeesArray
}]

const oneIntern = [{
    type: `string`,
    name: `internName`,
    message: `Intern name?`
}, {
    type: `string`,
    name: `internEmail`,
    message: `Intern email?`
}, {
    type: `string`,
    name: `internSchool`,
    message: `Intern school?`
}]

const twoInterns = [{
    type: `string`,
    name: `firstInternName`,
    message: `First intern name?`
}, {
    type: `string`,
    name: `firstInternEmail`,
    message: `First intern email?`
}, {
    type: `string`,
    name: `firstInternSchool`,
    message: `First intern school?`
}, {
    type: `string`,
    name: `secondInternName`,
    message: `Second Intern name?`
}, {
    type: `string`,
    name: `secondInternEmail`,
    message: `Second Intern email?`
}, {
    type: `string`,
    name: `secondInternSchool`,
    message: `Second Intern school?`
}]

const threeInterns = [{
    type: `string`,
    name: `firstInternName`,
    message: `First intern name?`
}, {
    type: `string`,
    name: `firstInternEmail`,
    message: `First intern email?`
}, {
    type: `string`,
    name: `firstInternSchool`,
    message: `First intern school?`
}, {
    type: `string`,
    name: `secondInternName`,
    message: `Second Intern name?`
}, {
    type: `string`,
    name: `secondInternEmail`,
    message: `Second Intern email?`
}, {
    type: `string`,
    name: `secondInternSchool`,
    message: `Second Intern school?`
}, {
    type: `string`,
    name: `thirdInternName`,
    message: `Third Intern name?`
}, {
    type: `string`,
    name: `thirdInternEmail`,
    message: `Third Intern email?`
}, {
    type: `string`,
    name: `thirdInternSchool`,
    message: `Third Intern school?`
}]

const fourInterns = [{
    type: `string`,
    name: `firstInternName`,
    message: `First intern name?`
}, {
    type: `string`,
    name: `firstInternEmail`,
    message: `First intern email?`
}, {
    type: `string`,
    name: `firstInternSchool`,
    message: `First intern school?`
}, {
    type: `string`,
    name: `secondInternName`,
    message: `Second Intern name?`
}, {
    type: `string`,
    name: `secondInternEmail`,
    message: `Second Intern email?`
}, {
    type: `string`,
    name: `secondInternSchool`,
    message: `Second Intern school?`
}, {
    type: `string`,
    name: `thirdInternName`,
    message: `Third Intern name?`
}, {
    type: `string`,
    name: `thirdInternEmail`,
    message: `Third Intern email?`
}, {
    type: `string`,
    name: `thirdInternSchool`,
    message: `Third Intern school?`
}, {
    type: `string`,
    name: `fourthInternName`,
    message: `Fourth Intern name?`
}, {
    type: `string`,
    name: `fourthInternEmail`,
    message: `Fourth Intern email?`
}, {
    type: `string`,
    name: `fourthInternSchool`,
    message: `Fourth Intern school?`
}]

const oneEngineer = [{
    type: `string`,
    name: `engineerName`,
    message: `Engineer name?`
}, {
    type: `string`,
    name: `engineerEmail`,
    message: `Engineer email?`
}, {
    type: `string`,
    name: `engineerGithub`,
    message: `Engineer Github username?`
}]

const twoEngineers = [{
    type: `string`,
    name: `firstEngineerName`,
    message: `First engineer name?`
}, {
    type: `string`,
    name: `firstEngineerEmail`,
    message: `First engineer email?`
}, {
    type: `string`,
    name: `firstEngineerGithub`,
    message: `First Engineer Github username?`
}, {
    type: `string`,
    name: `secondEngineerName`,
    message: `Second Engineer name?`
}, {
    type: `string`,
    name: `secondEngineerEmail`,
    message: `Second Engineer email?`
}, {
    type: `string`,
    name: `secondEngineerGithub`,
    message: `Second Engineer Github username?`
}]

const threeEngineers = [{
    type: `string`,
    name: `firstEngineerName`,
    message: `First engineer name?`
}, {
    type: `string`,
    name: `firstEngineerEmail`,
    message: `First engineer email?`
}, {
    type: `string`,
    name: `firstEngineerGithub`,
    message: `First Engineer Github username?`
}, {
    type: `string`,
    name: `secondEngineerName`,
    message: `Second Engineer name?`
}, {
    type: `string`,
    name: `secondEngineerEmail`,
    message: `Second Engineer email?`
}, {
    type: `string`,
    name: `secondEngineerGithub`,
    message: `Second Engineer Github username?`
}, {
    type: `string`,
    name: `thirdEngineerName`,
    message: `Third Engineer name?`
}, {
    type: `string`,
    name: `thirdEngineerEmail`,
    message: `Third Engineer email?`
}, {
    type: `string`,
    name: `thirdEngineerGithub`,
    message: `Third Engineer Github username?`
}]

const fourEngineers = [{
    type: `string`,
    name: `firstEngineerName`,
    message: `First engineer name?`
}, {
    type: `string`,
    name: `firstEngineerEmail`,
    message: `First engineer email?`
}, {
    type: `string`,
    name: `firstEngineerGithub`,
    message: `First Engineer Github username?`
}, {
    type: `string`,
    name: `secondEngineerName`,
    message: `Second Engineer name?`
}, {
    type: `string`,
    name: `secondEngineerEmail`,
    message: `Second Engineer email?`
}, {
    type: `string`,
    name: `secondEngineerGithub`,
    message: `Second Engineer Github username?`
}, {
    type: `string`,
    name: `thirdEngineerName`,
    message: `Third Engineer name?`
}, {
    type: `string`,
    name: `thirdEngineerEmail`,
    message: `Third Engineer email?`
}, {
    type: `string`,
    name: `thirdEngineerGithub`,
    message: `Third Engineer Github username?`
}, {
    type: `string`,
    name: `fourthEngineerName`,
    message: `Fourth Engineer name?`
}, {
    type: `string`,
    name: `fourthEngineerEmail`,
    message: `Fourth Engineer email?`
}, {
    type: `string`,
    name: `fourthEngineerGithub`,
    message: `Fourth Engineer Github username?`
}]
    
function teamBuilder(){

    inquirer
     .prompt(teamQuestions)

     .then(a => {

        //let totalmembers = 1 + a.numberOfInterns + a.numberOfEngineers;
        //let m = 1;
        let i = a.numberOfInterns;
        let e = a.numberOfEngineers;
        let manager = new Manager(a.managerName, `Manager`, 1, a.managerEmail, a.managerOfficeNumber);
        
        if (i===1){
        inquirer
            .prompt(oneIntern)

            .then(b=>{

                let intern1 = new Intern (b.internName, `Intern`, 2, b.internEmail, b.internSchool);

                if (e===1){
                    inquirer
                        .prompt(oneEngineer)
            
                        .then(c=>{

                            let engineer1 = new Engineer (c.engineerName, `Engineer`, 3, c.engineerEmail, engineerGithub);
            
                    });
                } 

                if (e===2){
                    inquirer
                        .prompt(twoEngineers)
            
                        .then(c=>{

                            let engineer1 = new Engineer (c.firstEngineerName, `Engineer`, 3, c.firstEngineerEmail, firstEngineerGithub);
                            let engineer2 = new Engineer (c.secondEngineerName, `Engineer`, 3, c.secondEngineerEmail, secondEngineerGithub);
            
                    });
                } 

                if (e===3){

                    inquirer
                        .prompt(threeEngineers)
            
                        .then(c=>{

                            let engineer1 = new Engineer (c.firstEngineerName, `Engineer`, 3, c.firstEngineerEmail, firstEngineerGithub);
                            let engineer2 = new Engineer (c.secondEngineerName, `Engineer`, 3, c.secondEngineerEmail, secondEngineerGithub);
                            let engineer3 = new Engineer (c.thirdEngineerName, `Engineer`, 3, c.thirdEngineerEmail, thirdEngineerGithub);
            
                    });
                } 

                if (e===4){

                    inquirer
                        .prompt(fourEngineers)
            
                        .then(c=>{

                            let engineer1 = new Engineer (c.firstEngineerName, `Engineer`, 3, c.firstEngineerEmail, firstEngineerGithub);
                            let engineer2 = new Engineer (c.secondEngineerName, `Engineer`, 3, c.secondEngineerEmail, secondEngineerGithub);
                            let engineer3 = new Engineer (c.thirdEngineerName, `Engineer`, 3, c.thirdEngineerEmail, thirdEngineerGithub);
                            let engineer4 = new Engineer (c.fourthEngineerName, `Engineer`, 3, c.fourthEngineerEmail, fourthEngineerGithub);
            
                    });
                } 
                
        
        });
        } 


        if (i===2){
            inquirer
                .prompt(twoInterns)
    
                .then(b=>{

                    let intern1 = new Intern (b.firstInternName, `Intern`, 2, b.firstInternEmail, b.firstInternSchool);
                    let intern2 = new Intern (b.secondInternName, `Intern`, 3, b.secondInternEmail, b.secondInternSchool);
    
            });
        } 

        if (i===3){
            inquirer
                .prompt(threeInterns)
    
                .then(b=>{

                    let intern1 = new Intern (b.firstInternName, `Intern`, 2, b.firstInternEmail, b.firstInternSchool);
                    let intern2 = new Intern (b.secondInternName, `Intern`, 3, b.secondInternEmail, b.secondInternSchool);
                    let intern3 = new Intern (b.thirdInternName, `Intern`, 4, b.thirdInternEmail, b.thirdInternSchool);

    
            });
        } 

        if (i===4){
            inquirer
                .prompt(fourInterns)
    
                .then(b=>{

                    let intern1 = new Intern (b.firstInternName, `Intern`, 2, b.firstInternEmail, b.firstInternSchool);
                    let intern2 = new Intern (b.secondInternName, `Intern`, 3, b.secondInternEmail, b.secondInternSchool);
                    let intern3 = new Intern (b.thirdInternName, `Intern`, 4, b.thirdInternEmail, b.thirdInternSchool);
                    let intern4 = new Intern (b.fourthInternName, `Intern`, 4, b.fourthInternEmail, b.fourthInternSchool);
    
            });
        } 
         

});

}


teamBuilder();






// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```