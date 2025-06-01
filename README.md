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
- Uses the outdated chessboardjs instead of chessboard2 (Couldn't get it to work with chessboard2, had to stick with chessboardjs)
- Not sure about the code's reliability - Not enough testing has been done.

Feel free to fork this project, just credit me pls. (I worked hard on this)
