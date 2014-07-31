HotCold
=======

This project is a simple guessing game base on a guess range of 1-100. The game will generate a random number and the user will have to guess the correct number. If the user's guess is 50 numbers greater than the actual number, it will display a "ice cold" css animation.

The hardest part about this project was trying to identity the checkpoint for each range of numbers under the categories for ice cold, cold, warm, hot, very hot

1) I took the absolute value of user input subtracted by the actual random number
2) For every range of 10 numbers, it will display the proper cold or hot css animation
3) Example: if the absolute value of user input subtracted by the actual random number is greater than 10 but less than 20 will display the "ice Cold" css animation

The most interesting part was creating the CSS animations for the cold or hot:

1) I created a pulse key frame and have it animate infinitely
2) The proper css animation will display while the other animations will have a opacity of 0.2 base on the user input
