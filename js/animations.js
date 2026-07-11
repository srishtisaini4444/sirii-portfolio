const logEntries = document.querySelectorAll(".log-entry");

const logObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

logEntries.forEach(log=>{

    log.style.opacity="0";
    log.style.transform="translateY(30px)";
    log.style.transition="0.6s ease";

    logObserver.observe(log);

});