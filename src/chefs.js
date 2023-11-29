import chefOne from './Assets/Chefs/chefOne.jpg';
import chefTwo from './Assets/Chefs/chefTwo.jpeg';
import chefThree from './Assets/Chefs/chefThree.jpeg';
import chefFour from './Assets/Chefs/chefFour.jpeg';
import chefFive from './Assets/Chefs/chefFive.jpeg';
import chefSix from './Assets/Chefs/chefSix.jpeg';
import createCard from './createCard';

const chefPage = ()=>{
    const div = document.createElement('div');
    div.classList.add('content');

    const card = createCard('#161A30','Our Chef, your Kitchen','Our chefs don\'t just cook; they bring a culinary theater to your home. With skillful artistry, they transform your kitchen into a stage of flavors, leaving behind nothing but culinary masterpieces and a spotless kitchen. Experience the luxury of fine dining in the comfort of your home.')
    
    let pictures = [[chefOne,'Chef 1','Gourmet Food'],[chefTwo,'Chef 2','Italian food'],[chefThree,'Chef 3','Mediterranean food'],[chefFour,'Chef 4','Asian Food'],[chefFive,'Chef 5','Baker'],[chefSix,'Chef 6','Vegan Dishes']];

    card.style.boxShadow = '10px 10px 10px -4px rgba(0,0,0,0.75)';
    card.querySelector('.package-title').style.marginBottom = '0'
    div.appendChild(card);
    div.appendChild(createPortraits(pictures));
    

    return div;
}

const createPortraits = (pictures)=>{
    const div = document.createElement('div');
    for(let i = 0; i<pictures.length;i++){
        const cont = document.createElement('div');
        cont.classList.add('chef-container');
        const port = document.createElement('div');
        port.classList.add('portrait');
        port.style.backgroundImage = "url(\'"+pictures[i][0]+"\')";

        const name = document.createElement('div');
        const specialty = document.createElement('div');

        name.classList.add('chef-text');
        specialty.classList.add('chef-text');
        name.textContent = pictures[i][1];
        specialty.textContent = pictures[i][2];

        cont.appendChild(port);
        cont.appendChild(name);
        cont.appendChild(specialty);


         div.appendChild(cont);
    }
    div.classList.add('portraits');
    return div
}

export default chefPage;