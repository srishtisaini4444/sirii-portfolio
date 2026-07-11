const bootLog = document.getElementById("bootLog");

const bootSequence = [

    {
        text: "> boot atlas-os",
        color: "command",
        speed: 35
    },

    {
        text: "Initializing Kernel...",
        color: "normal",
        speed: 22,
        success: true
    },

    {
        text: "Loading Engineering Profile...",
        color: "normal",
        speed: 22,
        success: true
    },

    {
        text: "Mounting Mission Database...",
        color: "normal",
        speed: 22,
        success: true
    },

    {
        text: "Installing System Modules...",
        color: "normal",
        speed: 22,
        success: true
    },

    {
        text: "Loading Engineering Console...",
        color: "normal",
        speed: 22,
        success: true
    },

    {
        text: "Verifying Credentials...",
        color: "normal",
        speed: 22,
        success: true
    },

    {
        text: "ACCESS GRANTED",
        color: "access",
        speed: 45
    },

    {
        text: "System Status ........ ONLINE",
        color: "status",
        speed: 20
    },

    {
        text: "",
        speed: 10
    },

    {
        text: "Press ENTER to continue",
        color: "ready",
        speed: 30
    }

];

let currentLine = 0;

function typeNextLine() {

    if (currentLine >= bootSequence.length) return;

    const line = bootSequence[currentLine];

    const p = document.createElement("p");

p.classList.add(line.color || "normal");

const cursor = document.createElement("span");

cursor.className = "terminal-cursor";

cursor.textContent = "█";

p.appendChild(cursor);

bootLog.appendChild(p);

    let i = 0;

    const typer = setInterval(() => {

        cursor.before(line.text.charAt(i));

        i++;

        if (i >= line.text.length) {

            clearInterval(typer);

            cursor.remove();

            if (line.success) {

                setTimeout(() => {

                    const check = document.createElement("span");

                    check.className = "boot-success";

                    check.textContent = "   ✓";

                    p.appendChild(check);

                }, 120);

            }

            currentLine++;

            setTimeout(typeNextLine, 250);

        }

    }, line.speed);

}

typeNextLine();

