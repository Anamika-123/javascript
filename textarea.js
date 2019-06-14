var Textarea = function(element){
  this.element = element;
}

Textarea.prototype.createToolbar = function(){
  this.toolbarInstance = new Toolbar();
  toolbarInstance.createHTML();
}

Textarea.prototype.appendToolbar = function(){
  this.element.append(this.toolbarInstance.html());
}

Textarea.prototype.createPreviewPanel = function(){
  this.previewPanelHTML = $('<div/>', {'id':'previewid'})
  this.element.append(this.previewPanelHTML);
}

Textarea.prototype.bindEvents = function(){
  var outerScope = this;
  this.element.on('change', function(){
    var textareahtml = $(this).html();
    outerScope.previewPanelHTML.html(textareahtml);
  })
  $('.previewcommon').on('click', function(){
    var toolbarbtn = $(this).data('action-class');
    outerScope.previewPanelHTML.addClass(toolbarbtn);
  })
}




$(document).ready(function(){
  var textareaElement = $('extarea.WYSIWYG');
  textareaElement.each(function(index)
  {
    var currentareaElement = textareaElement[index];
    var textareaInstance = new Textarea(currentareaElement);
    textareaInstance.createToolbar();
    textareaInstance.appendToolbar();
    textareaInstance.createPreviewPanel();
    textareaInstance.bindEvents();
  })
});
