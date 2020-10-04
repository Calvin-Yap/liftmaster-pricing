angular.module('app', ['ngRoute','firebase'])
    .controller('controller', function($scope,$http){
      /*
        PHP calls to get items from each db
      */
     // Garage Door
      $scope.afterGarSelect=false;    
      $scope.afterGarModel=false; 
      $scope.updateSeries= function(){
        if($scope.series == "1"){
          $http.get("pricing.php")
          .then(function(response){
            $scope.Gtype = response.data.elite;
            $scope.afterGarSelect=true;    
            $scope.afterGarModel=false; 
          });
        }
        else if($scope.series =="2"){
          $http.get("pricing.php")
          .then(function(response){
            $scope.Gtype = response.data.premium;
            $scope.afterGarSelect=true;    
            $scope.afterGarModel=false; 
          });
        }
        else if($scope.series == "3") {
          $http.get("pricing.php")
          .then(function(response){
            $scope.Gtype = response.data.contractor;
            $scope.afterGarSelect=true;    
            $scope.afterGarModel=false; 
          });
        }
      }
      //Radio Controls
      $scope.afterSelect=false;    
      $scope.afterModel=false; 
      $scope.updateControls= function(){
        if($scope.radioControls == "1"){
          $http.get("pricingControls.php")
      .then(function(response){
        $scope.version = response.data.myq;
        $scope.afterSelect = true;
        $scope.afterModel=false; 
      });
        }
        else if($scope.radioControls =="2"){
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.trans2;
            $scope.afterSelect = true;
            $scope.afterModel=false; 

          });
        }
        else if($scope.radioControls == "3") {
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.trans;
            $scope.afterSelect = true;
            $scope.afterModel=false; 

          });
        }
         else if($scope.radioControls == "4") {
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.universalSolu;
            $scope.afterSelect = true;
            $scope.afterModel=false; 

          });
        }
        else if($scope.radioControls == "5") {
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.keypads2;
            $scope.afterSelect = true;
            $scope.afterModel=false; 
          });

        }
        else if($scope.radioControls == "6") {
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.controlpanels2;
            $scope.afterSelect = true;
            $scope.afterModel=false; 
          });

        }
        else if($scope.radioControls == "7") {
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.controlpanels;
            $scope.afterSelect = true;
            $scope.afterModel=false; 
          });
        }
        else if($scope.radioControls == "8") {
          $http.get("pricingControls.php")
          .then(function(response){
            $scope.version = response.data.radio;
            $scope.afterSelect = true;
            $scope.afterModel=false; 
          });
        }
      }
      //Rails
      $scope.afterSelectRail=false;
      $scope.afterModelRail=false; 

      $scope.updateRails= function(){
        if($scope.railControls == "1"){
          $http.get("rails.php")
      .then(function(response){
        $scope.railtype = response.data.beltrails;
        $scope.afterSelectRail=true;
      $scope.afterModelRail=false; 
      });
        }
        else if($scope.railControls =="2"){
          $http.get("rails.php")
          .then(function(response){
            $scope.railtype = response.data.chainrails;
            $scope.afterSelectRail=true;
            $scope.afterModelRail=false; 
          });
        }
        else if($scope.railControls == "3") {
          $http.get("rails.php")
          .then(function(response){
            $scope.railtype = response.data.ibeamrails;
            $scope.afterSelectRail=true;
            $scope.afterModelRail=false; 
          });
        }
         else if($scope.railControls == "4") {
          $http.get("rails.php")
          .then(function(response){
            $scope.railtype = response.data.cabledriverails;
            $scope.afterSelectRail=true;
            $scope.afterModelRail=false; 
          });
        }
      }
      //Residential Accessories
      $scope.afterSelectRes=false;
      $scope.afterModelRes=false; 

      $scope.updateRes = function(){
        if($scope.resControls == "1"){
          $http.get("residential.php")
      .then(function(response){
        $scope.restype = response.data.utility;
        $scope.afterSelectRes=true;
      $scope.afterModelRes=false; 
        });
        }
        else if($scope.resControls =="2"){
          $http.get("residential.php")
          .then(function(response){
            $scope.restype = response.data.batteries;
            $scope.afterSelectRes=true;
            $scope.afterModelRes=false; 
          });
        }
        else if($scope.resControls == "3") {
          $http.get("residential.php")
          .then(function(response){
            $scope.restype = response.data.accessories;
            $scope.afterSelectRes=true;
            $scope.afterModelRes=false; 
          });
        }
      }    

       /*
        Variable Declaration 
       */
      
        // Values for prices
        $scope.inputh = "0"; // Garage Doors
        $scope.inputp = "0"; // Radio Controls
        $scope.inputz ="0"; // Radio Controls
        $scope.inpute = "0"; // Residential Acces
        $scope.inputr ="0"; // Rails

        // Quantity identifiers
        // Garage Door
        $scope.noGarqty123=true;
        $scope.noGarqty2447=true;
        $scope.noGarqty48plus=true;
        $scope.noGarqty131=true;
        $scope.noGarqty3263=true;
        $scope.noGarqty64plus=true;
        $scope.noGarqty139=true;
        $scope.noGarqty4079=true;
        $scope.noGarqty80plus=true;
        // Radio Controls
        $scope.noanyqty=true;
        $scope.noqty147=true;
        $scope.noqty48plus=true;
        $scope.noqty123=true;
        $scope.noqty24plus=true;
        $scope.nomsrp=true;
        //Res
        $scope.no2anyqty=true;
        $scope.noqty123=true;
        $scope.noqty24plus=true;
        
        //Model Check to see if pressed used for hiding menu options
        $scope.radioE=null;
        $scope.radioH=null;
        $scope.radioG=null;
        //Total Check to see if pressed used for displaying total
        $scope.totalRadio =false;
        $scope.totalRes= false;
        $scope.totalRails=false;
        $scope.totalGar= false;
        // Percentage and Promo Calclulations
        $scope.garpromo = "0";
        $scope.garpercent ="0";
        $scope.radiopromo="0";
        $scope.radiopercent="0";
        $scope.respromo = "0";
        $scope.respercent ="0";
        $scope.railpromo ="0";
        $scope.railpercent ="0";

        // Checking type for Radio
        $scope.checktype = function(){
          $scope.inputp = "0"; 
          $scope.inputz ="0"; 
          $scope.totalRadio = false;
          $scope.radiopromo="0";
          $scope.radiopercent="0";
          $scope.noanyqty=true;
          $scope.noqty147=true;
          $scope.noqty48plus=true;
          $scope.noqty123=true;
          $scope.noqty24plus=true;
          $scope.nomsrp=true;

        if($scope.radioE != null ){ 
          $scope.afterModel=true;         
          if($scope.radioE.anyqty == "na"){
            $scope.noanyqty = false;
          }
          if($scope.radioE.qty147 == "na"){
            $scope.noqty147=false;
          }
          if($scope.radioE.qty48plus == "na"){
            $scope.noqty48plus=false;
          }
          if($scope.radioE.qty123 == "na"){
            $scope.noqty123=false;
          }
          if($scope.radioE.qty24plus == "na"){
            $scope.noqty24plus=false;
          }
          if($scope.radioE.msrp == "na"){
            $scope.nomsrp=false;
          }}
        }
        // Checking type for Garage
        $scope.checktypeGar = function(){
          $scope.totalGar= false;
          $scope.inputh = "0";
          $scope.garpromo = "0";
          $scope.garpercent ="0";
          $scope.noGarqty123=true;
          $scope.noGarqty2447=true;
          $scope.noGarqty48plus=true;
          $scope.noGarqty131=true;
          $scope.noGarqty3263=true;
          $scope.noGarqty64plus=true;
          $scope.noGarqty139=true;
          $scope.noGarqty4079=true;
          $scope.noGarqty80plus=true;
        if($scope.radioH != null ){ 
          $scope.afterGarModel=true;         
            if($scope.radioH.qty123 == "na"){
              $scope.noGarqty123 = false;
            }
            if($scope.radioH.qty2447 == "na"){
              $scope.noGarqty2447 = false;
            }
            if($scope.radioH.qty48plus == "na"){
              $scope.noGarqty48plus = false;
            }
            if($scope.radioH.qty131 == "na"){
              $scope.noGarqty131 = false;
            }
            if($scope.radioH.qty3263 == "na"){
              $scope.noGarqty3263 = false;
            }
            if($scope.radioH.qty64plus == "na"){
              $scope.noGarqty64plus = false;
            }
            if($scope.radioH.qty139 == "na"){
              $scope.noGarqty139 = false;
            }
            if($scope.radioH.qty4079 == "na"){
              $scope.noGarqty4079 = false;
            }
            if($scope.radioH.qty80plus == "na"){
              $scope.noGarqty80plus = false;
            }
          
          }

        }
        // Checking type for res access
        $scope.checktype2 = function(){
          $scope.totalRes= false;
          $scope.inpute = "0";
          $scope.respromo = "0";
        $scope.respercent ="0";
          $scope.no2anyqty=true;
        $scope.no2qty123=true;
        $scope.no2qty24plus=true;
        if($scope.radioG != null ){ 
          $scope.afterModelRes=true;         
          if($scope.radioG.anyqty == "na"){
            $scope.no2anyqty = false;
          }
          if($scope.radioG.qty123 == "na"){
            $scope.no2qty123=false;
          }
          if($scope.radioG.qty24plus == "na"){
            $scope.no2qty24plus=false;
          }
          }

        }
        // Checking type for rails
        $scope.checktype3= function(){
          $scope.totalRails=false;
          $scope.inputr="0";
          $scope.railpromo ="0";
        $scope.railpercent ="0";
          if($scope.radioF != null){
            $scope.afterModelRail =true;
          }
        }

        // Displaying total Radio
        $scope.totalRadioChange = function(){
          $scope.notmapradio = false;
          $scope.yesmapradio = false;

          if($scope.inputp  > "0" || $scope.inputz > "0"){
            $scope.totalRadio= true;
          }

          if($scope.inputz == $scope.radioE.map){
            $scope.yesmapradio = true;
          }
          else{
            $scope.yesmapradio = false;
          }

          if($scope.inputp > "0" && $scope.inputz >"0"){
           $scope.checktype();
          }

          if($scope.inputp >"0" && $scope.inputz == "0"){
            $scope.notmapradio = true;
          }
          else{
            $scope.notmapradio = false;

          }

        }
        // Displaying total Res
        $scope.totalResChange = function(){
          $scope.notmapres = false;
          $scope.yesmapres = false;

          if($scope.inpute > "0"){
            $scope.totalRes= true;
          }

          if($scope.inpute == $scope.radioG.map){
            $scope.yesmapres = true;
          }else{
            $scope.notmapres = true;
          }
        }
        // Displaying total Rails
        $scope.totalRailsChange = function(){
          $scope.notmaprail = false;
          $scope.yesmaprail = false;

          if($scope.inputr  > "0"){
            $scope.totalRails= true;
          }
          if($scope.inputr == $scope.radioF.map){
            $scope.yesmaprail = true;
          }else{
            $scope.notmaprail = true;
          }

        }
        // Displaying total Garage
        $scope.totalGarageChange= function(){
          $scope.notmapgar = false;
          $scope.yesmapgar = false;

          if($scope.inputh  > "0"){
            $scope.totalGar= true;
          }
          if($scope.inputh == $scope.radioH.map){
            $scope.yesmapgar = true;
          }else{
            $scope.notmapgar = true;
          }
        }
      
        // Changes to the exchange rate
        $scope.exchangeRate = "1.31";

        $scope.changeratebox = false;
        $scope.changerate=function(){
          if($scope.changeratebox == false ){
            $scope.changeratebox = true;
          }else{
            $scope.changeratebox = false;
          }

        }

    });


