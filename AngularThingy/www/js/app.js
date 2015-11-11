
angular.module('mckenzie', ['LocalStorageModule','ionic', 'ngCordova', 'ngToast']);

//use one controller to dynamically call out to service functions to manipulate
//local storage content.
//pass the name and the page number through $stateparams listId
//1 html file. 1 controller. 1 factory.