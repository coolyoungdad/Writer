

//Not sure why this doesn't work
var selection = document.getSelection();
document.addEventListener("keypress", function boldText(){  //how do you define the 'cmd+b'
    selection.bold();
});


//Indent with Tab 
var textAreas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textAreas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}