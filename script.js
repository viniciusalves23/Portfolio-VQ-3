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
      id: "adapta-keraciaba",
      title: "Programa Adapta Keraciaba: Pesquisa-ação crítica para adaptação climática e redução de desastres",
      image: "/img/about.jpg",
      description:
      "O Programa Adapta Keraciaba busca desenvolver ações de enfrentamento aos riscos de desastres e adaptação climática em comunidades da zona leste de São Paulo. A iniciativa envolve pesquisa-ação crítica e atividades educativas com moradores dos territórios do Jardim Keralux e Vila Guaraciaba, promovendo a comunicação, percepção dos riscos e participação ativa da comunidade. Em parceria com a universidade, o programa fomenta o diálogo entre pesquisadores e a população para a construção de soluções sustentáveis e inclusivas.",
      objectives: [
      "Fortalecer a comunicação e percepção dos riscos de desastres entre a população local",
      "Estimular o desenvolvimento de ações comunitárias para a adaptação climática",
      "Apoiar a produção e revisão de materiais educativos e relatórios científicos",
      "Participar de eventos e reuniões com os moradores para fomentar o engajamento comunitário",
      "Aplicar ferramentas de gestão de projetos para organização e efetividade das ações",
      "Apoiar a formação acadêmica dos estudantes envolvidos no programa"
      ],
      results:
      "Engajamento direto com moradores das comunidades do Jardim Keralux e Vila Guaraciaba, participação ativa em eventos e reuniões, apoio na produção de materiais educativos e científicos, além da aplicação de metodologias de gestão para aprimorar a efetividade do programa. A iniciativa resultou no fortalecimento da comunicação sobre riscos e adaptação climática, incentivando práticas sustentáveis e colaborativas entre a comunidade e a universidade.",
      tags: ["Adaptação Climática", "Redução de Desastres", "Engajamento Comunitário", "Pesquisa-Ação", "Sustentabilidade"]
    },
    {
      id: "adapta-keraciaba-trilhas",
      title: "Programa Adapta Keraciaba: Trilhas de formação e divulgação científica para Adaptação Climática e Redução de Risco de Desastres",
      image: "/img/about.jpg",
      description:
      "O Programa Adapta Keraciaba desenvolve trilhas de formação e ações de divulgação científica voltadas para adaptação climática e redução de riscos de desastres. A iniciativa promove a comunicação e percepção dos riscos por meio de atividades educativas, oficinas e eventos que envolvem diretamente as comunidades da zona leste de São Paulo e a Universidade, incentivando o diálogo e o engajamento comunitário na busca por soluções sustentáveis e resilientes.",
      objectives: [
      "Promover a formação de estudantes e moradores em temas de adaptação climática e redução de riscos",
      "Fortalecer a comunicação científica e a percepção dos riscos nas comunidades locais",
      "Produzir e revisar materiais educativos e científicos sobre mudanças climáticas e desastres",
      "Fomentar o diálogo entre a comunidade, pesquisadores e instituições para soluções sustentáveis",
      "Apoiar a participação ativa da comunidade em eventos, reuniões e oficinas formativas",
      "Aplicar ferramentas de gestão de projetos para organização e efetividade das ações"
      ],
      results:
      "Realização de trilhas formativas para estudantes e moradores, produção de materiais educativos e científicos, participação ativa em eventos e reuniões comunitárias, e fortalecimento do diálogo entre a academia e a sociedade. O programa impactou diretamente a percepção dos riscos e incentivou ações colaborativas para adaptação climática e redução de desastres.",
      tags: ["Adaptação Climática", "Redução de Riscos", "Divulgação Científica", "Engajamento Comunitário", "Educação Ambiental"]
    },
    {
      id: "adapta-keraciaba-historia",
      title: "Programa Adapta Keraciaba: A história das comunidades na gestão de riscos de desastres e adaptação climática",
      image: "/img/about.jpg",
      description:
      "Este programa visa registrar e valorizar a história das comunidades na gestão de riscos de desastres e adaptação climática, promovendo a comunicação e percepção dos riscos através de narrativas comunitárias. A iniciativa fortalece o diálogo entre os moradores da zona leste de São Paulo e a Universidade, incentivando a participação ativa em estratégias de enfrentamento e resiliência ambiental.",
      objectives: [
      "Documentar e divulgar histórias das comunidades sobre gestão de riscos e adaptação climática",
      "Fortalecer a comunicação e percepção dos riscos ambientais",
      "Estimular o diálogo entre comunidade, pesquisadores e instituições",
      "Apoiar a produção e revisão de materiais educativos e científicos",
      "Capacitar estudantes e moradores para a participação em ações de resiliência ambiental",
      "Utilizar ferramentas de gestão de projetos para organização das atividades"
      ],
      results:
      "Registro e divulgação de narrativas comunitárias, participação ativa dos moradores em eventos e oficinas, produção de materiais educativos e fortalecimento da resiliência local. O programa contribuiu para a valorização do conhecimento comunitário e o aprimoramento das estratégias de adaptação climática e redução de desastres.",
      tags: ["Gestão de Riscos", "Adaptação Climática", "Narrativas Comunitárias", "Engajamento Comunitário", "Educação Ambiental"]
    },
    {
      id: "adapta-keraciaba-cartografia",
      title: "Adapta Keraciaba: Cartografia Social e História Oral dos Riscos Socioambientais do Território",
      image: "/img/about.jpg",
      description:
        "Este projeto utiliza a cartografia social e a história oral para mapear riscos socioambientais e registrar as memórias das comunidades do Jardim Keralux e Vila Guaraciaba. A iniciativa promove a participação ativa dos moradores na identificação de desafios e potencialidades do território, incentivando a preservação das narrativas locais e a conscientização sobre a gestão de riscos.",
      objectives: [
        "Realizar mapeamento participativo dos riscos e potencialidades socioambientais",
        "Coletar relatos e registros audiovisuais sobre desastres e lutas comunitárias",
        "Desenvolver produtos cartográficos e materiais de divulgação científica",
        "Fortalecer o engajamento comunitário na gestão de riscos",
        "Preservar e difundir as memórias das comunidades através da história oral"
      ],
      results:
        "Mapeamento participativo realizado, coleta e registro de relatos comunitários, desenvolvimento de produtos cartográficos e fortalecimento da identidade territorial. O projeto contribuiu para a valorização do conhecimento local e a ampliação da percepção de riscos socioambientais nas comunidades envolvidas.",
      tags: ["Mapeamento Participativo", "História Oral", "Cartografia Social", "Gestão de Riscos", "Engajamento Comunitário"]
    },
    {
      id: "adapta-keraciaba-gestao",
      title: "Gestão de Riscos de Desastres e Adaptação Climática: Programa Adapta Keraciaba",
      image: "/img/about.jpg",
      description: "O projeto teve como objetivo fortalecer a gestão de riscos de desastres e a adaptação climática por meio da mobilização comunitária, formações socioambientais e ações educativas no Jardim Keralux e Vila Guaraciaba. A iniciativa envolveu a comunidade na identificação de riscos e na construção de soluções locais.",
      objectives: [
        "Realizar formações socioambientais com moradores e integrantes do projeto",
        "Facilitar oficinas e encontros sobre redução de riscos e adaptação climática",
        "Produzir materiais de comunicação socioambiental e educativos",
        "Sistematizar e divulgar dados e informações científicas sobre o tema",
        "Engajar a comunidade na prevenção de desastres e na adaptação climática"
      ],
      results: "Foram realizadas formações, oficinas e encontros comunitários, promovendo o fortalecimento da gestão de riscos e a mobilização local. O projeto também resultou na produção de materiais educativos e na ampliação da conscientização sobre a adaptação climática nas comunidades envolvidas.",
      tags: [
        "Gestão de Projetos",
        "Educação Ambiental",
        "Engajamento Comunitário",
        "Planejamento Ambiental",
        "Adaptação Climática"
      ]
    },    
    {
      id: "errd-ln",
      title: "Estruturação e Fortalecimento da Rede de Educação e Redução de Riscos de Desastres no Litoral Norte de SP (ERRD-LN)",
      image: "/img/about.jpg",
      description: "Este projeto teve como objetivo estruturar e fortalecer a Rede de Educação e Redução de Riscos de Desastres no Litoral Norte de São Paulo, promovendo ações de comunicação, engajamento comunitário e educação socioambiental. A iniciativa envolveu diversos atores institucionais e comunitários na construção de estratégias para minimizar riscos e aumentar a resiliência local.",
      objectives: [
        "Apoiar a comunicação da Rede ERRD-LN em redes sociais e mídias digitais",
        "Desenvolver postagens, mídias e campanhas educativas",
        "Fortalecer projetos locais de educação e redução de riscos no Litoral Norte de SP",
        "Sistematizar e divulgar informações sobre riscos de desastres",
        "Promover articulação entre pesquisadores, escolas, ONGs e órgãos públicos"
      ],
      results: "O projeto resultou no fortalecimento da Rede ERRD-LN, ampliação da divulgação científica e mobilização comunitária. Foram produzidos materiais educativos, campanhas digitais e realizadas reuniões estratégicas com diversos atores locais para promover a redução de riscos de desastres.",
      tags: [
        "Educação Ambiental",
        "Engajamento Comunitário",
        "Redução de Riscos",
        "Comunicação Socioambiental",
        "Pesquisa Aplicada"
      ]
    },
    {
      id: "educacao-ambiental-rrd",
      title: "Educação Ambiental e Redução de Risco de Desastres: uma abordagem crítica na Zona Leste de São Paulo",
      image: "/img/about.jpg",
      description: "Este projeto promove a Educação Ambiental Crítica e a Redução de Riscos de Desastres no ensino público da Zona Leste de São Paulo. A iniciativa envolve planejamento e execução de cursos, oficinas e workshops, além de diagnósticos socioambientais e elaboração de planos de ação para comunidades vulneráveis.",
      objectives: [
        "Oferecer curso de curta duração sobre Educação Ambiental e Redução de Riscos de Desastres",
        "Criar materiais educativos para escolas públicas e comunidades",
        "Facilitar oficinas e workshops para estudantes e moradores",
        "Realizar diagnóstico socioambiental e planejamento de ações para gestão de riscos",
        "Monitorar e avaliar os impactos do projeto através de indicadores e relatórios"
      ],
      results: "O projeto resultou na capacitação de estudantes e moradores, na produção de materiais educativos, na realização de um diagnóstico socioambiental em Ermelino Matarazzo e na formulação de um plano de gestão de riscos locais. Também fortaleceu a participação comunitária e ampliou o conhecimento sobre desastres socioambientais.",
      tags: ["Educação Ambiental", "Gestão de Riscos", "Engajamento Comunitário", "Monitoramento de Projetos", "Planejamento Estratégico"]
    },
    {
      id: "democracia-artes-saberes",
      title: "Democracia, Artes e Saberes Plurais",
      image: "/img/about.jpg",
      description: "O projeto busca compreender a realidade socioeconômica e cultural dos bairros vizinhos à USP Leste por meio de pesquisa de campo, entrevistas e articulação comunitária. A iniciativa visa fortalecer a democracia participativa e a valorização dos saberes locais.",
      objectives: [
        "Realizar pesquisa de campo no Jardim Keralux e bairros vizinhos",
        "Conduzir entrevistas periódicas com moradores para levantamento de dados",
        "Divulgar e aplicar o Censo comunitário",
        "Articular parcerias com atores-chave da comunidade",
        "Elaborar um diagnóstico socioeconômico e cultural da região"
      ],
      results: "O projeto permitiu um mapeamento detalhado das condições sociais e culturais da região, facilitando a criação de estratégias para desenvolvimento local. Além disso, fortaleceu o vínculo entre a universidade e a comunidade por meio da pesquisa participativa.",
      tags: ["Pesquisa de Campo", "Articulação Comunitária", "Coleta de Dados", "Diagnóstico Socioeconômico", "Engajamento Social"]
    }
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
})

