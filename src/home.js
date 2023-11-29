import dishOne from './Assets/Home-Dishes/dishOne.jpeg';
import dishTwo from './Assets/Home-Dishes/dishTwo.jpeg';
import dishThree from './Assets/Home-Dishes/dishThree.jpeg';
import createCard from './createCard';
import halalLogo from './Assets/halal.png';
const home = () =>{
    const div = document.createElement('div');
    div.classList.add('content');

    let pictures = [dishOne,dishTwo,dishThree];
    div.appendChild(createBoxes(pictures));

    const cardOne = createInfoCard();
    const cardTwo = createInfoCard();

    cardOne.textContent = 'Embark on a culinary journey with us, where your satisfaction is our canvas and exceptional dining experiences are the masterpiece. At Chef-To-Door, we blend the art of fine cuisine with the warmth of unparalleled service. Our mission is to transform your every meal into a poetic encounter, leaving a symphony of flavors that resonate with your most cherished moments. Let us be the architects of your gastronomic delights, crafting experiences that go beyond mere satisfaction - they enchant, they linger, they redefine dining.';
    cardTwo.textContent = 'Discover a world where culinary dreams come true. Our website is your gateway to: \n Exquisite Catering Services: From intimate gatherings to grand celebrations.\n Personal Chef Experience: Bespoke meals, cooked in your kitchen, leaving no trace but delicious memories. \n Customizable Personal Meals: Your choice, our creation - delivered right to your doorstep. \nStudent Delight Program: Exclusive discounts for the university community. \n Event Bundles: Tailored packages for every occasion, making every event a culinary celebration.';

    div.appendChild(cardOne);
    div.appendChild(cardTwo);
    div.appendChild(createContainer());
    return div;
}
const createBoxes = (pictures) => {
    const container = document.createElement('div');
    container.classList.add('image-container')
    for(let i = 0; i<pictures.length;i++){
        const div = document.createElement('div');
        div.classList.add('image');
        div.style.backgroundImage = 'url(\''+pictures[i]+'\')';
        container.appendChild(div);
    }
    return container;
}
const createInfoCard = ()=>{
    const div = document.createElement('div');
    div.classList.add('home-info');
    return div;
}
const createContainer = ()=>{
    const cont = document.createElement('div');
    const contact = createCard('#161A30','Contact Us','Phone Number: +961-12 345 678 \nEmail: ChefToDoor@outlook.com');
    const img = createBoxes([halalLogo]);

    cont.appendChild(contact);
    cont.appendChild(img);

    img.style.justifyContent = 'center';
    img.style.alignItems = 'center';

    cont.style.display = 'flex';
    cont.style.width = '100%';
    cont.style.justifyContent = 'center';
    cont.style.alignItems = 'space-between';
    contact.style.boxShadow = '10px 10px 10px -4px rgba(0,0,0,0.75)';

    return cont;
}
export default home;