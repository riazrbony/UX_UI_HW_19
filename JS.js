// Interactive JavaScript for My Work section

document.addEventListener('DOMContentLoaded', function() {
    // Select all "View Details" buttons
    const viewButtons = document.querySelectorAll('.work-item button');

    // Add click event listener to each button
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the class 'show-details' on the parent div of the button
            this.parentNode.classList.toggle('show-details');
            
            // Change button text based on the class
            if (this.parentNode.classList.contains('show-details')) {
                this.textContent = 'Hide Details';
            } else {
                this.textContent = 'View Details';
            }
        });
    });
});
