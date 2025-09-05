export function initDrawer() {
    const drawer = document.querySelector('.DrawerBlock');
    const openButton = drawer.nextElementSibling;
    const closeButton = drawer.querySelector('.OpenDrawer');

    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());

    // Details
    const container = document.querySelector('.details-group-example');
    // Close all other details when one is shown
    container.addEventListener('sl-show', event => {
        if (event.target.localName === 'sl-details') {
            [...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
        }
    }
    );
}