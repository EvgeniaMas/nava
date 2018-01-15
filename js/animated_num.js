        $(function () {
         $({
             n: 0
         }).animate({
             n: 2000
         }, {
             duration: 3000,
             step: function (a) {
                 $("#n1").html(a | 0)
             }
         })
     });
      
      
      
           $(function () {
         $({
             n: 0
         }).animate({
             n: 20
         }, {
             duration: 3000,
             step: function (a) {
                 $("#n2").html(a | 0)
             }
         })
     });
      
      
      
      
       $(function () {
         $({
             n: 0
         }).animate({
             n: 32
         }, {
             duration: 3000,
             step: function (a) {
                 $("#n3").html(a | 0)
             }
         })
     });
      
       $(function () {
         $({
             n: 0
         }).animate({
             n: 22 
         }, {
             duration: 3000,
             step: function (a) {
                 $("#n4").html(a | 0)
             }
         })
     });
            
     



     
