const types = new Set(["resume", "cv"]);

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    var type = "resume";
    const hideById = new Set();
    const hideByClass = new Set();

    // get the type of our resume.
    const typeArg = params.get("type");
    if (new Set(types.keys()).has(typeArg)) {
        type = typeArg;
    }

    Array.from(types).filter(item => item !== type).forEach(item => hideByClass.add(item));
    console.log(hideByClass);

    // See if there are any 
    // additional things to hide.
    if (params.get("hide")) {
        for(const h of params.get("hide").split(',')) {
            hideById.add(h);
        }
    }

    console.log(hideById);

    // Hide the elements that we don't need
    // for this run of our resume/cv.
    hideElements(type, hideById, hideByClass);
};

function hideElements(whitelist, hideById, hideByClass) {
    for (const h of hideByClass) {
        console.log(`hiding ${h}`);
        const htmlElements = document.getElementsByClassName(h);
        // We want to display anything that 
        // should be filtered and is whitelisted.
        Array.from(htmlElements).filter(item => !item.classList.contains(whitelist)).forEach(item => item.style.display = "none");
    }
    for (const h of hideById) {
        console.log(`hiding ${h}`);
        const htmlElement = document.getElementById(h);
        if (htmlElement) {
            htmlElement.style.display = "none";
        }
    }
}

function filterForHiding(sections, toHide) {
    console.log(sections);
    return Array.from(sections).filter(a => !toHide.has(a))
}