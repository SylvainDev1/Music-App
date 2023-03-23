# Music-App
Groovebox-Like application

HTML, CSS, JS

Inspired by a code along video [Link](https://www.youtube.com/watch?v=2VJlzeEVL8A), I added my own ideas to practice the JS concepts I had learned 
and experiment with CSS like color variables or keyframes animation


**Features:**
- Play pads by clicking or use keyboard
- Pads light up when played
- Background color and text color are incremented by each pad play
- Automatic sound plays at 16, 32, 48 pad plays
- "Rocket launch" after 64 pad plays

**Technical challenges / Learnings:**
- Dynamic colors: 2 hsl color variables for uniformity + use of a 'counter' value to modify hue value of the colors dynamically.
- Mapping keys to sounds with JS KeyCodes array
- @keyframes for pads and rocket animations
- Trigger additional sound and rocket animation automatically with 'counter' value
