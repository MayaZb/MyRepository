let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;

let btnClickHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = ++cartCounter;

        if (cartCounter === 1) cartCounterLabel.style.display = 'block';

        const mockData = +target.parentElement.previousElementSibling.innerHTML.replace(
            /^\$(\d+)\s\D+(\d+)\D+$/gu,
            '$1.$2'
        );

        cartPrice = cartPrice + mockData;

        let restoreHTML = target.innerHTML;

        target.innerHTML = `Added: ${cartPrice.toFixed(2)} $`;

        elem.onclick = null;

        setTimeout(() => {
            target.innerHTML = restoreHTML;
            elem.onclick = btnClickHandler;
        }, 2000);
    }
};

elem.onclick = btnClickHandler;