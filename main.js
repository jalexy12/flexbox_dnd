$(document).ready(function(){
	$.each($('.number'), function(idx, element){
		var $element = $(element)

		var flexVal = $element.text();
		$element.attr("data-order", flexVal);
		$element.css("order", flexVal)
	})

	$('.mini-box').on("dragstart", function(e){
		var order = $(e.originalEvent.currentTarget).attr("data-order")
		e.originalEvent.dataTransfer.setData("newOrder", order)
	})

	$('.mini-box').on("dragover", function(e){
		e.preventDefault();
	})

	$(".mini-box").on("drop", function(e){
		e.preventDefault();
		var newBoxNumber = $(e.currentTarget).attr("data-order")
		var oldBoxNumber = e.originalEvent.dataTransfer.getData("newOrder")

		rearrangeOrder(oldBoxNumber, newBoxNumber)
	})

})


function rearrangeOrder(oldBoxId, newBoxId){
	var $oldBox = $(`.mini-box[data-order='${oldBoxId}']`)
	var $newBox = $(`.mini-box[data-order='${newBoxId}']`)

	$oldBox.attr("data-order", newBoxId)
	$oldBox.css("order", newBoxId)

	$newBox.attr("data-order", oldBoxId)
	$newBox.css("order", oldBoxId)
}