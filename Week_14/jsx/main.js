import {Component, createElement} from "./framework.js"
class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render(){
        console.log(this.attributes.src);
        this.root = document.createElement("div");
        this.root.classList.add("carousel");
        for(let record of this.attributes.src) {
            let child = document.createElement("div");
            child.style.backgroundImage = `url('${record}')`;
            //child.style.display = "none";
            this.root.appendChild(child);
        }

        let position = 0;

        this.root.addEventListener("mousedown", event => {
            let children = this.root.children;
            let startX = event.clientX;

            let move = event => {
                let x = event.clientX - startX;
                let current = position - ((x - x % 500) /500);
                
                for(let offset of [-1, 0, 1]) {
                    let pos = current + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "none";
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + x % 500}px)`;
                }
            };

            let up = event => {
                let x = event.clientX - startX;
                position = position - Math.round(x / 500);

                for(let offset of [0, -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "none";
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500}px)`;

                }

                /*for(let child of children) {
                    child.style.transition = "";
                    child.style.transform = `translateX(${-position * 500}px)`;
                }*/
                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            };
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        });

        /*let currentIndex = 0;
        setInterval(() => {
            let children = this.root.children;
            let nextIndex = (currentIndex+1) % children.length;
            let current = children[currentIndex];
            let next = children[nextIndex];
            next.style.transition = "none";
            next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

            setTimeout(() => {
                next.style.transition = "";
                current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
                next.style.transform = `translateX(${-nextIndex * 100}%)`;
                currentIndex = nextIndex;
            }, 16);
        
            for(let child of children) {
                child.style.transform = `translateX(-${current*100}%)`;
            }
        },3000);*/
        return this.root;
    }
    mountTo(parent) {
        parent.appendChild(this.render());
    }
}

let d = [
    "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&1966AE6B-E8E5-4D4A-AACA385519F64D03",
    "https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ",
    "https://specials-images.forbesimg.com/imageserve/6082931ef598a85b055afe77/960x0.jpg?cropX1=0&cropX2=3475&cropY1=182&cropY2=2137"
];

let a = <Carousel src={d} />
a.mountTo(document.body);