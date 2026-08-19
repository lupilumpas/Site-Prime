/* =========================================================
   JARDINS DE MADEIRA — SCRIPT.JS
   Interações iniciais do site
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       1. CONTADOR DA LISTA DE ORÇAMENTO
       --------------------------------------------------------- */

    const addButtons = document.querySelectorAll(".add-product");
    const quoteCount = document.querySelector("#quote-count");
    const quoteBadge = document.querySelector(".quote-button span");

    let selectedProducts = [];

    function updateQuoteCounter() {
        if (quoteCount) {
            quoteCount.textContent = selectedProducts.length;
        }

        if (quoteBadge) {
            quoteBadge.textContent = selectedProducts.length;
        }
    }

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.dataset.product;

            if (!productName) return;

            selectedProducts.push(productName);
            updateQuoteCounter();

            const originalText = button.textContent;

            button.textContent = "Adicionado ✓";
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1300);
        });
    });


    /* ---------------------------------------------------------
       2. NAVEGAÇÃO SUAVE
       --------------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                const header = document.querySelector(".site-header");
                const headerHeight = header ? header.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });


    /* ---------------------------------------------------------
       3. BOTÃO DE BUSCA
       --------------------------------------------------------- */

    const searchButton = document.querySelector(".search-button");

    if (searchButton) {
        searchButton.addEventListener("click", () => {

            const existingSearch = document.querySelector(".search-overlay");

            if (existingSearch) {
                existingSearch.remove();
                document.body.classList.remove("search-open");
                return;
            }

            const overlay = document.createElement("div");
            overlay.className = "search-overlay";

            overlay.innerHTML = `
                <div class="search-box">
                    <button class="close-search" type="button" aria-label="Fechar busca">×</button>

                    <p class="eyebrow">PROCURAR</p>
                    <h2>O que você está procurando?</h2>

                    <div class="search-input-wrapper">
                        <input
                            type="search"
                            id="site-search"
                            placeholder="Digite o nome de um produto..."
                            autocomplete="off"
                        >
                        <button type="button" id="execute-search">Buscar</button>
                    </div>

                    <div id="search-results" class="search-results"></div>
                </div>
            `;

            document.body.appendChild(overlay);
            document.body.classList.add("search-open");

            const input = overlay.querySelector("#site-search");
            const executeSearch = overlay.querySelector("#execute-search");
            const results = overlay.querySelector("#search-results");
            const closeSearch = overlay.querySelector(".close-search");

            input.focus();

            function performSearch() {
                const query = input.value.trim().toLowerCase();

                results.innerHTML = "";

                if (!query) {
                    results.innerHTML = "<p>Digite algo para pesquisar.</p>";
                    return;
                }

                const products = [...document.querySelectorAll(".product-card")];

                const matches = products.filter(product => {
                    return product.textContent.toLowerCase().includes(query);
                });

                if (matches.length === 0) {
                    results.innerHTML = `
                        <p>Nenhum produto encontrado para "<strong>${escapeHTML(query)}</strong>".</p>
                    `;
                    return;
                }

                results.innerHTML = `
                    <p><strong>${matches.length}</strong> resultado(s) encontrado(s).</p>
                `;

                matches.forEach(product => {
                    const title = product.querySelector("h3")?.textContent || "Produto";

                    const resultButton = document.createElement("button");
                    resultButton.type = "button";
                    resultButton.className = "search-result";
                    resultButton.textContent = title;

                    resultButton.addEventListener("click", () => {
                        overlay.remove();
                        document.body.classList.remove("search-open");

                        product.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        product.animate(
                            [
                                { transform: "scale(1)" },
                                { transform: "scale(1.025)" },
                                { transform: "scale(1)" }
                            ],
                            {
                                duration: 500,
                                easing: "ease"
                            }
                        );
                    });

                    results.appendChild(resultButton);
                });
            }

            executeSearch.addEventListener("click", performSearch);

            input.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    performSearch();
                }
            });

            closeSearch.addEventListener("click", () => {
                overlay.remove();
                document.body.classList.remove("search-open");
            });

            overlay.addEventListener("click", event => {
                if (event.target === overlay) {
                    overlay.remove();
                    document.body.classList.remove("search-open");
                }
            });
        });
    }


    /* ---------------------------------------------------------
       4. ANIMAÇÃO AO ENTRAR NA TELA
       --------------------------------------------------------- */

    const animatedElements = document.querySelectorAll(
        ".category-card, .product-card, .benefit, .gallery-item, .review-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12
        });

        animatedElements.forEach(element => {
            element.classList.add("reveal-on-scroll");
            observer.observe(element);
        });

    } else {
        animatedElements.forEach(element => {
            element.classList.add("is-visible");
        });
    }


    /* ---------------------------------------------------------
       5. HEADER COMPORTAMENTO NO SCROLL
       --------------------------------------------------------- */

    const header = document.querySelector(".site-header");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (!header) return;

        if (currentScroll > 30) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }

        lastScroll = currentScroll;
    }, { passive: true });


    /* ---------------------------------------------------------
       6. BOTÕES DE ORÇAMENTO
       --------------------------------------------------------- */

    const quoteButtons = document.querySelectorAll(
        ".quote-button, .button-light"
    );

    quoteButtons.forEach(button => {
        button.addEventListener("click", () => {
            updateQuoteCounter();
        });
    });


    /* ---------------------------------------------------------
       7. FAQ
       --------------------------------------------------------- */

    const faqItems = document.querySelectorAll(".faq-list details");

    faqItems.forEach(item => {
        item.addEventListener("toggle", () => {

            if (!item.open) return;

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }
            });
        });
    });


    /* ---------------------------------------------------------
       8. LINK DE "VER TODOS OS PRODUTOS"
       --------------------------------------------------------- */

    const productsLink = document.querySelector(".text-link");

    if (productsLink) {
        productsLink.addEventListener("click", event => {
            const productsSection = document.querySelector("#produtos");

            if (productsSection) {
                event.preventDefault();

                productsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }


    /* ---------------------------------------------------------
       9. FUNÇÃO AUXILIAR
       --------------------------------------------------------- */

    function escapeHTML(value) {
        return value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

});
