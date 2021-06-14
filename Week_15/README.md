Study notes

# Animation
- setInterval(() => {}, 16) // not recommended
- setTimeout
```
let tick = () => {
    setTimeout(tick, 16)
}
```

- requestAnimationFrame & cancelAnimationFrame
```
let tick = () => {
    let handler = requestAnimationFrame(tick)
    cancelAnimationFrame(handler)
}
```
Question: webpack-dev-server vs webpack serve?



# Gesture

## Basic

### The difference between mouse events & touch events

### Basic knowlodge
- The threshold is 10px
- Start --end--> Tap
- Start --move 10px-> Pan start --move--> Pan --end--> Pan end
- Start --move 10px-> Pan start --move--> Pan --end & spend > ?--> Flick
- Start --0.5s--> Press start --end-> Press end
- Start --0.5s--> Press start --move 10px-> Pan start --move--> Pan --end--> Pan end
