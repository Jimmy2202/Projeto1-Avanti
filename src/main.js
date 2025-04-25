// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const inputs = document.querySelectorAll(".inputheader");
const messages = document.querySelectorAll(".message");
const listItems = document.querySelectorAll(".ulnav li");
const listItemsMain = document.querySelectorAll(".ulnavmain li");
const ul1 = document.querySelectorAll(".ul1 li");
const dep_div = document.querySelector(".dep-div");
const divcat = document.querySelectorAll(".divcat");
const licategorias = document.querySelector(".licategorias");
const categorias1 = document.querySelector(".categorias1");
const categorias2 = document.querySelector(".categorias2");
const carrinho = document.querySelectorAll(".carrinho");
const menumobile = document.querySelector(".menu-mobile");
const lifooter = document.querySelectorAll(".lifooter");
const comprar = document.querySelectorAll(".comprar-btn");
let count = 0;

const func_ul1 = (value) => {
  const text = value == "Departamento >" ? "Categoria" : "Categoria";
  ul1.forEach((item, index) => {
    item.textContent = text;
    item.classList.add("hover:text-blue-500");
  });
};

document.querySelectorAll(".ulnav-mobile li").forEach((item) => {
  item.classList.add("hover:cursor-pointer");
  item.classList.add("hover:text-blue-500", "hover:font-semibold");

  item.addEventListener("click", (e) => {
    document
      .querySelectorAll(".ulnav-mobile li")
      .forEach((li) =>
        li.classList.remove("text-blue-500", "hover:font-semibold")
      );
    const value = e.target.textContent;
    func_ul1(value);

    item.classList.add("text-blue-500", "hover:font-semibold");
    document.querySelector(".depdivmain2").classList.remove("hidden");
    document.querySelector(".depdivmain2").classList.add("flex");
    document.querySelector(".dep-div2").classList.remove("hidden");
    document.querySelector(".dep-div2").classList.add("flex");
  });
});

document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

document.querySelector(".menulist").addEventListener("click", () => {
  document.querySelector(".divmenumobile").classList.remove("hidden");
  document.querySelector(".divmenumobile").classList.add("flex");
});

menumobile.addEventListener("click", () => {
  if (document.querySelector(".divmenumobile").classList.contains("flex")) {
    document.querySelector(".divmenumobile").classList.remove("flex");
    document.querySelector(".divmenumobile").classList.add("hidden");

    if (document.querySelector(".depdivmain2").classList.contains("flex")) {
      document.querySelector(".depdivmain2").classList.remove("flex");
      document.querySelector(".depdivmain2").classList.add("hidden");
    }
  }
});

comprar.forEach((e) => {
  e.addEventListener("click", () => {
    count++;
    carrinho.forEach((item) => {
      item.classList.add("pl-1", "pr-1");
      item.textContent = count;
    });
  });
});

ul1.forEach((item) => {
  item.classList.add(
    "hover:text-blue-700",
    "hover:font-semibold",
    "hover:cursor-pointer"
  );
});

lifooter.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.classList.contains("ins")) {
      if (document.querySelector(".institucional").classList.contains("flex")) {
        document.querySelector(".institucional").classList.remove("flex");
        document.querySelector(".institucional").classList.add("hidden");
      } else {
        document.querySelector(".institucional").classList.remove("hidden");
        document.querySelector(".institucional").classList.add("flex");
      }

      if (!document.querySelector(".righti").classList.contains("hidden")) {
        document.querySelector(".righti").classList.add("hidden");
        document.querySelector(".downi").classList.remove("hidden");
      } else {
        document.querySelector(".righti").classList.remove("hidden");
        document.querySelector(".righti").classList.add("flex");
        document.querySelector(".downi").classList.add("hidden");
      }
    } else if (e.target.classList.contains("crt")) {
      if (document.querySelector(".ajuda").classList.contains("flex")) {
        document.querySelector(".ajuda").classList.remove("flex");
        document.querySelector(".ajuda").classList.add("hidden");
      } else {
        document.querySelector(".ajuda").classList.remove("hidden");
        document.querySelector(".ajuda").classList.add("flex");
      }

      if (!document.querySelector(".rightc").classList.contains("hidden")) {
        document.querySelector(".rightc").classList.add("hidden");
        document.querySelector(".downc").classList.remove("hidden");
      } else {
        document.querySelector(".rightc").classList.remove("hidden");
        document.querySelector(".rightc").classList.add("flex");
        document.querySelector(".downc").classList.add("hidden");
      }
    } else if (e.target.classList.contains("ate")) {
      if (document.querySelector(".atendimento").classList.contains("flex")) {
        document.querySelector(".atendimento").classList.remove("flex");
        document.querySelector(".atendimento").classList.add("hidden");
      } else {
        document.querySelector(".atendimento").classList.remove("hidden");
        document.querySelector(".atendimento").classList.add("flex");
      }

      if (!document.querySelector(".righta").classList.contains("hidden")) {
        document.querySelector(".righta").classList.add("hidden");
        document.querySelector(".downa").classList.remove("hidden");
      } else {
        document.querySelector(".righta").classList.remove("hidden");
        document.querySelector(".righta").classList.add("flex");
        document.querySelector(".downa").classList.add("hidden");
      }
    }
  });
});

licategorias.addEventListener("click", (e) => {
  if (categorias2.classList.contains("flex")) {
    categorias2.classList.remove("flex");
    categorias2.classList.add("hidden");
  }

  if (categorias1.classList.contains("flex")) {
    categorias1.classList.remove("flex");
    categorias1.classList.add("hidden");
  } else if (categorias1.classList.contains("hidden")) {
    categorias1.classList.remove("hidden");
    categorias1.classList.add("flex");
  }
});

listItems.forEach((item, index) => {
  item.classList.add("hover:cursor-pointer");
  item.classList.add("hover:text-blue-500", "hover:font-semibold");

  //item.classList.add("hover:text-blue-500");
  item.addEventListener("click", (e) => {
    listItems.forEach((li) =>
      li.classList.remove("text-blue-500", "hover:font-semibold")
    );
    const value = e.target.textContent;
    func_ul1(value);

    item.classList.add("text-blue-500", "hover:font-semibold");
    dep_div.classList.remove("hidden");
    dep_div.classList.add("flex");
    divcat.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.add("flex");
    });
  });
});

listItemsMain.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Remove a classe 'text-blue-500' de todos os outros elementos
    listItemsMain.forEach((li) => {
      if (li !== item) {
        li.classList.remove("text-blue-500");
      }
    });

    const isActive = item.classList.contains("text-blue-500");

    // Se a li clicada não for a de 'Todas as Categorias'
    if (!e.target.classList.contains("licategorias")) {
      if (isActive) {
        // Se já está ativo, fecha o categorias2
        categorias2.classList.remove("flex");
        categorias2.classList.add("hidden");
      } else {
        // Se não está ativo, abre o categorias2
        categorias2.classList.remove("hidden");
        categorias2.classList.add("flex");

        // Fecha o categorias1 se ele estiver aberto
        if (categorias1.classList.contains("flex")) {
          categorias1.classList.remove("flex");
          categorias1.classList.add("hidden");
        }
      }
    }

    // Toggle da classe 'text-blue-500' do item clicado
    item.classList.toggle("text-blue-500");
  });
});

const func = (event) => {
  event.preventDefault();
  let search = "";

  inputs.forEach((input) => {
    if (input.value != "") {
      search = input.value;
    }
    input.value = "";
  });

  console.log(messages);

  messages.forEach((message) => {
    console.log(message);
    message.textContent = "Você buscou por: " + "'" + search + "'";
    message.classList.add("pl-2", "pr-2");
    setTimeout(() => {
      message.textContent = "";
      message.classList.remove("pl-2", "pr-2");
      message.classList.add("p-0");
    }, 3000);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".formHeader");
  forms.forEach((form) => {
    form.addEventListener("submit", func);
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //slidesPerView: 5, // Quantos slides aparecem ao mesmo tempo
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 5,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //slidesPerView: 5, // Quantos slides aparecem ao mesmo tempo
  spaceBetween: 10,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
