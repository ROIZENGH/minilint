let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = [];

/*
Make every word an element in an array.
It's easier to use built-in function split.
*/
let i = 0;

while( i != -1){
  if(story.indexOf(" ",i) === -1){
    storyWords.push(story.slice(i,story.length));
    i = -1;
  }
  else{
    storyWords.push(story.slice(i,story.indexOf(" ",i)));
    i=story.indexOf(" ",i)+1;
  }
};

const betterWords = storyWords.filter(word => unnecessaryWords.indexOf(word)===-1);

const countOverusedWords = storyWords.filter(word => overusedWords.indexOf(word)!=-1).length;

let numberOfSentences = 0;

storyWords.forEach(word => {
    if (word.endsWith("!") || word.endsWith(".")){
        numberOfSentences++
        }
    }
    );

const summary = () =>{
  console.log(
      `The number of words in your story is: ${storyWords.length}. 
        \nThe number of sentences in your story is: ${numberOfSentences}. 
        \nThe number of times each overused word appears in your story is: ${countOverusedWords}.`
    );
};

summary();

console.log(betterWords.join(" "));

