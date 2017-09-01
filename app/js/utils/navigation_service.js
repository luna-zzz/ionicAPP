// define(['app'], function(app) {
//   app.service('Navigation', function($state) {
//     //directly binding events to this context
//     this.goNative = function(view, data, direction) {
//       $state.go(view, data);
//       window.plugins.nativepagetransitions.slide({
//           "direction": direction
//         },
//         function(msg) {
//           console.log("success: " + msg)
//         }, // called when the animation has finished
//         function(msg) {
//           alert("error: " + msg)
//         } // called in case you pass in weird values
//       );
//     };
//   });

// });