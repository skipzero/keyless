This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Kayles: Requirements

This repo contains a basic React implementation of Kayles, a simple two-player game. From [Wikipedia](https://en.wikipedia.org/wiki/Kayles):

> Kayles is played with a row of tokens, which represent bowling pins. The row may be of any length. The two players alternate; each player, on his or her turn, may remove either any one pin (a ball bowled directly at that pin), or two adjacent pins (a ball bowled to strike both). Under the normal play convention, a player loses when he or she has no legal move (that is, when all the pins are gone). The game can also be played using misère rules; in this case, the player who cannot move wins.

For this specific implementation of Kayles:

- Let's use misère rules: the player who cannot make a legal move wins.
- There should be 10 tokens in a row, but this should be easy to change.
- If a player removes two pins in a single turn, the pins must be adjacent.

# Run it

1. You'll need Node 10.16.0 or higher.
2. Run `npm install` from the top-level directory.
3. Run `npm start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

# The Challenge

1. Read the requirements above carefully and make sure the current implementation isn't missing anything. Note that currently you can manually select which players should play in each game and play that game, but there is no continuity between games.
2. Build a [single-elimination tournament](https://en.wikipedia.org/wiki/Single-elimination_tournament) layer on top of the existing Kayles implementation. You can assume that only 2^X players will be in a given tournament, but the specific number should be easy to change in your code. The app should automatically select the players that play next, and each player should play exactly once in each round. Note that we're not looking for a complicated tournament structure here -- a straightforward solution is preferred.
3. When a tournament is over, display who won (this can just be an `alert`).
4. Please come up with your own design and styling to replace the existing UI, which is intended as an example. Given the time constraints, we are not looking for a pixel-perfect interface, but feel free to get creative! Whatever you come up with, please make sure your UI clearly indicates:
   - Which players are currently playing
   - Which players are still in the tournament
   - Which players have been eliminated from the tournament
   - Whose turn it is

Please consider this as if writing "production" code, including maintenance considerations as though this would be worked on by a team of engineers. Also, please clearly indicate what steps you've taken to ensure confidence in the changes you're making, and what steps you'd take maintain that confidence if more changes were made in the future.

## Time

We expect that this will take 2-3 hours to complete, but please only spend as much time as you feel comfortable. We'll look at your work in the context of this time limitation. Part of what is interesting to us is what you prioritize.

## Existing code

The existing code will need to be changed to accommodate tournaments. It's also not very good code in various places so feel free to refactor as you need to, keeping time constraints in mind.

## If you have any questions, don't hesitate to email us!

You can reach out to Elena directly at elena@ohmconnect.com
