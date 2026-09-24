const sampleItemCount = 5;
const projectTitle = "Andrew Powers Favorite Games Project";
const terrariaRating = 9.9;
const persona5RoyalRating = 9.7;
const mistriaRating = 9.1;
const silksongRating = 9.7;
const isaacRating = 9.7;


const calculateAverage = (...numbers) => {
  return numbers.reduce((sum, val) => sum + val, 0) / numbers.length;
};
//googled. wanted a reusable average function.

const averageScore = calculateAverage(terrariaRating, persona5RoyalRating, mistriaRating, silksongRating, isaacRating);

const stringTemplateExample = `The current average score of all games is ${averageScore}`;


console.log("This is a project for me to create a list of my favorite games. I intend to create some interactable elements in the future, maybe like a game of snake.");

console.log(averageScore);

console.log(stringTemplateExample);

if (averageScore >= 9.5){
    console.log("It looks like these are really good games.");
}
else{
    console.log("These games average score is not above 9.5");
}