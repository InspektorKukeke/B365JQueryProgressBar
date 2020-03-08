
function generateTable(maindiv,jsn){
   
   
   var docbody = maindiv;
   //var jsn = getArray(); - for testing
   
   var table = '<table style="font-family:Arial Black, Garamond, Serif;color:#5d5c61">';
   table += '<tr style="color:#5d5c61"><th>'+jsn.header1+'</th><th>'+jsn.header2+'</th></tr>';
   for (i in jsn.array){
       var newdivId = jsn.array[i].prop1;

       var newDiv = createDiv(newdivId);
       table += '<tr><td data-to-pass="'+newdivId+'" class="question" onclick="linkBack(this)" style="color:#b1a296;cursor: pointer">'
       +jsn.array[i].prop2+'</td><td data-to-pass="'+newdivId+i+'" onclick="linkBack(this)" style="cursor: pointer; width: 250px">'+newDiv+'</td></tr>';
       
   };
   
   table  += "</table>";
   
   appendDiv(table,docbody);
    for (i in jsn.array){
        var div = jsn.array[i].prop1;
        var prcent = jsn.array[i].prop3
        createProgressBar(div,prcent);
    };

};

function linkBack(div){
    
     var id = div.getAttribute('data-to-pass');
     sendToNav('OnItemClicked',id);
}


function getArray(){
     var jsn =
     {
  "header1": "Name",
  "header2": "% Completed",
  "array": [
    {
      "prop1" : "div1",
      "prop2": "question 1",
      "prop3": 75
    },
    {
       "prop1" : "div2",
      "prop2": "question 2",
      "prop3": 55
    },
     {
       "prop1" : "div3",
      "prop2": "question 3",
      "prop3": 45
    },
  ]
};
  return jsn;  
}


function createProgressBar(div,percentage){
  let progress = $('#'+ div).LineProgressbar({
    percentage: percentage
});
}

function createDiv(newDivId){
return "<div id='"+newDivId+"'></div>";
    
}

function appendDiv(newDiv,toDiv){
    $(toDiv).append(newDiv)
}

(function($) {
    'use strict'

    $.fn.LineProgressbar = function(options) {
        options = $.extend(
            {
                percentage: 100,
                ShowProgressCount: true,
                duration: 1000,
                unit: '%',
                animation: true,
                // Styling Options
                fillBackgroundColor: '#7395ae',
                backgroundColor: '#EEEEEE',
                radius: '0px',
                height: '10px',
                width: '100%',
            },
            options
        )

        $.options = options
        return this.each(function(index, el) {
            // Markup
            if ($(el).data("progress-init") === undefined)
                $(el).data("progress-init", options.percentage);

            let elementProgress = $(el).data("progress-init");            

            if (elementProgress === options.percentage) {
                $(el).html(
                    '<div class="progressbar"><div class="percentCount" style="color:#b1a296"></div><div class="progress"></div></div>'
                )
            }

            var progressFill = $(el).find('.progress')
            var progressBar = $(el).find('.progressbar')

            progressFill.css({
                backgroundColor: options.fillBackgroundColor,
                height: options.height,
                borderRadius: options.radius,
            })
            progressBar.css({
                width: options.width,
                backgroundColor: options.backgroundColor,
                borderRadius: options.radius,
            })

            /**
             * Progress with animation
             */
            if (options.animation) {
                // Progressing
                progressFill.animate(
                    {
                        width: options.percentage + '%',
                    },
                    {
                        step: function(x) {
                            if (options.ShowProgressCount) {
                                $(el)
                                    .find('.percentCount')
                                    .text(Math.round(x) + options.unit)
                            }
                        },
                        duration: options.duration,
                    }
                )
            } else {
                // Without animation
                progressFill.css('width', options.percentage + '%')
                $(el)
                    .find('.percentCount')
                    .text(Math.round(options.percentage) + '%')
            }
        })
    }
})(jQuery);

$('[line-progressbar]').each(function() {
    var $this = $(this)
    function LineProgressing() {
        $this.LineProgressbar({
            percentage: $this.data('percentage'),
            unit: $this.data('unit'),
            animation: $this.data('animation'),
            ShowProgressCount: $this.data('showcount'),
            duration: $this.data('duration'),
            fillBackgroundColor: $this.data('progress-color'),
            backgroundColor: $this.data('bg-color'),
            radius: $this.data('radius'),
            height: $this.data('height'),
            width: $this.data('width'),
        })
    }
    var loadOnce = 0
    $this.waypoint(
        function() {
            loadOnce += 1
            if (loadOnce < 2) {
                LineProgressing()
            }
        },
        { offset: '100%', triggerOnce: true }
    )
})
