let snake = [game.createSprite(2, 2), game.createSprite(1, 2), game.createSprite(0, 2)]
basic.forever(function () {
    for (let index = 0; index <= snake.length - 1; index++) {
        if (snake[index].get(LedSpriteProperty.X) == 4) {
            snake[index].set(LedSpriteProperty.X, 0)
        } else if (snake[index].get(LedSpriteProperty.Y) == 4) {
            snake[index].set(LedSpriteProperty.Y, 0)
        } else {
            snake[index].move(1)
        }
    }
    basic.pause(200)
})
