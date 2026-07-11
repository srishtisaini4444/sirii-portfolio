const text = `> connect github
Connection Established.

> connect linkedin
Connection Established.

> connect email
Ready.

> awaiting transmission...`;

const terminal = document.getElementById("terminalText");

if (terminal) {

    terminal.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            terminal.textContent += text.charAt(i);

            i++;

            setTimeout(type, 25);

        }

    }

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting && terminal.textContent === "") {

            type();

        }

    }, { threshold: 0.5 });

    observer.observe(terminal);

}