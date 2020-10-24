angular.module('nomads', ['ngRoute'])
    .controller('nomadsController', function () {
        var nomads = this;
        nomads.filtro = {
            nombre: '',
            precioDesde: 0,
            precioHasta: 500,
            categoria: null,
        }

        nomads.filtrar = function () {
            console.log(nomads.filtro)
        }

        nomads.Lista = [
            {
                id: 1,
                nombre: 'Lorem Ipsum',
                precio: 200,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Carteras'
            }, {
                id: 2,
                nombre: 'Lorem Ipsum',
                precio: 100,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Purses'
            }, {
                id: 3,
                nombre: 'Lorem Ipsum',
                precio: 250,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Backpacks'
            }, {
                id: 4,
                nombre: 'Lorem Ipsum',
                precio: 460,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Purses'
            }, {
                id: 5,
                nombre: 'Lorem Ipsum',
                precio: 120,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Carteras'
            }, {
                id: 6,
                nombre: 'Lorem Ipsum',
                precio: 270,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Coala'
            }, {
                id: 7,
                nombre: 'Lorem Ipsum',
                precio: 140,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Backpacks'
            }, {
                id: 8,
                nombre: 'Lorem Ipsum',
                precio: 300,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                categoria: 'Backpacks'
            },
        ]
    });