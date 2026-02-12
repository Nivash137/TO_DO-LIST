
const links = document.querySelectorAll("nav a");


links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault(); 

        
        links.forEach(item => item.classList.remove("active"));

        
        this.classList.add("active");

       
        document.body.classList.add("clicked");

        setTimeout(() => {
            document.body.classList.remove("clicked");
        }, 400);

    });

});
