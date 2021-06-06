export function createElement(type, attributes, ...children) {
    let element;
    if(typeof type === "string"){
        element = new ElementWrapper(type);
    } else {
        element = new type;
    }
    for (let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        if (typeof child === "string") {
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }
    return element;
}

export class Component {
    
    constructor (type) {
        //this.root = this.render(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(child) {
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class ElementWrapper extends Component{
    constructor(type) {
        this.root = document.createElement(type);
    }
    
}

class TextWrapper extends Component{
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    
}


/*let d = [
    "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&1966AE6B-E8E5-4D4A-AACA385519F64D03",
    "https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=lJefJMMQ",
    "https://specials-images.forbesimg.com/imageserve/6082931ef598a85b055afe77/960x0.jpg?cropX1=0&cropX2=3475&cropY1=182&cropY2=2137"
];*/

//document.body.appendChild(a);

//a.mountTo(document.body);