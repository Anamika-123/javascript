var Toolbar = function(){

}
Toolbar.prototype.createHtml = function(){
  this.html = $('<div/>', {'class':'toolbar'}).append(
  $('<button/>', {'class':'buttonbold previewcommon'},'value':'bold', 'data-action-class':'toolbar-bold')).append(
  $('<button/>', {'class':'buttonitalic previewcommon'},'value':'italic', 'data-action-class':'toolbar-italic' )).append(
  $('<button/>', {'class':'buttonunderline previewcommon'},'value':'underline', 'data-action-class':'toolbar-underline'))
}