import {getResourse} from '../services/services';

const cards = (triggerSelector, wrapperSelector) => {
    const trigger = document.querySelector(triggerSelector),
        wrapper = document.querySelector(wrapperSelector);

    trigger.addEventListener('click', function() {
        getResourse('assets/db.json')
            .then(res => createdCard(res.images))
            .catch(error => console.log(error))
        this.remove();
    });  
    
    function createdCard(res) {
        res.forEach(({src}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-12', 'col-md-6', 'col-lg-4', 'gallery-item');
            card.innerHTML = `<img class="gallery_img" src=${src} alt="gallery">`;
            wrapper.append(card);
        });
    }
}
export default cards;