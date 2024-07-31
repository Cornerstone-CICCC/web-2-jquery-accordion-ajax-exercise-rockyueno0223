$(function() {
  // your code here
  $('.accordion-header').on('click', function () {
    $(this).next().slideToggle(500);
    $(this).siblings("div").not($(this).next()).slideUp();
  })

  $('.todos button').on('click', function () {
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function (response) {
        const data = response.todos;
        data.forEach(todo => {
          $('.todos button').next().append(`<li>${todo.todo}</li>`);
        });
      },
      error: function (error) {
        console.error(error);
      }
    })
  })
})
