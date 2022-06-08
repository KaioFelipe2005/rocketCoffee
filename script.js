// OPENMENU
{

function toggleMenu() {

    let menu =
        document.querySelector("main nav");
    let menuUl =
        document.querySelector("main nav ul");
    let iconMenu =
        document.querySelector(".menuIcon");
    let body =
        document.querySelector("body");

    if(menu.opacity= "0" && !(iconMenu.classList.contains(".activedMenu"))) {

        menuUl.style.right= "0px"
        menu.style.opacity = "1"
        menu.style.pointerEvents= "auto";
        iconMenu.src="./assets/menu-buguer-close.svg";
        iconMenu.classList.add(".activedMenu")
        body.style.position="fixed"

    } else {
        menuUl.style.right= "-200px"
        menu.style.opacity = "0"
        menu.style.pointerEvents= "none";
        iconMenu.src="./assets/menu-buguer-open.svg"
        iconMenu.classList.remove(".activedMenu")
        body.style.position="relative"

    }
}

}

// NAV MOBILE
{
    const originalNav =
        document.querySelector("header nav ul")
    const cloneNav =
        originalNav.cloneNode(true)
    const mainNav =
        document.querySelector("main nav")

    mainNav.prepend(cloneNav);
}



// CONTAINER MOBILE
{
const originalBTN = document.querySelector("#getCoffee");
const cloneBTN = originalBTN.cloneNode(true)
const container = document.querySelector(".containerMobile")

container.insertBefore(cloneBTN, container.querySelector(".containerMobile, h3").nextElementSibling)
}
