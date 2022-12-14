//scroll_function
window.addEventListener('scroll', function (){
    // console.log(pageYOffset);

    //shops_img_anim
    const get_special_img_one = document.querySelector(".img_row .special_img_one");
    const get_special_img_two = document.querySelector(".img_row .special_img_two");
    if (pageYOffset > 400){
        get_special_img_one.classList.add("special_img_one_anim");
        get_special_img_two.classList.add("special_img_two_anim");
    }
    //presentation_anim
    // presentation_one
    const get_presentation_one = document.querySelector(".presentation_one");
    if (pageYOffset > 1000){
        get_presentation_one.classList.add("presentation_one_anim");
    }
    // presentation_two
    const get_presentation_two = document.querySelector(".presentation_two");
    if (pageYOffset > 2200){
        get_presentation_two.classList.add("presentation_two_anim");
    }
    // presentation_four
    const get_presentation_four = document.querySelector(".presentation_four");
    if (pageYOffset > 3700){
        get_presentation_four.classList.add("presentation_four_anim");
    }
    // presentation_six
    const get_presentation_six = document.querySelector(".presentation_six");
    if (pageYOffset > 6200){
        get_presentation_six.classList.add("presentation_six_anim");
    }
    // presentation_eight
    const get_presentation_eight = document.querySelector(".presentation_eight");
    if (pageYOffset > 7350){
        get_presentation_eight.classList.add("presentation_eight_anim");
    }
    // presentation_nine
    const get_presentation_nine = document.querySelector(".presentation_nine");
    if (pageYOffset > 8350){
        get_presentation_nine.classList.add("presentation_nine_anim");
    }
    // presentation_twelve
    const get_presentation_twelve = document.querySelector(".presentation_twelve");
    if (pageYOffset > 13500){
        get_presentation_twelve.classList.add("presentation_twelve_anim");
    }
});
//count_word
const get_form  = document.querySelector(".contacts form");
const get_span = document.querySelector(".contacts .siro");
get_form.message.oninput = function (){
    get_span.innerHTML = this.value.length;
    if (this.value.length >= 500){
        get_span.style.color = "tomato";
    }
    else {
        get_span.style.color = "#DCD5CA";
    }
};
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
