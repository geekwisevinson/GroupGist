/**
 * Created by Eric on 11/10/2015.
 */
var supports_orientation_change = "onorientationchange" in window,
    orientation_event = supports_orientation_change ? "orientationchange" : "resize";

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a))check = true
    })(navigator.userAgent||navigator.vendor||window.opera);
        console.log(navigator.userAgent);
    return check;
};
mobileAndTabletcheck();
if(check === true){
    window.addEventListener(orientation_event, function () {
        console.log(window.orientation + " " + screen.width);
        body.(matchMedia(" (orientation: landscape)"));
    }, false);
}else if(check === false){

}else {

}