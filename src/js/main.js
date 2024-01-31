const hamburgerIcon = document.querySelector(".js__open-sidenav");
const hamburgerIconMobile = document.querySelector(".js__open-sidenav-mobile");
const sideNav = document.querySelector(".js__sidenav");

hamburgerIcon.addEventListener("click", () => {
  sideNav.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
});
hamburgerIconMobile.addEventListener("click", () => {
  sideNav.classList.toggle("active");
  hamburgerIconMobile.classList.toggle("active");
});
function addOnHoverListeners() {
  const onHoverList = document.querySelectorAll(".js__has-subnav");
  const onHoverOpenList = document.querySelectorAll(".js__subnav");
  if (onHoverList !== null && onHoverOpenList !== null) {
    onHoverList.forEach(function (onHover, index) {
      const onHoverOpen = onHoverOpenList[index];

      onHover.addEventListener("mouseover", function () {
        onHover.classList.add("text-lg", "font-bold");
        onHoverOpen.style.visibility = "visible";
        onHoverOpen.style.opacity = "1";
      });

      onHover.addEventListener("mouseout", function () {
        onHover.classList.remove("text-lg", "font-bold");
        onHoverOpen.style.visibility = "hidden";
        onHoverOpen.style.opacity = "0";
      });

      onHoverOpen.addEventListener("mouseover", function () {
        onHover.classList.add("text-lg", "font-bold");
        onHoverOpen.style.visibility = "visible";
        onHoverOpen.style.opacity = "1";
      });

      onHoverOpen.addEventListener("mouseout", function () {
        onHover.classList.remove("text-lg", "font-bold");
        onHoverOpen.style.visibility = "hidden";
        onHoverOpen.style.opacity = "0";
      });
    });
  }
}
addOnHoverListeners();

const accordionItems = document.querySelectorAll(".js__accordion-item");

accordionItems.forEach(function (item) {
  const title = item.querySelector(".js__has-subnav-mobile");
  const content = item.querySelector(".js__subnav");
  if (title !== null && content !== null) {
    title.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");

      // Close all accordion items
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains("open")) {
          otherItem.classList.remove("open");
          otherItem
            .querySelector(".js__has-subnav-mobile")
            .classList.remove("open", "text-base", "font-bold");
          otherItem.querySelector(".js__subnav").classList.remove("open");
        }
      });

      // Toggle current accordion item
      if (isOpen) {
        item.classList.remove("open");
        content.classList.remove("open");
        title.classList.remove("open", "text-base", "font-bold");
        title.classList.add("text-s");
      } else {
        item.classList.add("open");
        content.classList.add("open");
        title.classList.add("open", "text-base", "font-bold");
        title.classList.remove("text-s");
      }
    });
  }
});

const accordionItemsParent = document.querySelectorAll(
  ".js__accordion-item-parent"
);

accordionItemsParent.forEach(function (item) {
  const title = item.querySelector(".js__has-subnav-parent");
  const content = item.querySelector(".js__subnav-parent");
  if (title !== null && content !== null) {
    title.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");

      // Close all accordion items
      accordionItemsParent.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains("open")) {
          otherItem.classList.remove("open");
          otherItem
            .querySelector(".js__has-subnav-parent")
            .classList.remove("open");
          otherItem
            .querySelector(".js__subnav-parent")
            .classList.remove("open");
        }
      });

      // Toggle current accordion item
      if (isOpen) {
        item.classList.remove("open");
        content.classList.remove("open");
        title.classList.remove("open");
      } else {
        item.classList.add("open");
        content.classList.add("open");
        title.classList.add("open");
      }
    });
  }
});

const tabLinks = document.querySelectorAll(".js__tablink");
const accordionToggles = document.querySelectorAll(".js__accordion-toggle");
const tabContents = document.querySelectorAll(".js__tabcontent");

let activeTabIndex = 0; // Track the index of the active tab link
let scrollOffset = 0; // Initialize the scroll offset to 0

// Function to display the tab content at the given index
function displayTabContent(index) {
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = "none";
  });
  tabContents[index].style.display = "flex";

  /// Scroll to the corresponding accordion toggle (if scroll offset is defined)
  if (scrollOffset !== 0) {
    const targetElement = accordionToggles[index];
    const scrollPosition =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset +
      scrollOffset;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
}
// Function to update the active tab link and tab content
function updateTab(activeIndex) {
  tabLinks.forEach(function (link) {
    // link.classList.remove("active");
    link.classList.remove("text-base", "text-blue", "font-bold");
    link.classList.add("text-s", "font-semibold", "active");
  });
  // tabLinks[activeIndex].classList.add("active");
  tabLinks[activeIndex].classList.add("text-base", "text-blue", "font-bold");
  tabLinks[activeIndex].classList.remove("text-s", "font-semibold", "active");
  displayTabContent(activeIndex);
}

// Event listener for tab link click
tabLinks.forEach(function (tabLink, index) {
  tabLink.addEventListener("click", function () {
    activeTabIndex = index;
    updateTab(activeTabIndex);
    accordionToggles.forEach(function (toggle) {
      toggle.classList.remove("active");
    });
    accordionToggles[activeTabIndex].classList.add("active");
  });
});

// Event listener for accordion toggle click
accordionToggles.forEach(function (accordionToggle, index) {
  accordionToggle.addEventListener("click", function () {
    const isActive = accordionToggle.classList.contains("active");
    accordionToggles.forEach(function (toggle) {
      toggle.classList.remove(
        "active",
        "text-base",
        "text-blue",
        "font-bold",
        "justify-between"
      );
      toggle.classList.add("text-s");
    });
    if (!isActive) {
      accordionToggle.classList.add(
        "active",
        "text-base",
        "text-blue",
        "font-bold",
        "justify-between"
      );
      accordionToggle.classList.remove("text-s");
      displayTabContent(index);
      updateTab(index);
    } else {
      tabContents[index].style.display = "none";
    }
  });
});

// Check if window width is below the breakpoint value
function checkResponsiveLayout() {
  const breakpoint = 1024; // Set your desired breakpoint value
  if (window.innerWidth <= breakpoint) {
    scrollOffset = -100; // Set the desired scroll offset for responsive layout
  } else {
    scrollOffset = 0; // Reset scroll offset for desktop layout
  }
}

// Initial check on page load
checkResponsiveLayout();

// Event listener for window resize
window.addEventListener("resize", function () {
  checkResponsiveLayout();
});

// Get all the dropdown from document
document.querySelectorAll(".js__dropdown-toggle").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
  dropDown.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.nextElementSibling.classList.contains("active") === true) {
      // Close the clicked dropdown
      this.parentElement.classList.remove("open");
      this.nextElementSibling.classList.remove("active");
    } else {
      // Close the opend dropdown
      closeDropdown();

      // add the open and active class(Opening the DropDown)
      this.parentElement.classList.add("open");
      this.nextElementSibling.classList.add("active");
    }
  });
}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".js__dropdown") === null) {
    // Close the opend dropdown
    closeDropdown();
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document.querySelectorAll(".js__dropdown").forEach(function (container) {
    container.classList.remove("open");
  });

  document.querySelectorAll(".js__dropdown-menu").forEach(function (menu) {
    menu.classList.remove("active");
  });
}

// Filter js for new arrival section

const items = document.querySelectorAll(".newarrivals_tablist .tabs");
const products = document.querySelectorAll(".newarrivals_tabdata .newarrivals_tabdata-wd");

items.forEach((item) => {
  // Active
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("tab-active");
    });
    item.classList.add("tab-active");

    // Filter
    const valueAttr = item.getAttribute("data-filter");
    products.forEach((item) => {
      item.style.display = "none";
      if (
        item.getAttribute("data-filter").toLowerCase() ==
          valueAttr.toLowerCase() ||
        valueAttr == "all"
      ) {
        item.style.display = "inline-block";
      }
    });
  });
});

// document.getElementById('wishlist').addEventListener('click', function() {
//   var heartIcon = document.getElementById('heartIcon');
//   heartIcon.classList.toggle('addwishlist');
//   // heartIcon.classList.toggle('text-gray');
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const wishlistElements = document.querySelectorAll('.wishlist');

//   wishlistElements.forEach(wishlist => {
//       const wishlistId = wishlist.dataset.wishlistId;
//       createWishlist(wishlist, wishlistId);
//   });
// });

// function createWishlist(container, wishlistId) {
//   container.innerHTML = `
//       <svg id="heartIcon-${wishlistId}" class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//       </svg>
//   `;

//   const heartIcon = document.getElementById(`heartIcon-${wishlistId}`);

//   container.addEventListener('click', function () {
//       heartIcon.classList.toggle('addwishlist');
//       // heartIcon.classList.toggle('text-gray-400');
//   });
// }

// (function() {
//   const heart = document.getElementById('heart');
//   heart.addEventListener('click', function() {
//     heart.classList.toggle('red');
//   });
// })();

// (function() {
//   const hearts = document.querySelectorAll('.wishlist');

//   hearts.forEach(heart => {
//       heart.addEventListener('click', function() {
//           heart.classList.toggle('red');
//       });
//   });
// })();

function myFunction(x) {
  x.classList.toggle("wishlist-add");
}



// jquery code starts
jQuery(document).ready(function () {
  jQuery(".js__hero-banner-slider").slick({
    dots: false,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  jQuery(".js__three-column-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  jQuery(".js__trending-slider").slick({
    dots: false,
    prevArrow: '<button class="trending-arrow prev-arrow"><span></span></button>',
    nextArrow: '<button class="trending-arrow next-arrow"><span></span></button>',
    // arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        prevArrow: $(".pp2"),
        nextArrow: $(".nn2"),
      },
    ],
    

  });

  jQuery(".js__exlore-grid-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1149,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: "unslick",
      },
    ],
  };

  const sl = jQuery(".js__four-column-product-slider").slick(settings);
  jQuery(window).on("resize", function () {
    if (jQuery(window).width() > 1023 && !sl.hasClass("slick-initialized")) {
      jQuery(".js__four-column-product-slider").slick(settings);
    }
  });
});