angular.module('quoteApp').controller('MainControl', function($scope, mainService){

$scope.getQuotes = function() {
    $scope.quotes = mainService.getQuotes();
}();

$scope.addQuotes = function() {
    var newQuote = {};
    newQuote.text = $scope.newText;
    newQuote.author = $scope.newAuthor;
    mainService.addQuotes(newQuote);
    $scope.newText = '';
    $scope.newAuthor = '';
}

$scope.removeQuotes = mainService.removeQuotes;




})