import wedImg from "./Assets/wedding.jpeg";
import eventImg from './Assets/professional.jpeg';
import birthdayImg from './Assets/birthday.jpeg';
import holidayImg from './Assets/holiday.jpeg';
const catering = ()=>{
    const div = document.createElement('div');
    div.classList.add('content');

    const wedding = creatCard(wedImg,'Wedding','Experience the art of elegance with our bespoke wedding catering service, where every dish is a masterpiece crafted with love. Let us turn your dream day into an unforgettable symphony of flavor, creating memories that linger like the sweetest taste.');
    const party = creatCard(eventImg,'Events','Transform your events into a mosaic of memorable tastes with our catering service. Each dish we serve is a testament to culinary excellence, designed to elevate your gatherings into a luxurious feast for the senses.');
    const birthday = creatCard(birthdayImg,'Birthday Bundle!','Celebrate life\'s special moments with our birthday bundles. Indulge in a culinary fiesta where flavors dance to the rhythm of your joy, making every birthday not just a party, but a gourmet festival.');
    const holiday = creatCard(holidayImg,'Holidays','Embrace the spirit of the holidays with our festive feasts. From Christmas warmth to Ramadan reflections, our holiday menus are crafted to complement the essence of each celebration, turning your festive gatherings into a banquet of joy and togetherness.');
    


    div.appendChild(wedding);
    div.appendChild(party);
    div.appendChild(birthday);
    div.appendChild(holiday);


    

    return div;
}
const creatCard = (bckImg, t, b) => {
    const div = document.createElement('div');
    const title = document.createElement('div');
    const body = document.createElement('div');

    div.style.backgroundImage = "url("+bckImg+")";
    title.textContent = t;
    body.textContent = b;

    title.classList.add('package-title');
    body.classList.add('package-disc');

    div.appendChild(title);
    div.appendChild(body);

    div.classList.add('package');

    return div;
}
export default catering; 