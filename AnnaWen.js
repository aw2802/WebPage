$(document).ready(function() { 
    // start slideshow 
    $('#slideshow').cycle({ 
        fx:      'toss', 
        timeout:  2000, 
        before:   onBefore 
    }); 
 
    // set totalSlideCount var; 
    // we'll be adding slides beach3.jpg - beach8.jpg to the slideshow 
    var totalSlideCount = 8; 
     
    function onBefore(curr, next, opts) { 
        // on the first pass, addSlide is undefined (plugin hasn't yet created the fn); 
        // when we're finshed adding slides we'll null it out again 
        if (!opts.addSlide) 
            return; 
 
        // on Before arguments: 
        //  curr == DOM element for the slide that is currently being displayed 
        //  next == DOM element for the slide that is about to be displayed 
        //  opts == slideshow options 
             
        var currentImageNum = parseInt(next.src.match(/beach(\d)/)[1]); 
             
        if (currentImageNum == totalSlideCount) { 
            // final slide in our slide slideshow is about to be displayed 
            // so there are no more to fetch 
            opts.addSlide = null; 
            return; 
        } 
         
        // add our next slide 
        opts.addSlide('<img src="images/beach'+(currentImageNum+1)+'.jpg" width="200" height="200" />'); 
    }; 
}); 