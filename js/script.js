;
((d) => {
    d.addEventListener('DOMContentLoaded', e => {
        // Inicia el codigo JavaScript de Materialize
        M.AutoInit()

        // Activamos el slider
        const sliders = d.querySelectorAll('.slider')
        M.Slider.init(sliders, {
            indicators: true,
            duration: 1000
        })

        // Copyright dinámico
        const copy = d.querySelector('.Footer small')
        copy.innerHTML = `&copy; ${new Date().getFullYear()} - Hugo Flotts`

        // Volver carousel a fullwidth
        const carousels = d.querySelectorAll('.carousel')
        M.Carousel.init(carousels, {
            fullWidth: true
        });

        // Para que el carousel se mueva automáticamente
        const instanceCarousel = M.Carousel.getInstance(d.querySelector('.carousel'))

        setInterval(() => {
            instanceCarousel.next(1)
        }, 5000)

        // Customizacion de ScrollSpy
        const scrollSections = d.querySelectorAll('.scrollspy')
        M.ScrollSpy.init(scrollSections, {
            scrollOffset: 70
        })
    })
})(document)