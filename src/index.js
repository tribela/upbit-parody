function setupLinkOpener() {
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
    });
}

function setupLoginWarning() {
    let dialog = document.querySelector('dialog#loginWarning');
    dialogPolyfill.registerDialog(dialog);
    document.querySelector('button.login')
        .addEventListener('click', () => { dialog.showModal();});
    dialog.querySelector('button.close')
        .addEventListener('click', () => { dialog.close(); });
}

window.addEventListener('load', () => {
    setupLinkOpener();
    setupLoginWarning();
});
