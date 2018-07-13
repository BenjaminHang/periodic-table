(function($){
    var PT = function(data){
        this.periodicTableData = data
        this.__init()
    }
    PT.prototype = {
        __init: function(){
            console.log(this.periodicTableData.length)
            this.classify()
        },
        classify: function(){
            
        },
    }
    window.PT = PT
})($)

$(document).ready(function(){
    $.getJSON('./data.json', function(data){
        var pt = new PT(data)
    })
})