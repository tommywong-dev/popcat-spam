const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
const power = 100;
setInterval(() => {
    for (let i = 0; i < power; i++) {
        document.dispatchEvent(event);
    }
});
