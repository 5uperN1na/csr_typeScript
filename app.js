//created function called displayPosition that takes parameters for company name, job title, and description
function displayPosition(name, career, description) {
    console.log('Name:' + ' ' + name.toUpperCase() + '' + '\n' + 'Career:' + ' ' + career + '\n' + 'Description:' + ' ' + description);
}
//calling displayPosition function
displayPosition('Paula Suarez', 'VP of IT', 'Crazy-passionate individual about making it happen!');
//created array with interests and a for each loop to display each interest on a separate line.
var interests = ['Travel', 'Languages', 'Cultures', 'Cooking', 'Sewing', 'Writing'];
//console.log('\n' + 'My Interests:' + '\n' + '*' + me.interests[0] + '\n' + '*' + me.interests[1] + '\n' + '*' + me.interests[2] + '\n' + '*' + me.interests[3] + '\n' + '*' + me.interests[4] + '\n');
console.log('\n' + 'My Interests:');
interests.forEach(function (interests) {
    console.log('*' + ' ' + interests);
});
//created array for previous experience and a for each loop to display experiences each in a separate line.
var experience = ['Director of IT for Dickeys Barbecue Resturants, Inc.', 'Senior Business Analyst for RealPage, Inc.', 'IT Manager for Lincoln Property Company', 'IT Coordinator for Lincoln Property Company'];
console.log('\n' + 'My Previous Experience:');
experience.forEach(function (experience) {
    console.log('*' + ' ' + experience);
});
//Created displaySkill that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, print BAM: in front of the skill name only if the skill is cool. 
function displaySkill(thinker, consultant, solver, analyst, communicator) {
    console.log('\n' + 'My Skills:');
    var s1 = 'cool';
    var s2 = 'not cool';
    var s3 = 'cool';
    var s4 = 'cool';
    var s5 = 'not cool';
    if (s1 == 'cool') {
        console.log('\n' + '*' + ' ' + 'BAM' + ' ' + thinker);
    }
    else {
        console.log('\n' + '*' + ' ' + thinker);
    }
    if (s2 == "cool") {
        console.log('\n' + '*' + ' ' + 'BAM' + ' ' + consultant);
    }
    else {
        console.log('\n' + '*' + ' ' + consultant);
    }
    if (s3 == "cool") {
        console.log('\n' + '*' + ' ' + 'BAM' + ' ' + solver);
    }
    else {
        console.log('\n' + '*' + ' ' + solver);
    }
    if (s4 == "cool") {
        console.log('\n' + '*' + ' ' + 'BAM' + ' ' + analyst);
    }
    else {
        console.log('\n' + '*' + ' ' + analyst);
    }
    if (s5 == "cool") {
        console.log('\n' + '*' + ' ' + 'BAM' + ' ' + communicator);
    }
    else {
        console.log('\n' + '*' + ' ' + communicator);
    }
}
displaySkill('Big Picture Thinker', 'Top Consultant', 'Constant Problem Solver', 'Gap Analyst', 'Go-Between-Communicator');
