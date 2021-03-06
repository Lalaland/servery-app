var serveryFilters = angular.module('serveryFilters', [])
 
serveryFilters.filter('dayofweek', function() {
  
  return function(input) {
  	var day;
  	switch(input){
  		case '0':
  			day =  "Mon";
  			break;
  		case '1':
  			day = "Tue";
  			break;
  		case '2':
  			day = "Wed";
  			break;
  		case '3':
  			day ="Thu";
  			break;
  		case '4':
  			day = "Fri";
  			break;
  		case '5':
  			day = "Sat";
  			break;
  		case '6':
  			day = "Sun";
  			break;
  	}
  return day;
  };
});

serveryFilters.filter('twelvehour', function () {
  return function(input) {
    if (input == undefined)
        return ""
    var hour = parseInt(input.substr(0,2));
    var minutes = input.substr(3,2);
    if (hour > 12){
    	hour = hour - 12;
    	return (hour.toString() + ":" + minutes + " PM");
   
    }
    else {
    	return (finalString = hour.toString() + ":" + minutes + " AM");

    }

  };
});

