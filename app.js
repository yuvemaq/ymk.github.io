let togglemenu = document.querySelector(".togglemenu");
let navigation = document.querySelector(".navigation");

togglemenu.onclick= function()
{
    navigation.classList.toggle("active");
}