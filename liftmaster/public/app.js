angular.module('app', ['ngRoute','firebase'])
    // Database Getter
    .controller('controller', function($scope,$http){
        $http.get("pricing.php")
        .then(function(response){
          $scope.pricing = response.data.elite;
          $scope.pricing2 = response.data.premium;
          $scope.pricing3 = response.data.contractor;
        });


        // Variable initilization 
        $scope.isElite = false;
        $scope.isPremium = false;
        $scope.isContractor = false;
        $scope.isSelect48 = false;
        $scope.isSelect64 = false;
        $scope.isSelect48reg = false;
        $scope.isSelect64reg = false;
        $scope.isSelect48map = false;
        $scope.isSelect64map = false;
        $scope.promo = "0";
        $scope.promo1 = "0";
        $scope.isSelect64prem = false;
        $scope.isSelect64regprem = false;
        $scope.isSelect64mapprem = false;
        $scope.isSelectCon80reg = false;
        $scope.isSelectCon64reg = false;
        $scope.isSelectCon48map = false;
        $scope.isSelectCon64map = false;
        $scope.promoCon64 = "0";
        $scope.promoCon80 = "0";
        $scope.isSelectCon64 = false;
        $scope.isSelectCon80 = false;
        $scope.percentage = "0";
        $scope.percentageElite64 = "0";
        $scope.percentagePrem ="0";
        $scope.percentageCon80 ="0";
        $scope.percentageCon64="0";

        $scope.reset =function(){
          $scope.isSelect48 = false;
          $scope.isSelect64 = false;
          $scope.isSelect48reg = false;
          $scope.isSelect64reg = false;
          $scope.isSelect48map = false;
          $scope.isSelect64map = false;
          $scope.isSelect64prem = false;
          $scope.isSelect64regprem = false;
          $scope.isSelect64mapprem = false;
          $scope.isSelect64prem = false;
          $scope.isSelect64regprem = false;
          $scope.isSelect64mapprem = false;
          $scope.isSelectCon80reg = false;
          $scope.isSelectCon64reg = false;
          $scope.isSelectCon48map = false;
          $scope.isSelectCon64map = false;
          $scope.model = null;
          $scope.model1= null;
          $scope.model3=null;
          $scope.promo = "0";
          $scope.promo1 = "0";
          $scope.promoCon64 = "0";
          $scope.promoCon80 = "0";
          $scope.percentage = "0";
          $scope.percentageElite64 = "0";
          $scope.percentagePrem ="0";
          $scope.percentageCon80 ="0";
          $scope.percentageCon64="0";
        }
        $scope.updateSeries= function(){
          if($scope.series == "1"){
            $scope.reset();
            $scope.isElite = true;
            $scope.isPremium = false;
            $scope.isContractor = false;
          }
          else if($scope.series =="2"){
            $scope.reset();
            $scope.isElite = false;
            $scope.isPremium = true;
           $scope.isContractor = false;
          }
          else if($scope.series == "3") {
            $scope.reset();
            $scope.isElite = false;
            $scope.isPremium = false;
           $scope.isContractor = true;
          }
        }
       $scope.update = function(){
         $scope.size="0";
         $scope.size1="0";
         $scope.promo = "0";
        $scope.promo1 = "0";
        $scope.percentage = "0";
          $scope.percentageElite64 = "0";
         //console.log($scope.model.name);
         if( $scope.model.name == "8500W" || $scope.model.name == "8500C"){
           $scope.isSelect48=true;
           $scope.isSelect64 = false;
         }else{
          $scope.isSelect48 = false;
          $scope.isSelect64 = true;
         }
        }
      
        $scope.update2 = function(){
         $scope.sizePrem="0";
        $scope.promoPrem = "0";
        $scope.percentagePrem ="0";
        $scope.isSelect64prem = true;

        }

        $scope.update3 = function(){
          $scope.sizeCon80 ="0";
          $scope.sizeCon64 ="0";
          $scope.promoCon80 ="0";
          $scope.promoCon64 ="0";
          $scope.percentageCon80 ="0";
          $scope.percentageCon64="0";
         if( $scope.model3.name == "80107" || $scope.model3.name == "80108"){
          $scope.isSelectCon64 = false;
        $scope.isSelectCon80 = true;

         }else{
          $scope.isSelectCon64 = true;
          $scope.isSelectCon80 = false;

         }
        }

        $scope.totalRadio =false;
        $scope.totalRes= false;
        $scope.totalRails=false;

        $scope.noanyqty=true;
        $scope.noqty147=true;
        $scope.noqty48plus=true;
        $scope.noqty123=true;
        $scope.noqty24plus=true;
        $scope.nomsrp=true;
        $scope.inputp = "0";
        $scope.radioE=null;
        $scope.inputz = "0";

        $scope.radiopromo="0";
        $scope.radiopercent="0";

        $scope.checktype = function(){
          $scope.totalRadio = false;
          $scope.inputp = "0";
          $scope.inputz = "0";
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


        $scope.totalRadioChange = function(){
          $scope.totalRadio = false;
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
        
        $scope.totalResChange = function(){
          $scope.totalRadio = false;
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
        
        $scope.totalRailsChange = function(){
          $scope.totalRadio = false;
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

        $scope.no2anyqty=true;
        $scope.noqty123=true;
        $scope.noqty24plus=true;
        $scope.inpute = "0";
        $scope.radioG=null;



        $scope.respromo = "0";
        $scope.respercent ="0";
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

        $scope.inputr ="0";
        $scope.railpromo ="0";
        $scope.railpercent ="0";
        $scope.checktype3= function(){
          $scope.totalRails=false;
          $scope.inputr="0";
          $scope.railpromo ="0";
        $scope.railpercent ="0";
          if($scope.radioF != null){
            $scope.afterModelRail =true;
          }
        }


        $scope.mapcheck = function(){
          $scope.isSelect48reg = false;
              $scope.isSelect48map = false;
            if($scope.size1 == $scope.model.map){
              $scope.isSelect64map = true;
              $scope.isSelect64reg = false;
            }
            else{
              $scope.isSelect64reg = true;
              $scope.isSelect64map = false;
            }
        }
        $scope.mapcheck1 = function(){
          $scope.isSelect64reg = false;
              $scope.isSelect64map = false;
            if($scope.size == $scope.model.map){
              $scope.isSelect48map = true;
              $scope.isSelect48reg = false;
            }
            else{
              $scope.isSelect48reg = true;
              $scope.isSelect48map = false;
            }
        }

        $scope.mapcheck3 = function(){
          $scope.isSelect64regprem = false;
          $scope.isSelect64mapprem = false;
          if($scope.sizePrem == $scope.model1.map){
              $scope.isSelect64mapprem = true;
              $scope.isSelect64regprem = false;
            }
            else{
              $scope.isSelect64regprem = true;
              $scope.isSelect64mapprem = false;
            }
        }

        $scope.mapcheck4 = function(){
          $scope.isSelectCon64reg = false;
          $scope.isSelectCon64map = false;
          if($scope.sizeCon64 == $scope.model3.map){
              $scope.isSelectCon64map = true;
              $scope.isSelectCon64reg = false;
            }
            else{
              $scope.isSelectCon64reg = true;
              $scope.isSelectCon64map = false;
            }
        }
        $scope.mapcheck5 = function(){
          $scope.isSelectCon80map = false;
          $scope.isSelectCon80reg = false;
          if($scope.sizeCon80 == $scope.model3.map){
              $scope.isSelectCon80map = true;
              $scope.isSelectCon80reg = false;
            }
            else{
              $scope.isSelectCon80reg = true;
              $scope.isSelectCon80map = false;
            }
        }

        //radio
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
        //Rail
        

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

        //Res
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



    const config = {
        apiKey: "AIzaSyCiA3baPou7irYi248UbTw5spkif3gSiFs",
        authDomain: "liftmaster-3d0d7.firebaseapp.com",
        databaseURL: "https://liftmaster-3d0d7.firebaseio.com",
        projectId: "liftmaster-3d0d7",
        storageBucket: "liftmaster-3d0d7.appspot.com",
        messagingSenderId: "566258234825",
        appId: "1:566258234825:web:f0220d0dcc4815b0796418",
        measurementId: "G-XEM24L6NS9"
      };

    firebase.initializeApp(config);
