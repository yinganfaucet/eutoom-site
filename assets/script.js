/* EUTOOM — site interactions: nav, i18n (EN/RU/PT/HI), forms, FAQ */
(function () {
  "use strict";

  /* ---------------- Nav ---------------- */
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".burger");
  var mobileMenu = document.querySelector(".mobile-menu");
  var onDark = nav && nav.classList.contains("nav--on-dark");

  function bindBurger() {
    if (burger && mobileMenu) {
      burger.addEventListener("click", function () {
        mobileMenu.classList.add("open");
        document.body.style.overflow = "hidden";
      });
      var close = function () {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      };
      var mc = mobileMenu.querySelector(".mobile-close");
      if (mc) mc.addEventListener("click", close);
      mobileMenu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", close);
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
      });
    }
  }
  bindBurger();

  /* ---------------- Language switcher ---------------- */
  var I18N = {
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.products": "Products", "nav.faq": "FAQ", "nav.contact": "Contact",
      "nav.inquiry": "Get a Quote", "nav.en": "EN",
      "hero.eyebrow": "Quanzhou · Since 2006", "hero.h1": "Bathroom Hardware,<br><em>Fine-Crafted</em>", "hero.lead": "Bathroom & kitchen faucet manufacturer with dual factories in Wenzhou and Quanzhou — serving importers across North America, the Middle East and beyond.",
      "hero.btn1": "Explore Products", "hero.btn2": "Send Inquiry", "hero.meta1": "Two Factories — Wenzhou & Quanzhou", "hero.meta2": "Global Export · EN / RU / PT / HI",
      "stats.years": "Years of Experience", "stats.factories": "Production Bases", "stats.markets": "Export Regions", "stats.crafts": "Crafting Stages",
      "zones.eyebrow": "Product Lines", "zones.title": "Two Ranges, One Standard",
      "zone1.title": "Faucets & Showers", "zone1.desc": "Kitchen taps, basin mixers, shower systems, smart faucets, valves and hardware — developed, manufactured and exported from our own factories.",
      "zone2.title": "Toilets & Vanity", "zone2.desc": "Smart toilets, vanities and sanitary ware for complete bathroom projects. A dedicated range — product lines are being finalized for launch.",
      "zone.link": "View Range", "zone.soon": "Lineup in preparation",
      "factory.eyebrow": "The Factories", "factory.title": "Two Bases. One Integrated Supply Chain.",
      "factory.text": "Established in 2006 in Wenzhou, Zhejiang, and expanded in 2019 to Quanzhou, Fujian, we control the core stages of bathroom hardware production under one supply system.",
      "factory.tags": ["Casting & Machining", "Embossing", "Polishing", "Brushed Metal", "Electroplating", "Assembly", "Testing"],
      "factory.markets": "Export Markets",
      "cta.title": "Let's Build Your Bathroom Line", "cta.btn": "Send Your Inquiry",
      "contact.eyebrow": "Contact", "contact.title": "Talk to Our Export Team",
      "form.name": "Your Name", "form.email": "Email", "form.company": "Company", "form.whatsapp": "WhatsApp / Phone", "form.models": "Models & Quantity", "form.subject": "Subject",
      "form.send": "Send Message", "form.note": "We aim to reply to every inquiry within 12 working hours.",
      "form.err": "Please fill in this field correctly.", "form.ok": "Thank you — your inquiry has been noted. Our export team will reply to your email within 12 working hours.",
      "faq.eyebrow": "FAQ", "faq.title": "Frequently Asked Questions",
      "footer.tag": "Bathroom & kitchen faucets, valves and hardware. Two factories, one standard, global export.",
      "footer.collections": "Collections", "footer.company": "Company", "footer.headquarter": "Headquarter", "footer.rights": "All rights reserved."
    },
    ru: {
      "nav.home": "Главная", "nav.about": "О нас", "nav.products": "Продукция", "nav.faq": "Вопросы", "nav.contact": "Контакты",
      "nav.inquiry": "Запросить цену", "nav.en": "EN",
      "hero.eyebrow": "Чжунчжоу · с 2006 года", "hero.h1": "Сантехника,<br><em>Изысканное исполнение</em>", "hero.lead": "Производитель смесителей для ванной и кухни с двумя заводами в Вэньчжоу и Чжунчжоу — поставка импортёрам Северной Америки, Ближнего Востока и других регионов.",
      "hero.btn1": "Смотреть каталог", "hero.btn2": "Отправить запрос", "hero.meta1": "Два завода — Вэньчжоу и Чжунчжоу", "hero.meta2": "Экспорт по миру · EN / RU / PT / HI",
      "stats.years": "Лет опыта", "stats.factories": "Производственные базы", "stats.markets": "Регионов экспорта", "stats.crafts": "Этапов обработки",
      "zones.eyebrow": "Линейки продукции", "zones.title": "Две линейки. Один стандарт.",
      "zone1.title": "Смесители и душевые", "zone1.desc": "Кухонные смесители, смесители для раковин, душевые системы, сенсорные смесители, вентили и аксессуары — разработка, производство и экспорт с собственных заводов.",
      "zone2.title": "Унитазы и мебели", "zone2.desc": "Умные унитазы, ванная мебель и сантехника для комплексных проектов. Линейка формируется — каталог в разработке.",
      "zone.link": "Смотреть линейку", "zone.soon": "Линейка в разработке",
      "factory.eyebrow": "Наши заводы", "factory.title": "Две базы. Единая цепочка поставок.",
      "factory.text": "Основаны в 2006 году в Вэньчжоу (Чжэцзян), расширены в 2019 году в Чжунчжоу (Фуцзянь) — ключевые этапы производства сантехнической фурнитуры в единой системе.",
      "factory.tags": ["Литьё и обработка", "Гравировка", "Полировка", "Шлифованная сталь", "Гальваника", "Сборка", "Тестирование"],
      "factory.markets": "Рынки экспорта",
      "cta.title": "Создадим вашу линейку сантехники", "cta.btn": "Отправить запрос",
      "contact.eyebrow": "Контакты", "contact.title": "Свяжитесь с отделом экспорта",
      "form.name": "Ваше имя", "form.email": "Email", "form.company": "Компания", "form.whatsapp": "WhatsApp / Телефон", "form.models": "Модели и количество", "form.subject": "Тема",
      "form.send": "Отправить", "form.note": "Мы отвечаем на каждый запрос в течение 12 рабочих часов.",
      "form.err": "Заполните поле корректно.", "form.ok": "Спасибо — ваш запрос получен. Мы ответим на email в течение 12 рабочих часов.",
      "faq.eyebrow": "Вопросы", "faq.title": "Часто задаваемые вопросы",
      "footer.tag": "Смесители, вентили и фурнитура. Два завода, один стандарт, глобальный экспорт.",
      "footer.collections": "Каталог", "footer.company": "Компания", "footer.headquarter": "Штаб-квартира", "footer.rights": "Все права защищены."
    },
    pt: {
      "nav.home": "Início", "nav.about": "Sobre", "nav.products": "Produtos", "nav.faq": "Dúvidas", "nav.contact": "Contato",
      "nav.inquiry": "Pedir Cotação", "nav.en": "EN",
      "hero.eyebrow": "Quanzhou · desde 2006", "hero.h1": "Metais Sanitários,<br><em>Acabamento Fino</em>", "hero.lead": "Fabricante de torneiras de banheiro e cozinha com duas fábricas em Wenzhou e Quanzhou — atendendo importadores da América do Norte, Oriente Médio e outros mercados.",
      "hero.btn1": "Ver Produtos", "hero.btn2": "Enviar Pedido", "hero.meta1": "Duas fábricas — Wenzhou & Quanzhou", "hero.meta2": "Exportação Global · EN / RU / PT / HI",
      "stats.years": "Anos de Experiência", "stats.factories": "Bases de Produção", "stats.markets": "Regiões de Exportação", "stats.crafts": "Etapas de Acabamento",
      "zones.eyebrow": "Linhas de Produto", "zones.title": "Duas linhas. Um padrão.",
      "zone1.title": "Torneiras e Chuveiros", "zone1.desc": "Torneiras de cozinha, misturadoras de pia, sistemas de chuveiro, torneiras inteligentes, válvulas e acessórios — desenvolvidos, fabricados e exportados das nossas fábricas.",
      "zone2.title": "Vasos e Móveis", "zone2.desc": "Vasos inteligentes, móveis de banheiro e louças sanitárias para projetos completos. A linha está sendo finalizada para lançamento.",
      "zone.link": "Ver Linha", "zone.soon": "Linha em preparação",
      "factory.eyebrow": "As Fábricas", "factory.title": "Duas bases. Uma cadeia integrada.",
      "factory.text": "Fundada em 2006 em Wenzhou, Zhejiang, e expandida em 2019 para Quanzhou, Fujian — controlamos as etapas principais da produção de metais sanitários em um único sistema.",
      "factory.tags": ["Fundição e Usinagem", "Estampagem", "Polido", "Acabamento Escovado", "Galvanoplastia", "Montagem", "Testes"],
      "factory.markets": "Mercados de Exportação",
      "cta.title": "Vamos Montar Sua Linha de Banheiro", "cta.btn": "Enviar Pedido",
      "contact.eyebrow": "Contato", "contact.title": "Fale com Nossa Equipe de Exportação",
      "form.name": "Seu Nome", "form.email": "Email", "form.company": "Empresa", "form.whatsapp": "WhatsApp / Telefone", "form.models": "Modelos e Quantidade", "form.subject": "Assunto",
      "form.send": "Enviar Mensagem", "form.note": "Responderemos a cada pedido em até 12 horas úteis.",
      "form.err": "Preencha este campo corretamente.", "form.ok": "Obrigado — seu pedido foi recebido. Nossa equipe responderá ao seu email em até 12 horas úteis.",
      "faq.eyebrow": "Dúvidas", "faq.title": "Perguntas Frequentes",
      "footer.tag": "Torneiras de banheiro e cozinha, válvulas e metais. Duas fábricas, um padrão, exportação global.",
      "footer.collections": "Coleções", "footer.company": "Empresa", "footer.headquarter": "Sede", "footer.rights": "Todos os direitos reservados."
    },
    hi: {
      "nav.home": "होम", "nav.about": "हमारे बारे में", "nav.products": "उत्पाद", "nav.faq": "सामान्य प्रश्न", "nav.contact": "सम्पर्क",
      "nav.inquiry": "भावमांग करें", "nav.en": "EN",
      "hero.eyebrow": "चूंझोउ · 2006 से", "hero.h1": "बाथरूम हार्डवेयर,<br><em>बारीक शिल्प</em>", "hero.lead": "बाथरूम अंद किचन टैप निर्माता, जिसके पास वेनजोउ अंद चूंझोउ में दो कार्खाने हैं — उत्तर अमेरिका, मध्य पूर्व अंद अन्य बाजारों में अयातकों की सेवां।",
      "hero.btn1": "उत्पाद देखें", "hero.btn2": "प्रश्न भेजें", "hero.meta1": "दो कार्खाने — वेनजोउ अंद चूंझोउ", "hero.meta2": "वैश्विक निर्यात · EN / RU / PT / HI",
      "stats.years": "वर्षों का अनुभव", "stats.factories": "उत्पादन आधार", "stats.markets": "निर्यात क्षेत्र", "stats.crafts": "निर्मां चरं",
      "zones.eyebrow": "उत्पाद श्रृखला", "zones.title": "दो श्रेषीं, एक मानक",
      "zone1.title": "टैप अंद शावर", "zone1.desc": "किचन टैप, बेसिन मिक्सर, शावर सिस्टम, स्मार्ट टैप, वैल्व अंद हार्डवेहर — हमारे अपने कार्खानों से विकसित, निर्मित अंद निर्यात।",
      "zone2.title": "टॉयलीट अंद वैंटी", "zone2.desc": "पूर्ण बाथरूम प्रोजेक्ट के लिए स्मार्ट टॉयलीट, वैंटी अंद सवच्छता उपकरं। एक समर्पित श्रृखला — उत्पाद लाइनें लोंच के लिए तय्यार की जा रही हैं।",
      "zone.link": "श्रेषी देखें", "zone.soon": "श्रेषी तय्यार हो रही है",
      "factory.eyebrow": "हमारे कार्खाने", "factory.title": "दो आधार। एक एकीक्रित अपूर्ति श्रृखला।",
      "factory.text": "2006 में जेजियांग, वेनजोउ में स्थापित, अंद 2019 में फुजियां, चूंझोउ में विस्तारित — हम एक ही अपूर्ति तंत्र के तहत बाथरूम हार्डवेहर उत्पादन के प्रमुख चरंों को नियंत्रित करते हैं।",
      "factory.tags": ["चालू अंद मशीनिंग", "एम्बोसिंग", "पॉलिशिंग", "ब्रशेड मेटल", "इलेक्ट्रोप्लेटिंग", "आसेंबली", "टेस्टिंग"],
      "factory.markets": "निर्यात बाजार",
      "cta.title": "आइए आपकी बाथरूम लाइन बनाएं", "cta.btn": "अपना प्रश्न भेजें",
      "contact.eyebrow": "सम्पर्क", "contact.title": "हमारी निर्यात टीम से बात करें",
      "form.name": "आपका नाम", "form.email": "ईमेल", "form.company": "कम्पणी", "form.whatsapp": "WhatsApp / फोन", "form.models": "मॉडल अंद मात्रा", "form.subject": "विषय",
      "form.send": "संदेश भेजें", "form.note": "हम हर प्रश्न का उत्तर 12 कार्यगण्तों के भीतर देने का लक्ष्य रखते हैं।",
      "form.err": "कृपया इस फील्ड को सही धंग से भरें।", "form.ok": "धन्यवाद — आपका प्रश्न प्राप्त हुआ है। हमारी निर्यात टीम 12 कार्यगण्तों के भीतर आपके ईमेल का उत्तर देगी।",
      "faq.eyebrow": "सामान्य प्रश्न", "faq.title": "अक्षर पूचे जाने वाले प्रश्न",
      "footer.tag": "बाथरूम अंद किचन टैप, वैल्व अंद हार्डवेहर। दो कार्खाने, एक मानक, वैश्विक निर्यात।",
      "footer.collections": "कलेक्शण", "footer.company": "कम्पणी", "footer.headquarter": "मुख्य कार्यालय", "footer.rights": "सर्वाधिकार सूरक्षित।"
    }
  };
  var LANG_KEY = "eutoom_lang";
  var current = localStorage.getItem(LANG_KEY) || "en";
  if (!I18N[current]) current = "en";

  function t(key) {
    return (I18N[current] && I18N[current][key]) || I18N.en[key] || key;
  }
  function applyLang(lang) {
    current = I18N[lang] ? lang : "en";
    localStorage.setItem(LANG_KEY, current);
    document.documentElement.lang = current === "en" ? "en" : current;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.querySelectorAll("[data-i18n-list]").forEach(function (ul) {
      var list = I18N[current][ul.getAttribute("data-i18n-list")];
      if (!list || ul.children.length !== list.length) return;
      Array.prototype.forEach.call(ul.children, function (li, i) {
        li.textContent = list[i];
      });
    });
    document.querySelectorAll(".lang__item").forEach(function (el) {
      el.classList.toggle("is-active", el.dataset.lang === current);
    });
  }

  function bindLang() {
    var langBox = document.querySelector(".lang");
    if (!langBox) return;
    var btn = langBox.querySelector(".lang__btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      langBox.classList.toggle("open");
    });
    document.addEventListener("click", function () { langBox.classList.remove("open"); });
    langBox.querySelectorAll(".lang__item").forEach(function (item) {
      item.addEventListener("click", function () {
        applyLang(item.dataset.lang);
        langBox.classList.remove("open");
      });
    });
  }
  bindLang();
  applyLang(current);

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".faq__q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq__item");
      var wasOpen = item.classList.contains("open");
      item.closest(".faq").querySelectorAll(".faq__item.open").forEach(function (o) { o.classList.remove("open"); });
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* ---------------- Inquiry form (mailto fallback) ---------------- */
  document.querySelectorAll("form.inquiry").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        var field = f.closest(".field");
        var valid = f.checkValidity();
        if (!valid) ok = false;
        if (field) field.classList.add("err");
      });
      form.querySelectorAll(".field").forEach(function (f) {
        f.classList.remove("err");
      });
      if (!ok) {
        form.querySelectorAll(".field").forEach(function (field) {
          var f = field.querySelector("input,select,textarea");
          if (f && !f.checkValidity()) field.classList.add("err");
        });
        return;
      }
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      var mailto = "mailto:eutoom888@Outlook.com" +
        "?subject=" + encodeURIComponent("[EUTOOM Inquiry] " + (data.subject || "Product Inquiry")) +
        "&body=" + encodeURIComponent(
          "Name: " + (data.name || "") + "\nCompany: " + (data.company || "") +
          "\nWhatsApp/Phone: " + (data.whatsapp || "") + "\n\nModels & Quantity:\n" + (data.models || "")
        );
      window.location.href = mailto;
      var okBox = form.parentElement.querySelector(".form-success");
      if (okBox) okBox.classList.add("show");
      form.reset();
    });
  });

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("revealed"); });
  }

  /* ---------------- Stats counter animation ---------------- */
  var statNums = document.querySelectorAll(".stat__num");
  if (statNums.length && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.dataset.counted) return;
        el.dataset.counted = "1";
        el.classList.add("counting");
        var raw = el.textContent.trim();
        var suffix = "";
        var target = parseInt(raw.replace(/[^0-9]/g, ""), 10) || 0;
        var prefix = raw.match(/^[^0-9]*/)[0];
        suffix = raw.replace(/^[^0-9]*[0-9]+/, "");
        var duration = 1600;
        var start = performance.now();
        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var ease = 1 - Math.pow(1 - p, 3);
          var val = Math.round(target * ease);
          el.textContent = prefix + val + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else { el.textContent = raw; el.classList.remove("counting"); }
        }
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.3 });
    statNums.forEach(function (el) { countObserver.observe(el); });
  }

  /* ---------------- Factory tag tooltips ---------------- */
  var tagTips = {
    "Casting & Machining": "Sand casting & CNC precision machining for brass bodies",
    "Embossing": "Decorative surface embossing and pattern stamping",
    "Polishing": "Multi-stage polishing to mirror or satin finish",
    "Brushed Metal": "Directional brushing for matte textured surfaces",
    "Electroplating": "Chrome, PVD, or electroplated finish application",
    "Assembly": "Component fitting, cartridge installation & leak testing",
    "Testing": "Pressure, flow-rate and salt-spray quality testing"
  };
  document.querySelectorAll(".factory__tags li").forEach(function (li) {
    var text = li.textContent.trim();
    var tip = tagTips[text] || "";
    if (tip) li.setAttribute("data-tip", tip);
  });

  /* ---------------- Product tabs (detail pages) ---------------- */
  document.querySelectorAll(".prod-tabs").forEach(function (tabs) {
    var btns = tabs.querySelectorAll(".prod-tab");
    var panels = [];
    btns.forEach(function (btn) {
      var panel = document.getElementById(btn.dataset.tab);
      if (panel) panels.push({ btn: btn, panel: panel });
      btn.addEventListener("click", function () {
        panels.forEach(function (p) {
          p.btn.classList.remove("is-active");
          p.panel.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        if (panel) panel.classList.add("is-active");
      });
    });
  });

  /* ---------------- Product thumbnail switcher ---------------- */
  document.querySelectorAll(".prod-card__thumbs").forEach(function (thumbs) {
    var card = thumbs.closest(".prod-card");
    if (!card) return;
    var mainImg = card.querySelector(".prod-card__img");
    var imgs = thumbs.querySelectorAll("img");
    if (!mainImg || !imgs.length) return;
    imgs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        imgs.forEach(function (t) { t.classList.remove("is-active"); });
        thumb.classList.add("is-active");
        mainImg.src = thumb.src;
        mainImg.alt = thumb.alt;
      });
    });
    if (imgs[0]) imgs[0].classList.add("is-active");
  });

  /* ================================================================
     DEFERRED — all below runs after page load to avoid blocking FCP
     ================================================================ */
  function onReady() {
    /* ---- Lightbox (lazy-created) ---- */
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="Close">&times;</button>' +
      '<button class="lightbox__nav lightbox__prev" aria-label="Previous">&#8249;</button>' +
      '<button class="lightbox__nav lightbox__next" aria-label="Next">&#8250;</button>' +
      '<img class="lightbox__img" src="" alt="">' +
      '<span class="lightbox__counter"></span>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector(".lightbox__img");
    var lbCounter = lb.querySelector(".lightbox__counter");
    var lbGroup = [];
    var lbIndex = 0;

    function lbShow(src) {
      lbImg.src = src;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function lbClose() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      lbImg.src = "";
    }
    function lbPrev() {
      if (lbGroup.length < 2) return;
      lbIndex = (lbIndex - 1 + lbGroup.length) % lbGroup.length;
      lbImg.src = lbGroup[lbIndex];
      lbCounter.textContent = (lbIndex + 1) + " / " + lbGroup.length;
    }
    function lbNext() {
      if (lbGroup.length < 2) return;
      lbIndex = (lbIndex + 1) % lbGroup.length;
      lbImg.src = lbGroup[lbIndex];
      lbCounter.textContent = (lbIndex + 1) + " / " + lbGroup.length;
    }

    lb.querySelector(".lightbox__close").addEventListener("click", lbClose);
    lb.querySelector(".lightbox__prev").addEventListener("click", lbPrev);
    lb.querySelector(".lightbox__next").addEventListener("click", lbNext);
    lb.addEventListener("click", function (e) { if (e.target === lb) lbClose(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lbClose();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    });

    document.querySelectorAll("[data-lightbox]").forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () {
        var group = img.getAttribute("data-lightbox");
        var items = document.querySelectorAll('[data-lightbox="' + group + '"]');
        lbGroup = [];
        lbIndex = 0;
        items.forEach(function (item, i) {
          lbGroup.push(item.src);
          if (item === img) lbIndex = i;
        });
        lbShow(lbGroup[lbIndex]);
        lbCounter.textContent = (lbIndex + 1) + " / " + lbGroup.length;
      });
    });

    /* ---- Back to top (lazy-created) ---- */
    var btt = document.createElement("button");
    btt.className = "back-top";
    btt.setAttribute("aria-label", "Back to top");
    btt.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>';
    document.body.appendChild(btt);
    btt.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    /* ---- Side quote float (lazy-created) ---- */
    var sideQuote = document.createElement("a");
    sideQuote.className = "side-quote";
    sideQuote.href = "contact.html";
    sideQuote.textContent = "GET A QUOTE →";
    document.body.appendChild(sideQuote);
    var sqShown = false;

    /* ---- Quick inquiry modal (lazy-created) ---- */
    var qiOverlay = document.createElement("div");
    qiOverlay.className = "qi-overlay";
    qiOverlay.innerHTML =
      '<div class="qi-modal">' +
      '<button class="qi-close" aria-label="Close">&times;</button>' +
      '<h3>Quick Inquiry</h3>' +
      '<form class="qi-form">' +
      '<div class="field"><label>Name <b>*</b></label><input type="text" name="name" required></div>' +
      '<div class="field"><label>Email <b>*</b></label><input type="email" name="email" required></div>' +
      '<div class="field"><label>WhatsApp / Phone</label><input type="text" name="whatsapp"></div>' +
      '<div class="field"><label>Models & Quantity</label><textarea name="models" rows="3" style="min-height:80px"></textarea></div>' +
      '<input type="hidden" name="product" value="">' +
      '<button type="submit" class="btn btn--dark" style="width:100%;justify-content:center;margin-top:8px">SEND INQUIRY</button>' +
      '</form>' +
      '</div>';
    document.body.appendChild(qiOverlay);

    function qiOpen(productName) {
      qiOverlay.querySelector("[name=product]").value = productName || "";
      qiOverlay.querySelector("h3").textContent = productName ? "Inquiry: " + productName : "Quick Inquiry";
      qiOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function qiClose() {
      qiOverlay.classList.remove("open");
      document.body.style.overflow = "";
    }
    qiOverlay.querySelector(".qi-close").addEventListener("click", qiClose);
    qiOverlay.addEventListener("click", function (e) { if (e.target === qiOverlay) qiClose(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && qiOverlay.classList.contains("open")) qiClose(); });

    qiOverlay.querySelector(".qi-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var d = {};
      new FormData(this).forEach(function (v, k) { d[k] = v; });
      var mailto = "mailto:eutoom888@Outlook.com" +
        "?subject=" + encodeURIComponent("[EUTOOM Quick Inquiry] " + (d.product || "Product Inquiry")) +
        "&body=" + encodeURIComponent("Name: " + (d.name || "") + "\nEmail: " + (d.email || "") + "\nWhatsApp: " + (d.whatsapp || "") + "\nProduct: " + (d.product || "") + "\nModels & Qty:\n" + (d.models || ""));
      window.location.href = mailto;
      qiClose();
    });

    document.querySelectorAll(".qi-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".prod-card");
        var name = card ? (card.querySelector(".prod-card__name") || {}).textContent : "";
        qiOpen(name);
      });
    });

    /* ---- Cookie bar (lazy-created) ---- */
    var COOKIE_KEY = "eutoom_cookie_ok";
    if (!localStorage.getItem(COOKIE_KEY)) {
      var cb = document.createElement("div");
      cb.className = "cookie-bar";
      cb.innerHTML = '<div class="wrap"><p>We use cookies to improve your experience. By continuing you agree to our <a href="privacy.html">Privacy Policy</a>.</p><button class="cookie-bar__btn">ACCEPT</button></div>';
      document.body.appendChild(cb);
      cb.querySelector(".cookie-bar__btn").addEventListener("click", function () {
        localStorage.setItem(COOKIE_KEY, "1");
        cb.classList.remove("show");
        setTimeout(function () { cb.remove(); }, 500);
      });
      setTimeout(function () { cb.classList.add("show"); }, 2000);
    }

    /* ---- Merged scroll handler (single listener) ---- */
    var heroBg = document.querySelector(".hero__bg");
    var inquiryBar = document.querySelector(".inquiry-bar");
    var barShown = false;
    var rafId = 0;
    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;

        // Nav scroll
        if (nav) {
          nav.classList.toggle("scrolled", y > 12);
          if (onDark && y > 12) nav.classList.remove("nav--on-dark");
        }

        // Hero parallax
        if (heroBg && y < window.innerHeight * 1.2) {
          heroBg.style.transform = "translateY(" + (y * 0.3) + "px)";
        }

        // Back to top
        if (btt) btt.classList.toggle("show", y > 400);

        // Side quote
        var showSq = y > 600;
        if (showSq !== sqShown) { sqShown = showSq; sideQuote.classList.toggle("show", showSq); }

        // Inquiry bar
        if (inquiryBar) {
          var shouldShow = y > 400;
          if (shouldShow !== barShown) { barShown = shouldShow; inquiryBar.classList.toggle("show", shouldShow); }
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Defer heavy work to after page load
  if (document.readyState === "complete") {
    onReady();
  } else {
    window.addEventListener("load", onReady);
  }
})();
