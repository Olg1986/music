const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.gallery'),
        bigImg = document.createElement('img');
        

    imgPopup.classList.add('overlay');
    workSection.appendChild(imgPopup);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('gallery_img')) {
            imgPopup.style.display = 'flex';
            bigImg.style.width = '600px';
            bigImg.style.height = '600px';
            bigImg.src = target.src;
            document.body.overflow = 'hidden';
        }

        if (target && target.matches('div.overlay')) {
            imgPopup.style.display = 'none';
            document.body.overflow = '';
        }
    });

    
}
export default images;