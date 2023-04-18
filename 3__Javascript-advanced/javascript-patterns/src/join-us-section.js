export function pageLoad(titleText = 'Join Our Program', buttonText = 'SUBSCRIBE') {
    window.onbeforeunload = () => {
        return false;
    };

    const section = document.createElement("section");
    section.className = 'app-section app-section--image-join-us';
    const heading = document.createElement("h2");
    heading.innerText = titleText;
    heading.className = 'app-title';
    const subtitle = document.createElement("h3");
    subtitle.innerText = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    subtitle.className = 'app-subtitle';
    const emailInput = document.createElement("input");
    emailInput.type = 'email';
    emailInput.placeholder = 'email';
    emailInput.className = 'app-section__input--email';
    const subscribeButton = document.createElement("button");
    subscribeButton.innerText = buttonText;
    subscribeButton.type = 'submit';
    subscribeButton.className = 'app-section__button--join-us';
    const form = document.createElement("form");
    form.className = 'app-section__form--subscribe';

    form.appendChild(emailInput);
    form.appendChild(subscribeButton);
    section.appendChild(heading);
    section.appendChild(subtitle);
    section.appendChild(form);
    document.querySelector('.app-footer').insertAdjacentElement("beforebegin", section);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(emailInput.value);
    });

    return section;
}


export class SectionCreator {
    create(type) {
        switch (type) {
            case 'standard':
                return pageLoad();

            case 'advanced':
                return pageLoad("Join Our Advanced Program", "Subscribe to Advanced Program");

            default:
                throw new Error('Invalid section type');
        }
    }

    remove() {
        const child = document.querySelector('.app-section--image-join-us');
        document.querySelector('main').removeChild(child);
    }
}