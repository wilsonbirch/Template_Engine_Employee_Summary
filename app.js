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

        let i = a.numberOfInterns;
        let e = a.numberOfEngineers;
        let manager = new Manager(a.managerName, 1, a.managerEmail, a.managerOfficeNumber);
        
        if (e===1){
        inquirer
            .prompt(oneEngineer)

            .then(b=>{

                let engineer1 = new Engineer (b.engineerName, 2, b.engineerEmail, b.engineerGithub);
                

                if (i===1){
                    inquirer
                        .prompt(oneIntern)
            
                        .then(c=>{

                            let intern1 = new Intern (c.internName, 3, c.internEmail, c.internSchool);
                            let employees = [manager, intern1, engineer1];
                            fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                if (err){
                                    return console.log(`err`);
                                }

                                console.log(`Team has been successfully generated!`)
                            });
            
                    });
                } 

                if (i===2){
                    inquirer
                        .prompt(twoInterns)
            
                        .then(c=>{

                            let intern1 = new Intern (c.firstInternName, 3, c.firstInternEmail, c.firstInternSchool);
                            let intern2 = new Intern (c.secondInternName, 4, c.secondInternEmail, c.secondInternSchool);
                            let employees = [manager, intern1, intern2, engineer1];
                            fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                if (err){
                                    return console.log(`err`);
                                }
                                console.log(`Team has been successfully generated!`)
                            });
                            
            
                    });
                } 

                if (i===3){

                    inquirer
                        .prompt(threeInterns)
            
                        .then(c=>{

                            let intern1 = new Intern (c.firstInternName,  3, c.firstInternEmail, c.firstInternSchool);
                            let intern2 = new Intern (c.secondInternName,  4, c.secondInternEmail, c.secondInternSchool);
                            let intern3 = new Intern (c.thirdInternName,  5, c.thirdInternEmail, c.thirdInternSchool);
                            let employees = [manager, intern1, intern2, intern3, engineer1];
                            fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                if (err){
                                    return console.log(`err`);
                                }
                                console.log(`Team has been successfully generated!`)
                            });
            
                    });
                } 

                if (i===4){

                    inquirer
                        .prompt(fourInterns)
            
                        .then(c=>{

                            let intern1 = new Intern (c.firstInternName,  3, c.firstInternEmail, c.firstInternSchool);
                            let intern2 = new Intern (c.secondInternName,  4, c.secondInternEmail, c.secondInternSchool);
                            let intern3 = new Intern (c.thirdInternName,  5, c.thirdInternEmail, c.thirdInternSchool);
                            let intern4 = new Intern (c.fourthInternName,  6, c.fourthInternEmail, c.fourthInternSchool);
                            let employees = [manager, intern1, intern2, intern3, intern4, engineer1];
                            fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                if (err){
                                    return console.log(`err`);
                                }
                                console.log(`Team has been successfully generated!`)
                            });


            
                    });
                } 
                
        
        });
        } 


        if (e===2){
            inquirer
                .prompt(twoEngineers)
    
                .then(b=>{

                    let engineer1 = new Engineer (b.firstEngineerName, 2, b.firstEngineerEmail, b.firstEngineerGithub);
                    let engineer2 = new Engineer (b.secondEngineerName, 3, b.secondEngineerEmail, b.secondEngineerGithub);

                    if (i===1){
                        inquirer
                            .prompt(oneIntern)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.internName, 4, c.internEmail, c.internSchool);
                                let employees = [manager, intern1, engineer1, engineer2];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
    
                                    console.log(`Team has been successfully generated!`)
                                });
                
                        });
                    } 
    
                    if (i===2){
                        inquirer
                            .prompt(twoInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName, 4, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName, 5, c.secondInternEmail, c.secondInternSchool);
                                let employees = [manager, intern1, intern2, engineer1, engineer2];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
                                
                
                        });
                    } 
    
                    if (i===3){
    
                        inquirer
                            .prompt(threeInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName,  4, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName,  5, c.secondInternEmail, c.secondInternSchool);
                                let intern3 = new Intern (c.thirdInternName,  6, c.thirdInternEmail, c.thirdInternSchool);
                                let employees = [manager, intern1, intern2, intern3, engineer1, engineer2];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
                
                        });
                    } 
    
                    if (i===4){
    
                        inquirer
                            .prompt(fourInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName,  3, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName,  4, c.secondInternEmail, c.secondInternSchool);
                                let intern3 = new Intern (c.thirdInternName,  5, c.thirdInternEmail, c.thirdInternSchool);
                                let intern4 = new Intern (c.fourthInternName,  6, c.fourthInternEmail, c.fourthInternSchool);
                                let employees = [manager, intern1, intern2, intern3, intern4, engineer1, engineer2];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
    
    
                
                        });
                    } 

    
            });
        } 

        if (e===3){
            inquirer
                .prompt(threeEngineers)
    
                .then(b=>{

                    let engineer1 = new Engineer (b.firstEngineerName, 2, b.firstEngineerEmail, b.firstEngineerGithub);
                    let engineer2 = new Engineer (b.secondEngineerName, 3, b.secondEngineerEmail, b.secondEngineerGithub);
                    let engineer3 = new Engineer (b.thirdEngineerName, 4, b.thirdEngineerEmail, b.thirdEngineerGithub);

                    if (i===1){
                        inquirer
                            .prompt(oneIntern)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.internName, 5, c.internEmail, c.internSchool);
                                let employees = [manager, intern1, engineer1, engineer2, engineer3];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
    
                                    console.log(`Team has been successfully generated!`)
                                });
                
                        });
                    } 
    
                    if (i===2){
                        inquirer
                            .prompt(twoInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName, 5, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName, 6, c.secondInternEmail, c.secondInternSchool);
                                let employees = [manager, intern1, intern2, engineer1, engineer2, engineer3];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
                                
                
                        });
                    } 
    
                    if (i===3){
    
                        inquirer
                            .prompt(threeInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName,  5, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName,  6, c.secondInternEmail, c.secondInternSchool);
                                let intern3 = new Intern (c.thirdInternName,  7, c.thirdInternEmail, c.thirdInternSchool);
                                let employees = [manager, intern1, intern2, intern3, engineer1, engineer2, engineer3];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
                
                        });
                    } 
    
                    if (i===4){
    
                        inquirer
                            .prompt(fourInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName,  5, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName,  6, c.secondInternEmail, c.secondInternSchool);
                                let intern3 = new Intern (c.thirdInternName,  7, c.thirdInternEmail, c.thirdInternSchool);
                                let intern4 = new Intern (c.fourthInternName,  8, c.fourthInternEmail, c.fourthInternSchool);
                                let employees = [manager, intern1, intern2, intern3, intern4, engineer1, engineer2, engineer3];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
    
    
                
                        });
                    } 

    
            });
        } 

        if (e===4){
            inquirer
                .prompt(fourEngineers)
    
                .then(b=>{

                    let engineer1 = new Engineer (b.firstEngineerName, 2, b.firstEngineerEmail, b.firstEngineerGithub);
                    let engineer2 = new Engineer (b.secondEngineerName, 3, b.secondEngineerEmail, b.secondEngineerGithub);
                    let engineer3 = new Engineer (b.thirdEngineerName, 4, b.thirdEngineerEmail, b.thirdEngineerGithub);
                    let engineer4 = new Engineer (b.fourthEngineerName, 5, b.fourthEngineerEmail, b.fourthEngineerGithub);

                    if (i===1){
                        inquirer
                            .prompt(oneIntern)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.internName, 6, c.internEmail, c.internSchool);
                                let employees = [manager, intern1, engineer1, engineer2, engineer3, engineer4];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
    
                                    console.log(`Team has been successfully generated!`)
                                });
                
                        });
                    } 
    
                    if (i===2){
                        inquirer
                            .prompt(twoInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName, 6, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName, 7, c.secondInternEmail, c.secondInternSchool);
                                let employees = [manager, intern1, intern2, engineer1, engineer2, engineer3, engineer4];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
                                
                
                        });
                    } 
    
                    if (i===3){
    
                        inquirer
                            .prompt(threeInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName,  6, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName,  7, c.secondInternEmail, c.secondInternSchool);
                                let intern3 = new Intern (c.thirdInternName,  8, c.thirdInternEmail, c.thirdInternSchool);
                                let employees = [manager, intern1, intern2, intern3, engineer1, engineer2, engineer3, engineer4];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
                
                        });
                    } 
    
                    if (i===4){
    
                        inquirer
                            .prompt(fourInterns)
                
                            .then(c=>{
    
                                let intern1 = new Intern (c.firstInternName,  6, c.firstInternEmail, c.firstInternSchool);
                                let intern2 = new Intern (c.secondInternName,  7, c.secondInternEmail, c.secondInternSchool);
                                let intern3 = new Intern (c.thirdInternName,  8, c.thirdInternEmail, c.thirdInternSchool);
                                let intern4 = new Intern (c.fourthInternName,  9, c.fourthInternEmail, c.fourthInternSchool);
                                let employees = [manager, intern1, intern2, intern3, intern4, engineer1, engineer2, engineer3, engineer4];
                                fs.writeFile(__dirname + `/output/team.html`, render(employees), function(err) {
                                    if (err){
                                        return console.log(`err`);
                                    }
                                    console.log(`Team has been successfully generated!`)
                                });
    
    
                
                        });
                    } 
    
            });
        } 
         

});

}


teamBuilder();
