
# guava-chess
 Multiplayer online chess game, based on invite links. (forked from almatrass/chess-site)

## Features
 - Modern CSS styling.
 - Game ID generation uses UUIDv4. - Unlikely to collide.
 - Prevents spoofing & more than 2 players in the same game.
 - Robots.txt asks bots not to visit - to prevent schools from crawling the website and adding it to a blacklist.

## Flaws (for now)
- You can make your own invite link by directly modifying the URL. I'm not sure how to feel about that...
- No chat function.
- No ability to change pieces & board theme.
- Can't change from dark to light theme.
- Promoted pawns auto-promote to queen. (Instead of letting the user choose)
- Uses the outdated chessboardjs instead of chessboard2 (Couldn't get it to work with chessboard2, had to stick with chessboardjs)
- Not sure about the code's reliability - Not enough testing has been done.

## How to build & run
Node.js & npm are required.

In the root folder, do `npm install` to install all the packages needed (socket.io, express, http, etc.)

To launch the server from the root folder, do `cd server;node server.js`. (On Linux/Mac; might be different for Windows)

If you're already in the server folder, just do `node server.js`.

## Screenshots
![Screenshot_20250601_161944](https://github.com/user-attachments/assets/ac98e175-0396-44d5-aade-e07da801f6e4)
![image](https://github.com/user-attachments/assets/0ea6b9d3-71ab-4453-a810-751afafc4309)

## It's open source.
Feel free to fork this project, just credit me pls. (I worked hard on this)
