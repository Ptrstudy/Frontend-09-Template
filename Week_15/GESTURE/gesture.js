let element = document.documentElement;

let isListeningMouse = false;

element.addEventListener("mousedown", event => {
    //console.log(event.button);
    let context = Object.create(null);
    contexts.set("mouse" + (1 << event.button), context);
    start(event, context);
    let mousemove = event => {
        //console.log(event.clientX, event.clientY);

        let button = 1;
        while(button <= event.buttons) {
            if(button & event.buttons){
                let key; // switch the incorrect order for mouse keys
                if(button === 2) {
                    key = 4;
                } else if(button === 4) {
                    key = 2;
                } else {
                    key = button;
                }
                let context = contexts.get("mouse" + key);
                move(event, context);
            }
            button = button << 1;
        }
    }
    let mouseup = event => {
        let context = contexts.get("mouse" + (1 << event.button));
        end(event, context);
        contexts.delete("mouse" + (1 << event.button));
        if(event.buttons === 0){
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
            isListeningMouse = false;
        }

    }
    if (!isListeningMouse) {
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
        isListeningMouse = true;
    }

})

let contexts = new Map();

element.addEventListener("touchstart", event => {
    for(let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context);

    }
})

element.addEventListener("touchmove", event => {
    for(let touch of event.changedTouches) {
        //console.log("Move:", touch.clientX, touch.clientY);
        let context = contexts.get(touch.identifier);
        move(touch, context);
    }
})

element.addEventListener("touchend", event => {
    for(let touch of event.changedTouches) {
        //console.log("End:", touch.clientX, touch.clientY);
        let context = contexts.get(touch.identifier);
        end(touch, context);
        contexts.delete(touch.identifier);
    }
})

element.addEventListener("touchcancel", event => {
    for(let touch of event.changedTouches) {
        //console.log("Cancel:", touch.clientX, touch.clientY);
        let context = contexts.get(touch.identifier);
        cancel(touch, context);
        contexts.delete(touch.identifier);
    }
})

/*let handler;
let startX, startY;
let isTap = true;
let isPan = false;
let isPress = false;*/

let start = (point, context) => {
    //console.log("Start:", point.clientX, point.clientY);
    context.startX = point.clientX, context.startY = point.clientY;
    context.isPan = false;
    context.isTap = true;
    context.isPress = false;
    context.handler = setTimeout(() => {
        context.isTap = false;
        context.isPan = false;
        context.isPress = true;
        context.handler = null;
        console.log("press");
    }, 500);
}

let move = (point, context) => {
    let dx = point.clientX = context.startX, dy = point.clientY = context.startY;

    if(!context.isPan && dx ** 2 + dy ** 2 > 100) {
        context.isPan = true;
        context.isTap = false;
        context.isPress = false;
        console.log("Panstart");
        clearTimeout(context.handler);
    }
    if(context.isPan) {
        console.log("Pan", dx, dy);
        console.log("Pan");
    }
    //console.log("Move:", point.clientX, point.clientY);

}
let end = (point, context) => {
    if(context.isTap) {
        console.log("tap");
        dispatch("tap", {});
        clearTimeout(context.handler);
    }
    if(context.isPan) {
        console.log("Panend");
    }
    if(context.isPress) {
        console.log("Pressend");
    }
    //console.log("End:", point.clientX, point.clientY);

}
let cancel = (point, context) => {
    clearTimeout(context.handler);
    console.log("Cancel:", point.clientX, point.clientY);
}

function dispatch(type, properties) {
    let event = new Event(type);
    for(let name in properties) {
        event[name] = properties[name];
    }
    element.dispatchEvent(event);
}