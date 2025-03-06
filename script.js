document.addEventListener("DOMContentLoaded", () => {
    // Navigation
    const menuItems = document.querySelectorAll(".menu li")
    const contentSections = document.querySelectorAll(".content-section")
    const viewAllButtons = document.querySelectorAll(".view-all")
  
    // Menu item click handler
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active class from all menu items
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove("active")
        })
  
        // Add active class to clicked item
        this.classList.add("active")
  
        // Hide all content sections
        contentSections.forEach((section) => {
          section.classList.remove("active")
        })
  
        // Show the corresponding content section
        const target = this.getAttribute("data-target")
        document.getElementById(target).classList.add("active")
  
        // On mobile, scroll to top after navigation
        if (window.innerWidth <= 768) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      })
    })
  
    // View all buttons click handler
    viewAllButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-target")
  
        // Find and click the corresponding menu item
        menuItems.forEach((item) => {
          if (item.getAttribute("data-target") === target) {
            item.click()
          }
        })
      })
    })
  
    // Project filters
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-grid .project-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all filter buttons
        filterButtons.forEach((btn) => {
          btn.classList.remove("active")
        })
  
        // Add active class to clicked button
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        // Show/hide projects based on filter
        projectCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
          } else {
            if (card.getAttribute("data-category") === filter) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          }
        })
      })
    })
  
    // Contact form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Simulate form submission (in a real project, you'd send this to a server)
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\n\nResponderemos em breve no email: ${email}`)
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Responsive adjustments
    function handleResponsive() {
      if (window.innerWidth <= 768) {
        // Mobile layout adjustments
        document.querySelector(".sidebar").style.position = "relative"
        document.querySelector(".main-content").style.marginLeft = "0"
      } else {
        // Desktop layout adjustments
        document.querySelector(".sidebar").style.position = "fixed"
        document.querySelector(".main-content").style.marginLeft = "260px"
      }
    }
  
    // Handle responsive layout on load and resize
    handleResponsive()
    window.addEventListener("resize", handleResponsive)
  })
  
  