import './master.scss';

window.addEventListener('load', () => {
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        while (target.nodeName !== 'A') {
            target = target.parentElement;
            if (target === document.body) {
                return;
            }
        }

        if (target.host !== location.host) {
            event.preventDefault();
            window.open(target.href);
        }
    })
})
