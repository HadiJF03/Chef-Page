import oneDish from './Assets/oneDish.jpeg';
import twoDish from './Assets/twoDish.jpeg';
import threeDish from './Assets/threeDish.jpeg';
import fourDish from './Assets/fourDish.jpeg';
import createCard from './createCard';
const meals = ()=>{
    const div = document.createElement('div');
    div.classList.add('content');

    //monthly 1 meal
    //monthly 2 meal
    //monthly full course

    const packOne = createCard(oneDish,"1 Meal Monthly",'Enjoy the convenience of a professionally crafted meal delivered right to your doorstep every day for 30 days. With our 1 Meal Package, savor the deliciousness of a thoughtfully prepared dish, made from your personally chosen ingredients. Tailor your meal to perfection and experience culinary delight effortlessly.');
    const packTwo = createCard(twoDish,"2 Meal Monthly",'Elevate your dining experience with our 2 Meal Package, offering the luxury of two gourmet meals delivered daily for 30 days. Whether it\'s a delightful lunch and a sumptuous dinner or any combination you desire, you have the flexibility to customize each meal. Experience the culinary expertise of our chefs while relishing the convenience of Chef-to-Door.');
    const packThree = createCard(threeDish,"3 Meal Monthly",'Indulge in a culinary journey with our 3 Meal Package, providing the ultimate dining solution with three delicious meals delivered every day for 30 days. Immerse yourself in a world of flavors as you customize each meal to your heart\'s content. Breakfast, lunch, and dinner – all expertly prepared and conveniently brought to your doorstep. Experience gourmet dining without the hassle, only with Chef-to-Door.');
    const packFour = createCard(fourDish,"Student Discount",'We understand the hectic life of students, and that\'s why we\'ve tailored a special discount package just for you! Customize your daily meals with flexibility, ranging from 1 to 3 delicious options per day. Whether you need a quick bite or a complete three-course meal, our Student Discount Package ensures that you get the nourishment you need at an affordable price. Elevate your dining experience without breaking the bank – because great food should always be within reach for students. Enjoy the convenience and flavor with Chef-to-Door\'s Student Discount Package.');

    div.appendChild(packOne);
    div.appendChild(packTwo);
    div.appendChild(packThree);
    div.appendChild(packFour);
    return div;
}

export default meals;