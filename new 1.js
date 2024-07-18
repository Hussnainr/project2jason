$(document).ready(function() {
    var startIndex = 3; // Starting index for loading additional books
    var booksPerPage = 3; // Number of books to load per click

    // Function to load more books
    function loadMoreBooks() {
        $.ajax({
            url: 'books.json',
            dataType: 'json',
            success: function(data) {
                var booksToLoad = data.slice(startIndex, startIndex + booksPerPage);
                displayBooks(booksToLoad); // Display loaded books
                startIndex += booksPerPage; // Increment start index for next load

                // Hide button if no more books to load
                if (startIndex >= data.length) {
                    $('#loadMoreBtn').hide();
                }
            }
        });
    }

    // Initial load of books
    loadMoreBooks();

    // Load more books when button is clicked
    $('#loadMoreBtn').on('click', function() {
        loadMoreBooks();
    });
});
