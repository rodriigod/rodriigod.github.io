document.addEventListener('DOMContentLoaded', () => {
  const VISIBLE_LIMIT = 3;

  document.querySelectorAll('main.container > section').forEach((section) => {
    const items = Array.from(section.querySelectorAll(':scope > article'));
    if (items.length <= VISIBLE_LIMIT) return;

    const hiddenItems = items.slice(VISIBLE_LIMIT);
    hiddenItems.forEach((item) => item.classList.add('is-hidden'));

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'show-more-btn';

    let expanded = false;
    const updateLabel = () => {
      button.textContent = expanded ? 'Show less' : `Show more (${hiddenItems.length})`;
    };
    updateLabel();

    button.addEventListener('click', () => {
      expanded = !expanded;
      hiddenItems.forEach((item) => item.classList.toggle('is-hidden', !expanded));
      updateLabel();
    });

    section.appendChild(button);
  });
});
