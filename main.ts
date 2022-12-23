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
function sync () {
    for (let index = 0; index <= snake.length - 1; index++) {
        list[index] = snake[index].get(LedSpriteProperty.Direction)
    }
}
function newFood () {
    food.set(LedSpriteProperty.X, randint(0, 4))
    food.set(LedSpriteProperty.Y, randint(0, 4))
    ok = 0
    for (let index = 0; index <= snake.length - 1; index++) {
        if (food.isTouching(snake[index])) {
            ok += 1
        }
    }
    if (ok != 0) {
        newFood()
    }
}
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
function move () {
    sync()
    tail = game.createSprite(snake[snake.length - 1].get(LedSpriteProperty.X), snake[snake.length - 1].get(LedSpriteProperty.Y))
    tail.change(LedSpriteProperty.Direction, snake[snake.length - 1].get(LedSpriteProperty.Direction))
    for (let index = 0; index <= snake.length - 2; index++) {
        snake[index + 1].set(LedSpriteProperty.Direction, list[index])
    }
    for (let index = 0; index <= snake.length - 1; index++) {
        if (snake[index].get(LedSpriteProperty.X) == 4 && snake[index].get(LedSpriteProperty.Direction) == 90) {
            snake[index].set(LedSpriteProperty.X, 0)
        } else if (snake[index].get(LedSpriteProperty.X) == 0 && snake[index].get(LedSpriteProperty.Direction) == -90) {
            snake[index].set(LedSpriteProperty.X, 4)
        } else if (snake[index].get(LedSpriteProperty.Y) == 0 && snake[index].get(LedSpriteProperty.Direction) == 0) {
            snake[index].set(LedSpriteProperty.Y, 4)
        } else if (snake[index].get(LedSpriteProperty.Y) == 4 && snake[index].get(LedSpriteProperty.Direction) == 180) {
            snake[index].set(LedSpriteProperty.Y, 0)
        } else {
            snake[index].move(1)
        }
    }
    if (food.isTouching(snake[0])) {
        snake.insertAt(snake.length - 0, tail)
        newFood()
    } else {
        tail.delete()
    }
    basic.pause(1000)
}
let tail: game.LedSprite = null
let ok = 0
let list: number[] = []
let food: game.LedSprite = null
let snake: game.LedSprite[] = []
snake = [game.createSprite(2, 2)]
food = game.createSprite(2, 2)
newFood()
basic.forever(function () {
    move()
})
