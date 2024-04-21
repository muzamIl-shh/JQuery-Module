$(document).ready(function() {
    $('#addTask').on('click', function() {
        var taskText = $('#taskInput').val();
        if(taskText.trim() !== '') {
            var listItem = $('<li>').text(taskText);
            var deleteButton = $('<button>').text('Delete');
            listItem.append(deleteButton);
            $('#taskList').append(listItem);
            $('#taskInput').val('');
            deleteButton.on('click', function() {
                $(this).parent().remove();
            });
        }
    });
});
