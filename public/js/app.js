function Vm(){
    var self = this;

    var api = "http://localhost:3000/api";

    self.widgets = {
        lastUpload: new Widget(null, function(text){
            return moment(text).format('YYYY-MM-DD hh:mm:ss')
        }),
        uploads: new Widget(null),
        vee: new Widget(null),
        newDataPoints: new Widget(null),
        alarmsChecked: new Widget(null),
        rawTable: new Widget(null),
        historyTable: new Widget(null),
        aggregationTable: new Widget(null),
        jobs: new Widget(null),
        webServerCPU: new Widget(null),
        webHits: new Widget(null)
    }

    var interval = setInterval(function(){
        $.getJSON(api, function(data){
            R.keys(self.widgets).forEach(function(id){
                self.widgets[id].text.apply(null, [data[id]]);
            });
        })
    }, 30000);

    $.getJSON(api, function(data){
        R.keys(self.widgets).forEach(function(id){
            self.widgets[id].text.apply(null, [data[id]]);
        });
    })

}

function Widget(text, displayTextCb){
    var self = this;
    this.text = ko.observable(text);
    this.visible = ko.observable(true);

    this.visibleFn = function(){
        self.visible(false);
    }

    this.waiting = ko.computed(function(){
        return !this.text();
    }, this);

    this.displayText = ko.computed(function(){
        if(!displayTextCb) return this.text();
        if(this.text())
            return displayTextCb(this.text());
    }, this)
}


ko.applyBindings(new Vm());
