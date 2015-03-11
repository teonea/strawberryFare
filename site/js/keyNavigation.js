// $(document).keydown(function(e) {
//     switch(e.which) {

//         case 38: // up
//             alert('up');
//         break;

//         case 40: // down
//             alert('down');
//         break;

//         default: return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
// });

$(document).ready(function(){
    function upDown($dir){
        $url = document.URL; /*The current URL ex: http://***/presentation#s02 */
        $anchorNum = parseInt($url.slice(-2), 10); /*Get the anchor number from the current url ex: 02*/
        $urlNoAnchor =  $url.slice(0, -2); /*Get the base url without anchor number ex: http://***/presentation#s*/
        if ($dir == "up") { /*Increment or decrement the anchor number, up because the previous slide is up */
            if($anchorNum > 0){ /*We can't go under 0*/
                $newAnchor = $anchorNum - 1;
            }
            else{
                return;
            }
        } else{
            $newAnchor = $anchorNum + 1;
        };
        if ($newAnchor <= 9) {$newAnchor = "0"+$newAnchor}; /*if the anchor is equal or smaller than 10, need to add zero for keeping two units*/
        window.location.replace($urlNoAnchor + $newAnchor); /*Finally, redirect to the next or previous anchor*/
    };

    $(this).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                upDown("up");
            break;

            case 38: // up
                upDown("up");
            break;

            case 39: // right
                upDown("down");
            break;

            case 40: // down
                upDown("down");
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});