 // Add smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Highlight active navigation item
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const headerOffset = document.querySelector('header').offsetHeight; // Get the height of the sticky header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            });
        });
// Function to open the modal and display the PDF
function openPdfModal(pdfUrl) {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    
    // Set the PDF URL in the iframe's src attribute
    pdfViewer.src = pdfUrl;
    
    // Remove 'hidden' and add 'active' to show modal with smooth transitions
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10); // Slight delay for smoother transition
}

// Function to close modal
function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    
    // Remove 'active' and add 'hidden' after a delay to allow transition to finish
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); // Delay matches transition duration
}

// Event listener for "View PDF" button
document.querySelectorAll('.view-pdf').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const pdfUrl = this.getAttribute('data-pdf'); // Get the PDF URL
        openPdfModal(pdfUrl); // Open modal with the PDF
    });
});

// Event listener to close the modal when clicking the close button
document.getElementById('closeModal').addEventListener('click', closePdfModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        closePdfModal();
    }
});





        // // Add event listener to "View Project" links and images
        // document.querySelectorAll('.view-project').forEach(item => {
        //     item.addEventListener('click', function(event) {
        //         event.preventDefault();
        //         const projectId = this.getAttribute('data-project');
        //         openModal(projectId);
        //     });
        // });

        // // Add event listener to close modal
        // document.getElementById('closeModal').addEventListener('click', closeModal);

        // Highlight active navigation item
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('section');

        function highlightNavItem() {
            let scrollY = window.pageYOffset;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 350;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href').slice(1) === sectionId) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }

    //     // Add project details
        
    //     const projects = {
    //         project1: `
    //             <h2 class="text-2xl font-bold mb-4">Project Skyline: Legacy-to-Cloud Migration</h2>
    //             <p>Project Skyline is a comprehensive initiative to migrate UNH's legacy on-premises applications to AWS cloud infrastructure...</p>
    //             <!-- Add more project details here -->
    //         `,
    //         // Add more projects as needed
    //     };

    //     // Function to open modal
    //         function openModal(projectId) {
    //             const modal = document.getElementById('projectModal');
    //             const modalContent = document.getElementById('modalContent');
                
    //             // Inject the project content into the modal
    //             modalContent.innerHTML = projects[projectId];
                
    //             // Show the modal
    //             modal.classList.add('active');
    //         }

    //         // Function to close modal
    //         function closeModal() {
    //             const modal = document.getElementById('projectModal');
    // modal.classList.remove('active');
    //     }

    //     // Close modal when clicking outside the modal content
    //         window.addEventListener('click', function(event) {
    //             const modal = document.getElementById('projectModal');
    //             if (event.target === modal) {
    //                 closeModal();
    //             }
    //         });

        // Highlight active navigation item on scroll
        window.addEventListener('scroll', highlightNavItem);
        window.addEventListener('load', highlightNavItem);

        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                if (barTop < window.innerHeight - 50) {
                    bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                }
            });
        };
        window.addEventListener('scroll', animateSkillBars);
        animateSkillBars(); // Initial animation

        // Form submission (you'll need to implement server-side handling)
        // const contactForm = document.querySelector('#contact form');
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     // Add your form submission logic here
        //     alert('Form submitted! (Note: This is a demo, no actual submission occurred)');
        //     contactForm.reset();
        // });

        // Mobile navigation toggle
        const mobileNav = document.querySelector('nav');
        const mobileNavToggle = document.createElement('button');
        mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileNavToggle.classList.add('md:hidden', 'fixed', 'top-4', 'right-4', 'z-50', 'bg-gray-700', 'text-white', 'p-2', 'rounded-full');
        document.body.appendChild(mobileNavToggle);

        mobileNavToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('h-screen');
            mobileNav.classList.toggle('w-full');
            mobileNav.classList.toggle('flex-col');
            document.body.classList.toggle('overflow-hidden');
        });

        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && e.target !== mobileNavToggle) {
                mobileNav.classList.remove('h-screen', 'w-full', 'flex-col');
                document.body.classList.remove('overflow-hidden');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const readMoreBtns = document.querySelectorAll('.read-more-btn');
            
            readMoreBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const content = this.closest('section').querySelector('.about-content,.resume-content');
                    content.classList.toggle('show-content');
                    this.textContent = content.classList.contains('show-content') ? 'Read Less' : 'Read More';
                });
            });
        });