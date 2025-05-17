// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Current year for footer copyright
    const year = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2023', year);
    }

    // Simple typing effect for the header title (optional)
    const title = document.querySelector('header h1');
    const originalText = title.textContent;
    const subtitle = document.querySelector('.subtitle');
    
    // Clear the title initially
    title.textContent = '';
    
    // Hide subtitle initially
    if (subtitle) {
        subtitle.style.opacity = '0';
        subtitle.style.transition = 'opacity 1s ease';
    }
    
    // Type the title character by character
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            
            // Show subtitle with fade-in effect
            if (subtitle) {
                setTimeout(() => {
                    subtitle.style.opacity = '1';
                }, 500);
            }
        }
    }, 150);
}); 