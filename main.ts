buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    if (snake[0].get(LedSpriteProperty.Direction) == 90) {
        snake[0].turn(Direction.Left, 90)
    } else if (snake[0].get(LedSpriteProperty.Direction) == 0) {
        snake[0].turn(Direction.Right, 90)
    } else if (snake[0].get(LedSpriteProperty.Direction) == -90) {
        snake[0].turn(Direction.Right, 90)
    } else if (snake[0].get(LedSpriteProperty.Direction) == 180) {
        snake[0].turn(Direction.Left, 90)
    }
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    if (snake[0].get(LedSpriteProperty.Direction) == 90) {
        snake[0].turn(Direction.Right, 90)
    } else if (snake[0].get(LedSpriteProperty.Direction) == 180) {
        snake[0].turn(Direction.Right, 90)
    } else if (snake[0].get(LedSpriteProperty.Direction) == -90) {
        snake[0].turn(Direction.Left, 90)
    } else if (snake[0].get(LedSpriteProperty.Direction) == 0) {
        snake[0].turn(Direction.Left, 90)
    }
})
let t = 0
let tt = 0
let snake: game.LedSprite[] = []
snake = [game.createSprite(2, 2), game.createSprite(1, 2), game.createSprite(0, 2)]
basic.forever(function () {
    for (let index = 0; index <= snake.length - 1; index++) {
        if (snake[index].get(LedSpriteProperty.X) == 4 && snake[index].get(LedSpriteProperty.Direction) == 90) {
            snake[index].set(LedSpriteProperty.X, 0)
        } else if (snake[index].get(LedSpriteProperty.X) == 0 && snake[index].get(LedSpriteProperty.Direction) == -90) {
            snake[index].set(LedSpriteProperty.X, 4)
        } else if (snake[index].get(LedSpriteProperty.Y) == 0 && snake[index].get(LedSpriteProperty.Direction) == 0) {
            snake[index].set(LedSpriteProperty.Y, 4)
        } else if (snake[index].get(LedSpriteProperty.Y) == 4 && snake[index].get(LedSpriteProperty.Direction) == 180) {
            snake[index].set(LedSpriteProperty.Y, 0)
        } else if (index != 0) {
            tt = snake[index].get(LedSpriteProperty.Direction)
            if (snake[index].get(LedSpriteProperty.Direction) != t) {
                snake[index].set(LedSpriteProperty.Direction, snake[index - 1].get(LedSpriteProperty.Direction))
            }
            snake[index].move(1)
            t = tt
        } else {
            snake[index].move(1)
            t = snake[index].get(LedSpriteProperty.Direction)
        }
    }
    basic.pause(1000)
})
