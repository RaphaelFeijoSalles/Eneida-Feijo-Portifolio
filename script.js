document.addEventListener("DOMContentLoaded", function () {
    // --- $ NOVO: LÓGICA DO SCROLLER DE DEPOIMENTOS ---
    const scroller = document.querySelector(".testimonial-scroller-inner");
    if (scroller) {
        // 1. Pega todos os depoimentos
        const testimonials = Array.from(scroller.children);

        // 2. Duplica os depoimentos para criar o efeito "infinito"
        testimonials.forEach(item => {
            const duplicate = item.cloneNode(true);
            duplicate.setAttribute("aria-hidden", true); // Esconde de leitores de tela
            scroller.appendChild(duplicate);
        });
    }
    // --- $ FIM DO NOVO BLOCO ---


    // --- $ LÓGICA DO MENU HAMBÚRGUER ---
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link"); // Pega todos os links

    if (hamburger && navMenu) {
        // 1. Abrir/Fechar com o clique no hambúrguer
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // 2. Fechar o menu ao clicar em um link (para ir para a seção)
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                // Só fecha se o menu estiver aberto (em modo mobile)
                if (navMenu.classList.contains("active")) {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            });
        });
    }

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
    // $ VERIFICA SE ESTAMOS NA PÁGINA PRINCIPAL (procurando a seção #home)
    if (document.getElementById("home")) {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-menu .nav-link");
        const header = document.getElementById("main-header");
        const banner = document.getElementById("event-banner"); // Precisa do banner aqui

        function changeNavOnScroll() {
            let fromTop = window.scrollY;
            let bannerHeight = (banner && !banner.classList.contains("hidden")) ? banner.offsetHeight : 0;
            let totalOffset = header.offsetHeight + bannerHeight + 50;

            sections.forEach(section => {
                if (
                    section.offsetTop - totalOffset <= fromTop &&
                    section.offsetTop + section.offsetHeight - totalOffset > fromTop
                ) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    const id = section.getAttribute("id");
                    const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        }
        window.addEventListener("scroll", changeNavOnScroll);
    } // $ FIM DA VERIFICAÇÃO da página principal

    // --- 3. LÓGICA DE SCROLL SUAVE ---
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            // $ VERIFICA SE É UM LINK INTERNO (começa com #)
            if (href.startsWith("#")) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) { // Se o elemento existir nesta página
                    const header = document.getElementById("main-header");
                    const banner = document.getElementById("event-banner");
                    let bannerCurrentHeight = (banner && !banner.classList.contains("hidden")) ? banner.offsetHeight : 0;

                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - header.offsetHeight - bannerCurrentHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
                // $ SE FOR UM LINK PARA O INDEX (ex: "index.html#home")
            } else if (href.includes("index.html#")) {
                // Apenas segue o link, o navegador cuidará da âncora
                return true;
            }
        });
    });
});
