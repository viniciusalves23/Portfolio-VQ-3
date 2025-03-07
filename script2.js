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
  
    // Project Modal Functionality
    const modal = document.getElementById("projectModal")
    const closeModalBtn = document.querySelector(".close-modal")
  
    // Project data - in a real application, this would come from a database
    const projectsData = [
      {
        id: "reflorestamento",
        title: "Reflorestamento Urbano",
        image: "/placeholder.svg?height=400&width=600",
        description:
          "Projeto de revitalização de áreas urbanas com plantio de espécies nativas para aumentar a cobertura vegetal e melhorar a qualidade do ar. Este projeto foi implementado em parceria com a prefeitura local e envolveu a comunidade em todas as etapas.",
        objectives: [
          "Aumentar a cobertura vegetal em áreas urbanas degradadas",
          "Melhorar a qualidade do ar e reduzir ilhas de calor",
          "Promover a biodiversidade urbana",
          "Engajar a comunidade local em práticas sustentáveis",
        ],
        results:
          "Plantio de mais de 2.000 mudas de espécies nativas, criação de 5 novos espaços verdes urbanos e redução de 2°C na temperatura média das áreas revitalizadas. O projeto também resultou na formação de um grupo comunitário permanente para manutenção das áreas.",
        tags: ["Reflorestamento", "Urbano", "Biodiversidade"],
      },
      {
        id: "hidrico",
        title: "Recuperação de Nascentes",
        image: "/placeholder.svg?height=400&width=600",
        description:
          "Preservação e recuperação de nascentes em áreas rurais da região, garantindo água limpa e sustentável para comunidades locais. O projeto incluiu o cercamento de áreas de preservação permanente e a recomposição da vegetação ciliar.",
        objectives: [
          "Proteger e recuperar nascentes degradadas",
          "Garantir a qualidade da água para comunidades rurais",
          "Recompor a vegetação ciliar com espécies nativas",
          "Educar produtores rurais sobre a importância da preservação",
        ],
        results:
          "Recuperação de 12 nascentes, aumento de 40% na vazão de água, melhoria significativa na qualidade da água e benefício direto para 8 comunidades rurais, totalizando aproximadamente 500 pessoas.",
        tags: ["Recursos Hídricos", "Conservação", "Rural"],
      },
      {
        id: "residuos",
        title: "Reciclagem Comunitária",
        image: "/placeholder.svg?height=400&width=600",
        description:
          "Implementação de sistema de coleta seletiva e reciclagem em comunidades carentes, gerando renda e reduzindo impacto ambiental. O projeto incluiu capacitação de catadores e educação ambiental para moradores.",
        objectives: [
          "Implementar sistema eficiente de coleta seletiva",
          "Gerar renda para catadores locais",
          "Reduzir o volume de resíduos enviados ao aterro sanitário",
          "Promover educação ambiental sobre gestão de resíduos",
        ],
        results:
          "Redução de 30% no volume de resíduos enviados ao aterro, geração de renda para 15 famílias de catadores e implementação de 25 pontos de coleta seletiva. O projeto também resultou na criação de uma cooperativa de reciclagem autossustentável.",
        tags: ["Resíduos", "Comunidade", "Economia Circular"],
      },
      {
        id: "educacao",
        title: "Educação Ambiental nas Escolas",
        image: "/placeholder.svg?height=400&width=600",
        description:
          "Programa educativo para sensibilização ambiental em escolas públicas, alcançando mais de 2.000 estudantes anualmente. O projeto incluiu capacitação de professores, desenvolvimento de material didático e atividades práticas.",
        objectives: [
          "Sensibilizar estudantes sobre questões ambientais",
          "Capacitar professores em educação ambiental",
          "Desenvolver material didático adaptado à realidade local",
          "Promover ações práticas de sustentabilidade nas escolas",
        ],
        results:
          "Capacitação de 120 professores, implementação de hortas escolares em 15 escolas, redução de 25% no consumo de água e energia nas escolas participantes e formação de 30 grupos de estudantes multiplicadores.",
        tags: ["Educação", "Conscientização", "Escolas"],
      },
      {
        id: "monitoramento",
        title: "Monitoramento de Qualidade da Água",
        image: "/placeholder.svg?height=400&width=600",
        description:
          "Sistema de monitoramento contínuo da qualidade da água em rios e córregos urbanos, com publicação de dados para a comunidade. O projeto utiliza tecnologia de sensores e análises laboratoriais periódicas.",
        objectives: [
          "Monitorar continuamente parâmetros de qualidade da água",
          "Identificar fontes de poluição",
          "Disponibilizar dados transparentes para a comunidade",
          "Subsidiar políticas públicas de saneamento",
        ],
        results:
          "Instalação de 8 estações de monitoramento, identificação de 5 fontes principais de poluição, publicação mensal de relatórios de qualidade da água e colaboração com órgãos públicos para implementação de melhorias no saneamento.",
        tags: ["Recursos Hídricos", "Monitoramento", "Tecnologia"],
      },
      {
        id: "corredores",
        title: "Corredores Ecológicos",
        image: "/placeholder.svg?height=400&width=600",
        description:
          "Criação de corredores de biodiversidade conectando fragmentos florestais, permitindo o trânsito de fauna e ampliando conservação. O projeto envolveu proprietários rurais e órgãos ambientais.",
        objectives: [
          "Conectar fragmentos florestais isolados",
          "Facilitar o fluxo gênico entre populações de fauna e flora",
          "Aumentar a área total de habitat disponível",
          "Engajar proprietários rurais na conservação",
        ],
        results:
          "Criação de 3 corredores ecológicos totalizando 15km de extensão, conexão de 5 fragmentos florestais importantes, aumento documentado na circulação de fauna silvestre e adesão de 22 proprietários rurais ao projeto.",
        tags: ["Biodiversidade", "Conservação", "Fauna"],
      },
    ]
  
    // Add click event to all project cards
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", function () {
        // Get the category of the clicked project
        const category = this.getAttribute("data-category")
  
        // Find the matching project data
        let projectData
  
        // Special handling for specific projects
        if (category === "hidrico" && this.querySelector("h3").textContent.includes("Monitoramento")) {
          projectData = projectsData.find((p) => p.id === "monitoramento")
        } else if (category === "reflorestamento" && this.querySelector("h3").textContent.includes("Corredores")) {
          projectData = projectsData.find((p) => p.id === "corredores")
        } else {
          projectData = projectsData.find((p) => p.id === category)
        }
  
        if (projectData) {
          // Populate modal with project data
          document.getElementById("modalTitle").textContent = projectData.title
          document.getElementById("modalImage").src = projectData.image
          document.getElementById("modalImage").alt = projectData.title
          document.getElementById("modalDescription").textContent = projectData.description
  
          // Clear and populate objectives
          const objectivesList = document.getElementById("modalObjectives")
          objectivesList.innerHTML = ""
          projectData.objectives.forEach((objective) => {
            const li = document.createElement("li")
            li.textContent = objective
            objectivesList.appendChild(li)
          })
  
          document.getElementById("modalResults").textContent = projectData.results
  
          // Clear and populate tags
          const tagsContainer = document.getElementById("modalTags")
          tagsContainer.innerHTML = ""
          projectData.tags.forEach((tag) => {
            const span = document.createElement("span")
            span.textContent = tag
            tagsContainer.appendChild(span)
          })
  
          // Show modal
          modal.style.display = "block"
          setTimeout(() => {
            modal.classList.add("show")
          }, 10)
          document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
        }
      })
    })
  
    // Close modal when close button is clicked
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show")
      setTimeout(() => {
        modal.style.display = "none"
      }, 300)
      document.body.style.overflow = "" // Re-enable scrolling
    })
  
    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("show")
        setTimeout(() => {
          modal.style.display = "none"
        }, 300)
        document.body.style.overflow = "" // Re-enable scrolling
      }
    })
  
    // Stories Functionality
    const storiesData = [
      {
        id: "story1",
        title: "Plantio de Mudas",
        image: "/placeholder.svg?height=500&width=400",
        text: "Hoje realizamos o plantio de 200 mudas nativas na área de recuperação do Parque Municipal. Contamos com a participação de 30 voluntários da comunidade local.",
      },
      {
        id: "story2",
        title: "Monitoramento de Qualidade da Água",
        image: "/placeholder.svg?height=500&width=400",
        text: "Instalamos novos sensores de monitoramento no Rio Verde. Os dados já mostram melhoria de 15% na qualidade da água após as intervenções realizadas no mês passado.",
      },
      {
        id: "story3",
        title: "Coleta Seletiva",
        image: "/placeholder.svg?height=500&width=400",
        text: "O programa de reciclagem comunitária atingiu a marca de 5 toneladas de resíduos coletados este mês. Um recorde para o projeto!",
      },
      {
        id: "story4",
        title: "Oficina de Educação Ambiental",
        image: "/placeholder.svg?height=500&width=400",
        text: "Realizamos uma oficina de educação ambiental com 120 crianças da Escola Municipal Jardim Verde. Atividades práticas sobre compostagem e horta escolar.",
      },
      {
        id: "story5",
        title: "Preservação de Fauna",
        image: "/placeholder.svg?height=500&width=400",
        text: "Registramos o retorno de espécies nativas nos corredores ecológicos implementados. Câmeras trap capturaram imagens de 3 onças-pardas na área.",
      },
    ]
  
    const storiesViewer = document.getElementById("storiesViewer")
    const storiesContent = document.querySelector(".stories-content")
    const storyItems = document.querySelectorAll(".story-item")
    const closeStoriesBtn = document.querySelector(".close-stories")
    const prevBtn = document.querySelector(".stories-prev")
    const nextBtn = document.querySelector(".stories-next")
    const progressFill = document.querySelector(".progress-fill")
  
    let currentStoryIndex = 0
    const storyDuration = 5000 // 5 seconds per story
    let storyTimeout
    let currentStoryId
  
    // Create story elements
    function createStoryElements() {
      storiesContent.innerHTML = ""
  
      storiesData.forEach((story, index) => {
        const storyElement = document.createElement("div")
        storyElement.className = "story"
        storyElement.setAttribute("data-story-id", story.id)
  
        storyElement.innerHTML = `
          <img src="${story.image}" alt="${story.title}" class="story-image">
          <div class="story-text">
            <h3>${story.title}</h3>
            <p>${story.text}</p>
          </div>
        `
  
        storiesContent.appendChild(storyElement)
      })
    }
  
    // Initialize progress bar
    function initProgressBar() {
      progressFill.style.width = "0%"
    }
  
    // Start story progress
    function startStoryProgress() {
      initProgressBar()
  
      const startTime = Date.now()
      const interval = 10 // Update every 10ms for smooth animation
  
      clearTimeout(storyTimeout)
  
      function updateProgress() {
        const elapsedTime = Date.now() - startTime
        const progress = (elapsedTime / storyDuration) * 100
  
        if (progress >= 100) {
          progressFill.style.width = "100%"
          goToNextStory()
        } else {
          progressFill.style.width = `${progress}%`
          storyTimeout = setTimeout(updateProgress, interval)
        }
      }
  
      updateProgress()
    }
  
    // Show story by index
    function showStory(index) {
      // Hide all stories
      const stories = document.querySelectorAll(".story")
      stories.forEach((story) => {
        story.classList.remove("active")
      })
  
      // Show the current story
      if (stories[index]) {
        stories[index].classList.add("active")
        currentStoryId = stories[index].getAttribute("data-story-id")
        currentStoryIndex = index
        startStoryProgress()
      }
    }
  
    // Go to next story
    function goToNextStory() {
      if (currentStoryIndex < storiesData.length - 1) {
        showStory(currentStoryIndex + 1)
      } else {
        closeStories()
      }
    }
  
    // Go to previous story
    function goToPrevStory() {
      if (currentStoryIndex > 0) {
        showStory(currentStoryIndex - 1)
      }
    }
  
    // Open stories viewer
    function openStories(storyId) {
      createStoryElements()
  
      // Find the index of the story to show
      const storyIndex = storiesData.findIndex((story) => story.id === storyId)
  
      // Show the stories viewer
      storiesViewer.style.display = "flex"
      setTimeout(() => {
        storiesViewer.classList.add("active")
      }, 10)
  
      // Show the selected story
      showStory(storyIndex !== -1 ? storyIndex : 0)
  
      // Disable body scroll
      document.body.style.overflow = "hidden"
    }
  
    // Close stories viewer
    function closeStories() {
      storiesViewer.classList.remove("active")
      setTimeout(() => {
        storiesViewer.style.display = "none"
      }, 300)
  
      // Clear timeout
      clearTimeout(storyTimeout)
  
      // Enable body scroll
      document.body.style.overflow = ""
    }
  
    // Add click event to story items
    storyItems.forEach((item) => {
      item.addEventListener("click", function () {
        const storyId = this.getAttribute("data-story-id")
        openStories(storyId)
      })
    })
  
    // Add click event to close button
    closeStoriesBtn.addEventListener("click", closeStories)
  
    // Add click events to navigation buttons
    prevBtn.addEventListener("click", goToPrevStory)
    nextBtn.addEventListener("click", goToNextStory)
  
    // Add click event to stories content for navigation
    storiesContent.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
  
      if (x < rect.width / 3) {
        goToPrevStory()
      } else if (x > (rect.width / 3) * 2) {
        goToNextStory()
      }
    })
  
    // Close stories when clicking outside
    storiesViewer.addEventListener("click", function (e) {
      if (e.target === this) {
        closeStories()
      }
    })
  
    // Add keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!storiesViewer.classList.contains("active")) return
  
      if (e.key === "ArrowLeft") {
        goToPrevStory()
      } else if (e.key === "ArrowRight") {
        goToNextStory()
      } else if (e.key === "Escape") {
        closeStories()
      }
    })
  })
  
  