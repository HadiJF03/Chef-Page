import myLogo from '../src/Assets/Logo.png';
import chefPage from './chefs';
import catering from './catering';
import home from './home';
import meals from './meals';
const controls = () => {
    const div = document.createElement('div');

    const home = document.createElement('button');
    const catering = document.createElement('button');
    const chefs = document.createElement('button');
    const meal = document.createElement('button');

    home.textContent = 'Home';
    catering.textContent = 'Catering';
    meal.textContent = 'Personal Meals';
    chefs.textContent = 'Our Chefs';

    home.setAttribute('data-key','home');
    home.addEventListener('click',updateContent);
    catering.setAttribute('data-key','catering');
    catering.addEventListener('click',updateContent);
    meal.setAttribute('data-key','meals');
    meal.addEventListener('click', updateContent);
    chefs.setAttribute('data-key','chefs');
    chefs.addEventListener('click', updateContent);


    div.appendChild(home);
    div.appendChild(catering);
    div.appendChild(meal);
    div.appendChild(chefs);

    div.classList.add('controls');
    return div;
}
const updateContent=(Event)=>{
    const buttons = document.querySelector('.controls').childNodes;
    buttons.forEach((el)=>{
        el.removeAttribute('id');
    })
    
    const div = document.querySelector('.content-container');
    div.innerHTML = "";

    let current =Event.target.dataset.key;
    if(current=='home'){ 
        div.appendChild(home());
        Event.target.setAttribute('id','active-button'); 
    }
    else if(current=='catering'){
        div.appendChild(catering());
        console.log(Event.target);
        Event.target.setAttribute('id','active-button'); 
    }
    else if(current=='meals'){
         div.appendChild(meals());
         Event.target.setAttribute('id','active-button'); 
    }
    else if(current=='chefs'){
         div.appendChild(chefPage());
         Event.target.setAttribute('id','active-button'); 
    }
}
const header = () => {
    const div = document.createElement('div');
    const logo = new Image();
    const control = controls();
    logo.classList.add('logo');
    div.classList.add('header');

    logo.src = myLogo;
    
    div.appendChild(logo);
    div.appendChild(control);


    return div;
}
export default header;
