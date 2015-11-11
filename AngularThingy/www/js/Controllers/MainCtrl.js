
angular.module('mckenzie')

.controller('MainCtrl', function($scope, $location, localStorageService, $http, $stateParams, LSFunction, $cordovaVibration, ngToast) {

    var id = $stateParams.listId;

    //Styling The List Title And List Elements
    if (id == 1) {
        $scope.listTitle = "Guitars";
        if (localStorageService.get(1)) {} else {
            localStorageService.set(id, [{
                "item": "LesPaul",
                "checked": false
            }, {
                "item": "Ibanez",
                "checked": false
            }, {
                "item": "Fender",
                "checked": false
            }]);
        }
    } else if (id == 2) {
        $scope.listTitle = "Skateboards";
        if (localStorageService.get(2)) {} else {
            localStorageService.set(id, [{
                "item": "Birdhouse",
                "checked": false
            }, {
                "item": "TonyHawk",
                "checked": false
            }]);
        }

    } else if (id == 3) {
        $scope.listTitle = "D.A.Ws";
        if (localStorageService.get(3)) {} else {
            localStorageService.set(id, [{
                "item": "Sonar Producer",
                "checked": false
            }, {
                "item": "Cubase",
                "checked": false
            }, {
                "item": "Rapture",
                "checked": false
            }, {
                "item": "FL StudioComp",
                "checked": false
            }]);
        }
    }
    $scope.listCanSwipe = true;

    $scope.names = localStorageService.get(id);

    $scope.addCat = function() {
        if ($scope.todoText == null || $scope.todoText == "") {
            alert('please Enter Some Text!');
        } else {
            var item = {};
            item.item = $scope.todoText;
            item.checked = false;
            $scope.names.push(item);
            $scope.todoText = ''; //clear the input after adding
            localStorage.setItem(id, JSON.stringify($scope.names));
        }
    };

    //console.log(localStorage.getItem(id));

    $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
        localStorage.setItem(id, JSON.stringify($scope.names));
    };
    
    $scope.vibrateToggle;
    $scope.notifyToggle;

    $scope.Complete = function(name) {

        //console.log($scope.names.length);
        var i = $scope.names.indexOf(name);
        $scope.names[i].checked = true;

        var allComplete = true;

        if ($scope.vibrateToggle == true) {
            $cordovaVibration.vibrate(100);
        } else {

        }

        if ($scope.notifyToggle == true) {
            for (var j = 0; j < $scope.names.length; j++) {
                if ($scope.names[j].checked == true) {
                } else {
                    allComplete = false;
                }
            }
            if (allComplete == true) {
                ngToast.create('List ' + id + ' Completed!');
            }
        }
        localStorage.setItem(id, JSON.stringify($scope.names));
    };

    $scope.Vibrate = function(Vibration) {
        $scope.vibrateToggle = Vibration;
    };
    $scope.Notify = function(Notifications) {
        $scope.notifyToggle = Notifications;
    };




});