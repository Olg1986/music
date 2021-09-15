import burger from './modules/burger';
import scroll from './modules/scroll';
import cards from './modules/cards';
import images from './modules/images';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';


window.addEventListener('DOMContentLoaded', () => {
    burger();  
    scroll('.pageup');
    cards('.gallery_btn', '.gallery-row');
    images();
    forms();
    checkTextInputs('[name="text"]');
    checkTextInputs('[name="email"]');
    checkTextInputs('[name="name"]');
});