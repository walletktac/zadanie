new Vue({
    el: '#app',
    data: function () {
        return {
            images: [
                {
                    title: 'Wizualizacja 1',
                    description: 'Kuldesign',
                    href: './img/13.jpg',
                },
                {
                    title: 'Wizualizacja 2',
                    description: 'Kuldesign',
                    href: './img/14.jpg',
                },
                {
                    title: 'Wizualizacja 3',
                    description: 'Kuldesign',
                    href: './img/15.jpg',
                },
                {
                    title: 'Wizualizacja 4',
                    description: 'Kuldesign',
                    href: './img/20.jpg',
                },
                {
                    title: 'Wizualizacja 5',
                    description: 'Kuldesign',
                    href: './img/34.jpg',
                },
                {
                    title: 'Wizualizacja 6',
                    description: 'Kuldesign',
                    href: './img/35.jpg',
                },
                {
                    title: 'Wizualizacja 1',
                    description: 'Kuldesign',
                    href: './img/13.jpg',
                },
                {
                    title: 'Wizualizacja 12',
                    description: 'Kuldesign',
                    href: './img/14.jpg',
                },
                {
                    title: 'Wizualizacja 3',
                    description: 'Kuldesign',
                    href: './img/15.jpg',
                },
                {
                    title: 'Wizualizacja 4',
                    description: 'Kuldesign',
                    href: './img/20.jpg',
                },
                {
                    title: 'Wizualizacja 5',
                    description: 'Kuldesign',
                    href: './img/34.jpg',
                },
                {
                    title: 'Wizualizacja 6',
                    description: 'Kuldesign',
                    href: './img/35.jpg',
                },
            ],
            index: null
        };
    },
    components: {
        'gallery': VueGallery
    }
});
