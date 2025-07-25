document.addEventListener("alpine:init", () => {
    Alpine.data("alpine", () => ({

        loading: false,
        sidebar: false,
        model: false,
        benefits: [
            {
                title: "Negocie melhores condições com seus fornecedores pagando à vista",
                description: "Com a antecipação de recebíveis você troca taxa por desconto na compra com seus fornecedores",
                image: "images/blog/1.jpg",
            },
            {
                title: "Venda a prazo e receba a vista",
                description: "Com a antecipação você troca o prazo por capital imediato e sem riscos, permitindo o cumprimento das obrigações financeiras da sua empresa",
                image: "images/blog/2.jpg",
            },
            {
                title: "Sem necessidade de endividamento",
                description: "A antecipação de recebíveis permite você capitalizar a sua empresa com um recurso que já é seu, sem gerar endividamento, reduzindo a dependência dos bancos",
                image: "images/blog/3.jpg",
            },
        ],
        solutions: [
            {
                title: "Duplicatas",
                description: "Proporcione à sua empresa liquidez imediata e a possibilidade de aproveitar oportunidades de crescimento sem comprometer o fluxo de caixa",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M240-280h280v-80H240v80Zm400 0h80v-400h-80v400ZM240-440h280v-80H240v80Zm0-160h280v-80H240v80Zm-80 480q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm0 0v-560 560Z"/>
                    </svg>
                `,
            },
            {
                title: "Cheques",
                description: "Transforme cheques pré-datados em capital de giro imediato, com segurança e agilidade, acelerando o processo de cobrança e impulsionando o seu negócio",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/>
                    </svg>
                `,
            },
            {
                title: "Operações estruturadas",
                description: "Criamos soluções financeiras personalizadas, desenhadas para atender às necessidades específicas de crédito por sua empresa, com flexibilidade e segurança",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="m234-480-12-60q-12-5-22.5-10.5T178-564l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T222-820l12-60h80l12 60q12 5 22.5 10.5T370-796l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T326-540l-12 60h-80Zm40-120q33 0 56.5-23.5T354-680q0-33-23.5-56.5T274-760q-33 0-56.5 23.5T194-680q0 33 23.5 56.5T274-600ZM592-40l-18-84q-17-6-31.5-14.5T514-158l-80 26-56-96 64-56q-2-18-2-36t2-36l-64-56 56-96 80 26q14-11 28.5-19.5T574-516l18-84h112l18 84q17 6 31.5 14.5T782-482l80-26 56 96-64 56q2 18 2 36t-2 36l64 56-56 96-80-26q-14 11-28.5 19.5T722-124l-18 84H592Zm56-160q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                    </svg>
                `,
            },
            {
                title: "Contratos",
                description: "Antecipamos contratos de prestação de serviço ou fornecimento, convertendo recebíveis futuros em capital imediato, com agilidade no processo",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
                    </svg>
                `,
            },
        ],
        steps: [
            {
                description: "Analisamos seus recebíveis e elegibilidade",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M400-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm-40-120v-280h80v280h-80Zm-140 0v-200h80v200h-80Zm280 0v-160h80v160h-80ZM824-80 597-307q-41 32-91 49.5T400-240q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 106T653-363l227 227-56 56Z"/>
                    </svg>
                `,
            },
            {
                description: "Definimos a melhor taxa e condições para suas necessidades",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z"/>
                    </svg>
                `,
            },
            {
                description: "Você recebe o dinheiro rápido e com segurança",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    </svg>
                `,
            },
            {
                description: "Seu fluxo de caixa fica equilibrado, proporcionando recursos para o crescimento da sua empresa",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
                        <path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z"/>
                    </svg>
                `,
            },
        ],
        credits: [
            {
                title: "Crédito para Pequenas Empresas",
                description: "As pequenas empresas são o motor da economia, mas frequentemente enfrentam desafios para acessar crédito de forma rápida e flexível. A Aquila Securitizadora oferece soluções financeiras personalizadas que atendem às necessidades específicas de cada negócio, incluindo aqueles com dificuldades de acesso a linhas de crédito tradicionais",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                `
            },
            {
                title: "Empresas com Restrição de Crédito",
                description: "Nós entendemos que dificuldades financeiras podem afetar o acesso a crédito, principalmente quando o nome da empresa está negativado. Mas isso não significa que sua empresa precisa parar de crescer. Oferecemos soluções para empresas com restrição de crédito, com base em recebíveis, contratos e outras garantias que vão além da análise de crédito tradicional",
                svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                `
            },
        ],

        async submitForm(event) {
            this.loading = true
            const form = event.target
            const data = new FormData(form)

            try {
                await fetch("https://script.google.com/macros/s/AKfycbytCYREJVHyg-R3ByoX-yeKoYFnPNiLShAOjBwFdgsFLNFWRQQsMIqrrTRQNbc6cdu-/exec", {
                    method: "POST",
                    body: data,
                })
            } catch (error) {
                alert("Ocorreu um erro ao enviar. Tente novamente.")
            } finally {
                this.loading = false
            }
        },

    }))
})
