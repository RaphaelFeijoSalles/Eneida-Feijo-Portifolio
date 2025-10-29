document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DO BANNER DE EVENTO ---
    const banner = document.getElementById("event-banner");
    const closeBannerBtn = document.getElementById("close-banner");

    if (banner && closeBannerBtn) {
        // Mostra o banner após um pequeno delay
        setTimeout(() => {
            banner.classList.add("visible");
        }, 500);

        // Fecha o banner ao clicar no 'X'
        closeBannerBtn.addEventListener("click", () => {
            banner.classList.add("hidden");
        });

        // Fecha o banner ao clicar no link dele
        banner.querySelector("a").addEventListener("click", () => {
            banner.classList.add("hidden");
        });
    }

    // --- 2. LÓGICA DE NAVEGAÇÃO (SCROLL-SPY) ---
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    const header = document.getElementById("main-header");
    const headerHeight = header.offsetHeight;
    // Ajuste para o banner, se ele estiver visível
    const bannerHeight = banner.classList.contains("hidden") ? 0 : banner.offsetHeight;

    // Função para destacar o link ativo
    function changeNavOnScroll() {
        let fromTop = window.scrollY;
        
        // Offset total (header + banner)
        let totalOffset = headerHeight + bannerHeight + 50; 

        sections.forEach(section => {
            if (
                section.offsetTop - totalOffset <= fromTop &&
                section.offsetTop + section.offsetHeight - totalOffset > fromTop
            ) {
                // Remove a classe 'active' de todos
                navLinks.forEach(link => link.classList.remove("active"));

                // Adiciona 'active' ao link correspondente
                const id = section.getAttribute("id");
                const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", changeNavOnScroll);

    // --- 3. LÓGICA DE SCROLL SUAVE ---
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            
            // Verifica se é um link interno (começa com #)
            if (href.startsWith("#")) {
                e.preventDefault(); // Impede o salto padrão
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    let bannerCurrentHeight = banner.classList.contains("hidden") ? 0 : banner.offsetHeight;
                    
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerHeight - bannerCurrentHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

});