const { default: header } = require("./header");
import {body} from "./content";
import home from "./home";
import "./styles.css";

const page = () => {
    const container = document.querySelector('.container');
    container.append(header());
    const content = body();
    content.appendChild(home());
    container.append(content);
    return container;
    
}

let div = page();
