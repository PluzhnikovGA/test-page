(function () {
  const width = document.documentElement.scrollWidth;

  if (width <= 576) {
    gsap
      .timeline()
      .from(".hero__picture2", {
        duration: 0.75,
        opacity: 0,
        x: 80,
        delay: -0.25,
      })
      .from(".hero__picture4", {
        duration: 0.5,
        opacity: 0,
        y: -120,
        delay: -0.25,
      });
  } else if (width <= 768) {
    gsap
      .timeline()
      .from(".hero__ellipse-one", { duration: 0.5, opacity: 0 })
      .from(".hero__ellipse-three", { duration: 0.5, opacity: 0, delay: -0.25 })
      .from(".hero__rectangle", {
        duration: 0.5,
        opacity: 0,
        y: 80,
        delay: -0.25,
      })
      .from(".hero__picture2", {
        duration: 0.75,
        opacity: 0,
        x: 80,
        delay: -0.25,
      })
      .from(".hero__picture4", {
        duration: 0.5,
        opacity: 0,
        y: -120,
        delay: -0.25,
      });
  } else {
    gsap
      .timeline()
      .from(".hero__ellipse-one", { duration: 0.5, opacity: 0 })
      .from(".hero__ellipse-two", {
        duration: 0.5,
        opacity: 0,
        delay: -0.25,
      })
      .from(".hero__ellipse-three", { duration: 0.5, opacity: 0, delay: -0.25 })
      .from(".hero__rectangle", {
        duration: 0.5,
        opacity: 0,
        y: 80,
        delay: -0.25,
      })
      .from(".hero__picture1", {
        duration: 0.75,
        opacity: 0,
        x: -80,
        delay: -0.25,
      })
      .from(".hero__picture2", {
        duration: 0.75,
        opacity: 0,
        x: 80,
        delay: -0.25,
      })
      .from(".hero__picture3", {
        duration: 0.75,
        opacity: 0,
        x: -120,
        delay: -0.25,
      })
      .from(".hero__picture4", {
        duration: 0.5,
        opacity: 0,
        y: -120,
        delay: -0.25,
      })
      .from(".hero__picture5", {
        duration: 0.5,
        opacity: 0,
        y: 50,
        delay: -0.25,
      });
  }
})();

(function () {
  const btnContact = document.getElementById("contact");

  if (!btnContact) return;

  btnContact.addEventListener("click", () => {
    const wrapper = document.querySelector(".wrapper");
    const popup = document.querySelector(".popup");

    wrapper.classList.add("wrapper--visible");
    popup.classList.add("popup--visible");
  });
})();

(function () {
  const btnContact = document.getElementById("contact");

  if (!btnContact) return;

  btnContact.addEventListener("click", () => {
    const wrapper = document.querySelector(".wrapper");
    const popup = document.querySelector(".popup");

    wrapper.classList.add("wrapper--visible");
    popup.classList.add("popup--visible");
  });

  document.querySelector(".popup").addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });

  document.querySelector(".wrapper").addEventListener("click", (event) => {
    if (event._isClickWithInModal) return;
    event._isClickWithInModal = true;

    const wrapper = document.querySelector(".wrapper");
    const popup = document.querySelector(".popup");

    wrapper.classList.remove("wrapper--visible");
    popup.classList.remove("popup--visible");
  });
})();
