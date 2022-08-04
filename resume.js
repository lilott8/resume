const types = new Map().set("resume", new Set(["summary", "technical", "experience-brief", "education", "publications", "awards"])).set( "cv", new Set(["summary", "technical", "experience-verbose", "education", "publications", "awards", "membership"]));
// const types = new Set(["resume", "cv"]);

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    var type = "resume";
    const hide = new Set();

    if (params.get("hide")) {
        for(const h of params.get("hide").split(',')) {
            hide.add(h);
        }
    } else {
        console.log("nothing to hide.");
    }

    console.log(hide);

    var articles = document.getElementsByTagName("section");
    console.log(articles);

    const typeArg = params.get("type");
    if (new Set(types.keys()).has(typeArg)) {
        type = typeArg;
    }

    // const finalSet = filterForHiding(types.get(type), hide);
    // console.log(finalSet);
    hideElements(articles, hide);
};

function hideElements(availableSections, toHide) {
    for (const h of toHide) {
        const element = document.getElementById(h);
        element.style.display = "none";
    }
}

function filterForHiding(sections, toHide) {
    console.log(sections);
    return Array.from(sections).filter(a => !toHide.has(a))
}