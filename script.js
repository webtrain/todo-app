$(document).ready(function() {

const btn = $('#btn');
const inputField = $('#textField');
const table = $('#table tbody');
const alert = $('#alert');



btn.on('click', showInput);
table.on('click', '#trash', deleteItem);
table.on('click', '#check', finishItem);

function showInput() {
	let value = inputField.val();

	if(value === '') {
		alert.text('Please add input.');
	} else {
		alert.text('');

		table.append(`
								<tr class='todos'>
									<td id="value">${value}</td>
									<td>
										<span class="iconify" data-icon="fa:trash-o" data-inline="false" id="trash"></span>
										<span class="iconify" data-icon="emojione-monotone:white-heavy-check-mark" data-inline="false" id="check"></span>
									</td>
								</tr>`
							);

		inputField.val('');
	}
	// console.log($('.todos').length);
}

function deleteItem() {
	$(this).parent().parent().hide();
	// console.log(e.target)	
	}

function finishItem() {
	// $(this).parent().parent().hide();
	$(this).parent().siblings().toggleClass('through');
}



});




