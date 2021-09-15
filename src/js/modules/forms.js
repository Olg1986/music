import {postData} from '../services/services';

const forms = () => {
    const form = document.querySelector('.form');

    const message = {
        loading: 'Upload ...',
        success: 'Thank you, we will contact you soon',
        failure: 'Something went wrong'
    }

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        
        form.appendChild(statusMessage);

        const formData = new FormData(form);
        
        postData('assets/server.php', formData)
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
            });

    });
}

export default forms;