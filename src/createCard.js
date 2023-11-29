const createCard = (pic, t, b) => {
    const div = document.createElement('div');
    const title = document.createElement('div');
    const body = document.createElement('div');

    title.textContent = t;
    body.textContent = b;

    title.classList.add('package-title');
    body.classList.add('package-disc');

    div.appendChild(title);
    div.appendChild(body);

    if(pic.charAt(0)=='#') div.style.backgroundColor=pic;
    else div.style.backgroundImage = "url(\'" + pic + "\')";
    div.classList.add('package');
    div.classList.add('meals-pack');

    return div;
}
export default createCard;