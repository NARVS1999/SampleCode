const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.table(entry.target.accessKey);
        // if (entry.isIntersecting) {
        //     entry.target.classList.add('show');
        // } else {
        //     entry.target.classList.remove('show');
        // }
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
})



const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));