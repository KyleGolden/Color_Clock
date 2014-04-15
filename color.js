$(document).ready(function(){
 
    function time(){
    
        var now   = new Date();
        var hour  = now.getHours();
        var min   = now.getMinutes();
        var sec   = now.getSeconds();
        var color = timeColor(hour, min, sec);
        var am_pm = "PM";
        
        
        if(hour > 12){
            hour = hour - 12;
        }
 
        if(hour < 12){
            am_pm = "AM";
        }
        
        
        
        hour = formatTime(hour);
        min  = formatTime(min);
        sec  = formatTime(sec);
        
        $('#cur_hour').text(hour);
		$('#cur_min').text(min);
		$('#cur_sec').text(sec);
        $('#am_pm').text(am_pm);
		$('body').css('background-color', '#' + color);
		$('#cur_color').text(color);
 
	    setTimeout(function(){time()}, 500);
    }//end time()
    
    
    function formatTime(x){
        if(x < 10){
            x = '0' + x;
        }
        return x;
    }//end formatTime()
    
    function formatColor(x){
        if(x.length < 2){
            x = '0' + x;
        }
        return x;
    }//end formatColor()
    
    
    //returns time converted to rgb .. 
    // toString(radix) - 16 for Hex
    function timeColor(hour, min, sec){
    
        grn = Math.round(255 * (min/ 59) ).toString(16);
        red = Math.round(255 * (hour/23) ).toString(16); 
        blu = Math.round(255 * (sec/ 59) ).toString(16);
        
        red = formatColor(red);
        grn = formatColor(grn);
        blu = formatColor(blu);
        
        return (red+grn+blu).toUpperCase();
    }//end timeColor()
    
    time();
    
});