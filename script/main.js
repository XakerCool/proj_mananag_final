window.addEventListener("load", () => {
    document.querySelectorAll('.main__success_strategy__list__item__short__expand_btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const listItem = btn.closest('.main__success_strategy__list__item');
            listItem.classList.toggle("selected_list_item");

            // Select the icons and info section
            const expandIcon = listItem.querySelector('.expand_icon');
            const decreaseIcon = listItem.querySelector('.decrease_icon');
            const infoSection = listItem.querySelector('.main__success_strategy__list__item__info');

            // Toggle visibility
            expandIcon.classList.toggle('hidden');
            decreaseIcon.classList.toggle('hidden');
            infoSection.classList.toggle('hidden');
        });
    });

})