var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('Usuarios', ['$scope', '$http', '$log', '$uibModal','$document', function ($scope, $http, $log, $uibModal,$document) {
    var $ctrl = this;
    $ctrl.animationsEnabled = true;
    $scope.$log = $log;
    $http({ url: '/data.json', method: 'GET' }).then(function (data) {
        $scope.ListadoUsuarios = data.data;
    })
    $scope.status = {
        isopen: false
    };

    $scope.items = [
        {
            key: 'lastName',
            desc: 'Apellido'
        },
        {
            key: 'age',
            desc: 'Edad'
        },
        {
            key: 'registered',
            desc: 'Fecha de registración'
        }
    ];
    $scope.selectOption = function (choice) {
        $log.log("choice: ", choice);
        $scope.choice = choice;

    };
    $scope.MostrarDetalles = function(usuario){
        $scope.usuarioSeleccionado = usuario;
        $('#detalles').modal('show');

    }
}]);
