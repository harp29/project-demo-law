class Accordion {

    constructor() {
        this.accordionItem = document.querySelectorAll(".accordion__trigger");
        this.openAccordion(this.accordionItem);
    }

    openAccordion(item) {

        let currentItemOpen = null,
            currentItemHeading = null,
            accordionDetails = document.querySelectorAll(".accordion__details");

        for (let i = 0; i < item.length; i++) {

            if (accordionDetails[i].classList.contains("accordian__details--open")) {

                currentItemOpen = accordionDetails[i];
                currentItemHeading = item[i];
            }

            item[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("accordion__trigger-is-activated")) {
                    e.stopPropagation();
                    console.log("oh ho, same.");
                    return false;
                } else {
                    currentItemOpen.classList.remove("accordian__details--open");
                    currentItemHeading.classList.remove("accordion__trigger-is-activated");
                    currentItemHeading.classList.add("accordion__trigger-is-deactivated");
                    accordionDetails[i].classList.add("accordian__details--open");
                    e.target.classList.remove("accordion__trigger-is-deactivated");
                    e.target.classList.add("accordion__trigger-is-activated");
                    currentItemOpen = accordionDetails[i];
                    currentItemHeading = item[i];
                }
            });
        };
    }
}

export default Accordion;