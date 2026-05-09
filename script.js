const palettes = [
  {
    id: "salt-marigold",
    name: "Salt Marigold",
    colors: ["#fffefa", "#26231f", "#176c66", "#f2b84b"],
    paper: "#fff7e1",
    ink: "#26231f",
    accent: "#176c66",
    warm: "#bd5f3b"
  },
  {
    id: "gallery-red",
    name: "Gallery Red",
    colors: ["#f8f5f0", "#211d1b", "#aa3128", "#30706f"],
    paper: "#f8f5f0",
    ink: "#211d1b",
    accent: "#aa3128",
    warm: "#30706f"
  },
  {
    id: "moss-ink",
    name: "Moss Ink",
    colors: ["#f2f3ea", "#1d241d", "#627b4d", "#c47b4b"],
    paper: "#f2f3ea",
    ink: "#1d241d",
    accent: "#627b4d",
    warm: "#c47b4b"
  },
  {
    id: "paper-cobalt",
    name: "Paper Cobalt",
    colors: ["#faf9f4", "#1f2328", "#315fba", "#c86b45"],
    paper: "#faf9f4",
    ink: "#1f2328",
    accent: "#315fba",
    warm: "#c86b45"
  },
  {
    id: "penn-classic",
    name: "Penn Classic",
    colors: ["#ffffff", "#011f5b", "#990000", "#82afd3"],
    paper: "#ffffff",
    ink: "#011f5b",
    accent: "#990000",
    warm: "#82afd3"
  }
];

const fontStacks = {
  Inter: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  Roboto: '"Roboto", Arial, sans-serif',
  "EB Garamond": '"EB Garamond", Georgia, "Times New Roman", serif',
  Georgia: 'Georgia, "Times New Roman", serif',
  Verdana: 'Verdana, Geneva, sans-serif',
  "Trebuchet MS": '"Trebuchet MS", Tahoma, sans-serif'
};

const PENN_COLLEGE_HALL_IMAGE = "assets/college-hall.jpg";
const PENN_FISHER_FINE_ARTS_IMAGE = "assets/fisher-fine-arts-library.jpg";
const PENN_STUDENT_ORIENTATION_IMAGE = "assets/student-life-orientation.jpg";
const PENN_STUDENT_HOLI_IMAGE = "assets/student-life-holi.jpg";
const PENN_STUDENT_CONVOCATION_IMAGE = "assets/student-life-convocation.jpg";
const PENN_STUDENT_POWWOW_IMAGE = "assets/student-life-powwow.jpg";
const PENN_RESEARCH_MRNA_IMAGE = "assets/research-mrna.jpg";
const PENN_RESEARCH_CHIP_IMAGE = "assets/research-chip.jpg";
const PENN_RESEARCH_LAB_IMAGE = "assets/research-composito-lab.jpg";
const PENN_RESEARCH_SUPERCOMPUTER_IMAGE = "assets/research-supercomputer.jpg";
const PENN_HERO_IMAGE = PENN_COLLEGE_HALL_IMAGE;
const PENN_GALLERY_CAMPUS = PENN_COLLEGE_HALL_IMAGE;
const PENN_GALLERY_RESEARCH = PENN_FISHER_FINE_ARTS_IMAGE;
const PENN_GALLERY_CITY = PENN_FISHER_FINE_ARTS_IMAGE;
const PENN_GALLERY_IMAGES = [
  PENN_COLLEGE_HALL_IMAGE,
  PENN_FISHER_FINE_ARTS_IMAGE,
  PENN_STUDENT_ORIENTATION_IMAGE,
  PENN_STUDENT_HOLI_IMAGE,
  PENN_STUDENT_CONVOCATION_IMAGE,
  PENN_STUDENT_POWWOW_IMAGE,
  PENN_RESEARCH_MRNA_IMAGE,
  PENN_RESEARCH_CHIP_IMAGE,
  PENN_RESEARCH_LAB_IMAGE,
  PENN_RESEARCH_SUPERCOMPUTER_IMAGE
];
const DEFAULT_HERO_IMAGE = PENN_HERO_IMAGE;
const OLD_DEFAULT_VIDEO_URLS = ["https://vimeo.com/416160065"];
const DEFAULT_VIDEO_URL = "https://vimeo.com/1084537";
const PREVIEW_ID = "upenn-preview-2026-05-09-penn-buildings";

const starterState = {
  previewId: PREVIEW_ID,
  videoSectionSeeded: true,
  siteTitle: "Penn",
  tagline: "A Philadelphia campus where rigorous teaching, interdisciplinary research, and civic engagement move ideas into the world.",
  audience: "Students, faculty, alumni, and visitors",
  palette: "penn-classic",
  font: "EB Garamond",
  secondaryFont: "Roboto",
  radius: 6,
  selectedId: "hero",
  sections: [
    {
      id: "hero",
      layout: "hero",
      heading: "Penn",
      body: "Rooted in Philadelphia and connected to the world, Penn brings teaching, research, service, and innovation together across a historic urban campus.",
      buttonText: "Explore Penn",
      heroImage: PENN_HERO_IMAGE,
      heroImagePosition: "right",
      visible: true
    },
    {
      id: "principle",
      layout: "text",
      heading: "In principle and practice",
      body: "Penn's preview story is built around academic breadth, research intensity, civic purpose, and a campus culture shaped by Philadelphia. This section uses the full-width Text layout for a broad institutional message.",
      visible: true
    },
    {
      id: "academics",
      layout: "split",
      heading: "Academics across a connected university.",
      body: "Four undergraduate schools and 12 graduate and professional schools create a distinctive ecosystem for learning across liberal arts, business, engineering, design, law, medicine, education, policy, and more.",
      buttonText: "View academics",
      visible: true
    },
    {
      id: "facts",
      layout: "stats",
      heading: "Penn Facts",
      body: "1740 Year founded|8:1 Student-faculty ratio|$1.33B 2026 research budget",
      visible: true
    },
    {
      id: "research",
      layout: "feature",
      heading: "Research and innovation with public purpose.",
      body: "Penn's research enterprise spans medicine, technology, business, science, the humanities, and the social sciences, pairing discovery with practical impact for communities nearby and around the world.",
      buttonText: "Research at Penn",
      visible: true
    },
    {
      id: "campus-life",
      layout: "accordion",
      heading: "Campus life overview",
      body: "",
      accordionItems: [
        {
          id: "accordion-academics",
          title: "Academics",
          body: "Penn's schools and programs encourage interdisciplinary study, intellectual rigor, and opportunities to learn across fields."
        },
        {
          id: "accordion-research",
          title: "Research",
          body: "Students and faculty work in a research ecosystem designed to move ideas from labs, studios, clinics, and classrooms into practice."
        },
        {
          id: "accordion-community",
          title: "Campus and community",
          body: "Traditions, student organizations, cultural life, athletics, and service connect Penn's campus to the surrounding city."
        },
        {
          id: "accordion-global",
          title: "Global engagement",
          body: "Penn Global and school-based programs connect students, faculty, and alumni with communities and institutions around the world."
        }
      ],
      visible: true
    },
    {
      id: "gallery",
      layout: "gallery",
      heading: "Scenes from Penn",
      body: "A scrollable preview gallery for Penn buildings, student life, and research.",
      galleryImages: PENN_GALLERY_IMAGES.map((src, index) => ({
        id: `gallery-penn-${index + 1}`,
        src
      })),
      visible: true
    },
    {
      id: "philadelphia",
      layout: "image",
      heading: "Penn and Philadelphia",
      body: "A campus shaped by its city, with partnerships, public engagement, and discovery extending across Philadelphia and beyond.",
      image: PENN_GALLERY_CITY,
      visible: true
    },
    {
      id: "video",
      layout: "video",
      heading: "A quick comic intermission.",
      body: "Use this full-width video section for a little levity, a launch film, or any YouTube or Vimeo story you want to feature.",
      videoUrl: DEFAULT_VIDEO_URL,
      visible: true
    },
    {
      id: "quote",
      layout: "quote",
      heading: "Creating knowledge to benefit the world.",
      body: "A Penn-inspired close for the preview: ambitious, civic-minded, research-driven, and grounded in a historic campus community.",
      visible: true
    }
  ]
};

let state = loadState();
let undoStack = [];
let redoStack = [];
let saveTimer = null;
let pointerDrag = null;
let suppressNextSectionClick = false;

const elements = {
  siteTitle: document.querySelector("#siteTitle"),
  tagline: document.querySelector("#tagline"),
  audience: document.querySelector("#audience"),
  fontChoice: document.querySelector("#fontChoice"),
  secondaryFontChoice: document.querySelector("#secondaryFontChoice"),
  radiusControl: document.querySelector("#radiusControl"),
  paletteChoices: document.querySelector("#paletteChoices"),
  sectionList: document.querySelector("#sectionList"),
  sectionHeading: document.querySelector("#sectionHeading"),
  sectionBodyField: document.querySelector("#sectionBodyField"),
  sectionBody: document.querySelector("#sectionBody"),
  layoutChoice: document.querySelector("#layoutChoice"),
  buttonTextField: document.querySelector("#buttonTextField"),
  buttonText: document.querySelector("#buttonText"),
  videoUrlField: document.querySelector("#videoUrlField"),
  videoUrl: document.querySelector("#videoUrl"),
  imageUploadField: document.querySelector("#imageUploadField"),
  imageUpload: document.querySelector("#imageUpload"),
  imageStatus: document.querySelector("#imageStatus"),
  imagePreview: document.querySelector("#imagePreview"),
  heroImageUploadField: document.querySelector("#heroImageUploadField"),
  heroImageUpload: document.querySelector("#heroImageUpload"),
  heroImageStatus: document.querySelector("#heroImageStatus"),
  heroImagePreview: document.querySelector("#heroImagePreview"),
  heroImagePositionField: document.querySelector("#heroImagePositionField"),
  heroImagePositionInputs: document.querySelectorAll('input[name="heroImagePosition"]'),
  accordionEditor: document.querySelector("#accordionEditor"),
  accordionItemEditorList: document.querySelector("#accordionItemEditorList"),
  addAccordionItemBtn: document.querySelector("#addAccordionItemBtn"),
  galleryEditor: document.querySelector("#galleryEditor"),
  galleryUpload: document.querySelector("#galleryUpload"),
  galleryImageList: document.querySelector("#galleryImageList"),
  visibleToggle: document.querySelector("#visibleToggle"),
  inspectorTitle: document.querySelector("#inspectorTitle"),
  previewFrame: document.querySelector("#previewFrame"),
  sitePreview: document.querySelector("#sitePreview"),
  exportCode: document.querySelector("#exportCode"),
  statusText: document.querySelector("#statusText"),
  undoBtn: document.querySelector("#undoBtn"),
  redoBtn: document.querySelector("#redoBtn"),
  saveBtn: document.querySelector("#saveBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  addSectionBtn: document.querySelector("#addSectionBtn"),
  removeSectionBtn: document.querySelector("#removeSectionBtn")
};

function loadState() {
  const stored = localStorage.getItem("website-builder-state");
  if (!stored) return structuredClone(starterState);

  try {
    const storedState = JSON.parse(stored);
    if (storedState.previewId !== PREVIEW_ID) {
      return structuredClone(starterState);
    }
    const loadedState = { ...structuredClone(starterState), ...storedState };
    if (!Object.prototype.hasOwnProperty.call(storedState, "videoSectionSeeded")) {
      loadedState.videoSectionSeeded = false;
    }
    if (loadedState.sections && loadedState.sections[0] && loadedState.sections[0].id === "hero" && loadedState.sections[0].layout === "feature") {
      loadedState.sections[0].layout = "hero";
      if (loadedState.sections[0].featureImage && !loadedState.sections[0].heroImage) {
        loadedState.sections[0].heroImage = loadedState.sections[0].featureImage;
      }
    }
    replaceBrokenPreviewImages(loadedState);
    ensureVideoSection(loadedState);
    return loadedState;
  } catch {
    return structuredClone(starterState);
  }
}

function defaultVideoSection() {
  return {
    id: "video",
    layout: "video",
    heading: "A quick comic intermission.",
    body: "Use this full-width video section for a little levity, a launch film, or any YouTube or Vimeo story you want to feature.",
    videoUrl: DEFAULT_VIDEO_URL,
    visible: true
  };
}

function ensureVideoSection(targetState) {
  if (!targetState.sections) return;

  const existingVideoSection = targetState.sections.find((section) => section.layout === "video");
  if (existingVideoSection) {
    if (!existingVideoSection.videoUrl || OLD_DEFAULT_VIDEO_URLS.includes(existingVideoSection.videoUrl)) {
      existingVideoSection.heading = "A quick comic intermission.";
      existingVideoSection.body = "Use this full-width video section for a little levity, a launch film, or any YouTube or Vimeo story you want to feature.";
      existingVideoSection.videoUrl = DEFAULT_VIDEO_URL;
    }
    targetState.videoSectionSeeded = true;
    return;
  }

  if (targetState.videoSectionSeeded) return;

  const quoteIndex = targetState.sections.findIndex((section) => section.layout === "quote");
  const insertIndex = quoteIndex === -1 ? targetState.sections.length : quoteIndex;
  targetState.sections.splice(insertIndex, 0, defaultVideoSection());
  targetState.videoSectionSeeded = true;
}

function replaceBrokenPreviewImages(targetState) {
  if (!targetState.sections) return;

  const replacementImages = [PENN_GALLERY_CAMPUS, PENN_GALLERY_RESEARCH, PENN_GALLERY_CITY];
  targetState.sections.forEach((section) => {
    if (section.heroImage && section.heroImage.includes("images.unsplash.com")) {
      section.heroImage = PENN_HERO_IMAGE;
    }

    if (section.image && section.image.includes("images.unsplash.com")) {
      section.image = PENN_GALLERY_CITY;
    }

    if (section.galleryImages) {
      section.galleryImages = section.galleryImages.map((image, index) => {
        const imageObject = typeof image === "string" ? { id: `gallery-migrated-${index}`, src: image } : image;
        if (imageObject.src && imageObject.src.includes("images.unsplash.com")) {
          return {
            ...imageObject,
            src: replacementImages[index % replacementImages.length]
          };
        }

        return imageObject;
      });
    }
  });

  const gallerySection = targetState.sections.find((section) => section.id === "gallery" && section.layout === "gallery");
  if (!gallerySection) return;

  const existingImages = Array.isArray(gallerySection.galleryImages) ? gallerySection.galleryImages : [];
  const existingSources = existingImages.map((image) => (typeof image === "string" ? image : image.src)).filter(Boolean);
  const oldDefaultSources = [PENN_GALLERY_CAMPUS, PENN_GALLERY_RESEARCH, PENN_GALLERY_CITY];
  const isOldDefaultGallery = existingSources.length <= oldDefaultSources.length && existingSources.every((src) => oldDefaultSources.includes(src));
  if (!existingSources.length || isOldDefaultGallery) {
    gallerySection.body = "A scrollable preview gallery for Penn buildings, student life, and research.";
    gallerySection.galleryImages = PENN_GALLERY_IMAGES.map((src, index) => ({
      id: `gallery-penn-${index + 1}`,
      src
    }));
    return;
  }

  const missingDefaultImages = PENN_GALLERY_IMAGES.filter((src) => !existingSources.includes(src));
  if (!missingDefaultImages.length && existingSources.length >= PENN_GALLERY_IMAGES.length) return;

  gallerySection.body = "A scrollable preview gallery for Penn buildings, student life, and research.";
  gallerySection.galleryImages = [
    ...existingImages.map((image, index) => (typeof image === "string" ? { id: `gallery-existing-${index}`, src: image } : image)),
    ...missingDefaultImages.map((src, index) => ({
      id: `gallery-penn-added-${index + 1}`,
      src
    }))
  ];
}

function selectedSection() {
  return state.sections.find((section) => section.id === state.selectedId) || state.sections[0];
}

function activePalette() {
  return palettes.find((palette) => palette.id === state.palette) || palettes[0];
}

function activeFontStack() {
  return fontStacks[state.font] || fontStacks.Inter;
}

function activeSecondaryFontStack() {
  return fontStacks[state.secondaryFont] || fontStacks.Inter;
}

function cssUrl(value) {
  return `url("${String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')}")`;
}

function currentHeroImage() {
  const hero = state.sections.find((section) => section.layout === "hero" && section.visible) || state.sections[0] || starterState.sections[0];
  return hero.heroImage || DEFAULT_HERO_IMAGE;
}

function layoutHasButton(layout) {
  return layout === "hero" || layout === "feature" || layout === "split";
}

function buttonTextFor(section) {
  if (section.buttonText) return section.buttonText;
  return section.layout === "hero" ? "Book a call" : "Start a project";
}

function defaultAccordionItems() {
  return [
    {
      id: `accordion-${Date.now()}-1`,
      title: "What is included?",
      body: "A focused section with a clear title, concise answer, and room to add as many items as you need."
    },
    {
      id: `accordion-${Date.now()}-2`,
      title: "Can I customize the items?",
      body: "Yes. Add, edit, remove, expand, and collapse accordion items directly from the studio."
    }
  ];
}

function accordionItemsFor(section) {
  if (!section.accordionItems || !section.accordionItems.length) {
    section.accordionItems = defaultAccordionItems();
  }

  return section.accordionItems;
}

function galleryImagesFor(section) {
  if (!section.galleryImages) {
    section.galleryImages = [];
  }

  section.galleryImages = section.galleryImages.map((image, index) => {
    if (typeof image === "string") {
      return {
        id: `gallery-${Date.now()}-${index}`,
        src: image
      };
    }

    return image;
  });

  return section.galleryImages;
}

function readImageFiles(files, onLoad) {
  const imageFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
  if (!imageFiles.length) {
    onLoad([]);
    return;
  }

  const results = [];
  let remaining = imageFiles.length;

  imageFiles.forEach((file, index) => {
    readImageFile(file, (imageData) => {
      results[index] = {
        id: `gallery-${Date.now()}-${index}`,
        src: imageData
      };
      remaining -= 1;

      if (remaining === 0) {
        onLoad(results.filter(Boolean));
      }
    });
  });
}

function recordChange(mutator) {
  undoStack.push(structuredClone(state));
  redoStack = [];
  mutator();
  persist();
  render();
}

function persist() {
  try {
    localStorage.setItem("website-builder-state", JSON.stringify(state));
    showStatus("Saved");
  } catch {
    showStatus("Preview only");
  }
}

function showStatus(text) {
  elements.statusText.textContent = text;
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    elements.statusText.textContent = "Ready";
  }, 1200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function videoEmbedFor(rawUrl) {
  if (!rawUrl) return null;

  let url;
  try {
    url = new URL(rawUrl.trim());
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  const pathParts = url.pathname.split("/").filter(Boolean);

  if (host === "youtu.be") {
    const id = cleanVideoId(pathParts[0]);
    return id ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1` } : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    const watchId = cleanVideoId(url.searchParams.get("v"));
    const embedId = pathParts[0] === "embed" ? cleanVideoId(pathParts[1]) : null;
    const shortsId = pathParts[0] === "shorts" ? cleanVideoId(pathParts[1]) : null;
    const id = watchId || embedId || shortsId;
    return id ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1` } : null;
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const id = pathParts.find((part) => /^\d+$/.test(part));
    return id ? { provider: "vimeo", src: `https://player.vimeo.com/video/${id}?api=1&title=0&byline=0&portrait=0` } : null;
  }

  return null;
}

function cleanVideoId(value) {
  if (!value) return "";
  const [id] = String(value).split(/[?&#]/);
  return /^[A-Za-z0-9_-]+$/.test(id) ? id : "";
}

function readImageFile(file, onLoad) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const rawData = String(reader.result);

    if (file.type === "image/svg+xml" || file.type === "image/gif") {
      onLoad(rawData);
      return;
    }

    const image = new Image();
    image.addEventListener("load", () => {
      const maxSize = 1600;
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");

      if (!context) {
        onLoad(rawData);
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      onLoad(canvas.toDataURL("image/jpeg", 0.88));
    });

    image.addEventListener("error", () => {
      onLoad(rawData);
    });

    image.src = rawData;
  });

  reader.readAsDataURL(file);
}

function sectionLabel(section) {
  const words = section.heading.trim().split(/\s+/).slice(0, 4).join(" ");
  return words || "Untitled section";
}

function renderPaletteChoices() {
  elements.paletteChoices.innerHTML = "";
  palettes.forEach((palette) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `palette-button${palette.id === state.palette ? " active" : ""}`;
    button.title = palette.name;
    button.setAttribute("aria-label", palette.name);
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(palette.id === state.palette));
    button.addEventListener("click", () => {
      recordChange(() => {
        state.palette = palette.id;
      });
    });

    palette.colors.forEach((color) => {
      const swatch = document.createElement("span");
      swatch.className = "swatch";
      swatch.style.background = color;
      button.append(swatch);
    });

    elements.paletteChoices.append(button);
  });
}

function renderSectionList() {
  const template = document.querySelector("#sectionItemTemplate");
  elements.sectionList.innerHTML = "";

  state.sections.forEach((section) => {
    const item = template.content.firstElementChild.cloneNode(true);
    item.dataset.sectionId = section.id;
    item.classList.toggle("active", section.id === state.selectedId);
    item.querySelector(".section-item-title").textContent = sectionLabel(section);
    item.querySelector(".section-item-kind").textContent = `${section.layout}${section.visible ? "" : " hidden"}`;
    item.addEventListener("click", (event) => {
      if (suppressNextSectionClick) {
        event.preventDefault();
        suppressNextSectionClick = false;
        return;
      }
      state.selectedId = section.id;
      persist();
      render();
    });
    item.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      pointerDrag = {
        active: false,
        dropAfter: false,
        sourceId: section.id,
        startX: event.clientX,
        startY: event.clientY,
        targetId: null
      };
    });
    elements.sectionList.append(item);
  });
}

function clearDropTargets() {
  elements.sectionList.querySelectorAll(".dragging, .drop-target, .drop-before, .drop-after").forEach((target) => {
    target.classList.remove("dragging");
    target.classList.remove("drop-target");
    target.classList.remove("drop-before");
    target.classList.remove("drop-after");
  });
}

function updatePointerDropTarget(event) {
  if (!pointerDrag) return;

  clearDropTargets();
  const sourceItem = elements.sectionList.querySelector(`[data-section-id="${pointerDrag.sourceId}"]`);
  if (sourceItem) {
    sourceItem.classList.add("dragging");
  }

  const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
  const target = hoveredElement ? hoveredElement.closest(".section-item") : null;
  if (!target || !elements.sectionList.contains(target) || target.dataset.sectionId === pointerDrag.sourceId) {
    pointerDrag.targetId = null;
    return;
  }

  const bounds = target.getBoundingClientRect();
  pointerDrag.dropAfter = event.clientY > bounds.top + bounds.height / 2;
  pointerDrag.targetId = target.dataset.sectionId;
  target.classList.add("drop-target");
  target.classList.toggle("drop-before", !pointerDrag.dropAfter);
  target.classList.toggle("drop-after", pointerDrag.dropAfter);
}

function moveSection(sourceId, targetId, dropAfter) {
  if (!sourceId || !targetId || sourceId === targetId) return;

  const sourceIndex = state.sections.findIndex((section) => section.id === sourceId);
  const targetIndex = state.sections.findIndex((section) => section.id === targetId);
  if (sourceIndex === -1 || targetIndex === -1) return;

  recordChange(() => {
    const [movedSection] = state.sections.splice(sourceIndex, 1);
    const adjustedTargetIndex = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
    const insertIndex = adjustedTargetIndex + (dropAfter ? 1 : 0);
    state.sections.splice(insertIndex, 0, movedSection);
    state.selectedId = movedSection.id;
  });
}

function renderInspector() {
  const section = selectedSection();
  if (!section) return;

  elements.inspectorTitle.textContent = sectionLabel(section);
  elements.sectionHeading.value = section.heading;
  elements.sectionBody.value = section.body;
  elements.layoutChoice.value = section.layout;
  elements.sectionBodyField.hidden = section.layout === "accordion";
  elements.buttonTextField.hidden = !layoutHasButton(section.layout);
  elements.buttonText.value = buttonTextFor(section);
  elements.videoUrlField.hidden = section.layout !== "video";
  elements.videoUrl.value = section.videoUrl || "";
  elements.imageUploadField.hidden = section.layout !== "image";
  elements.imageStatus.textContent = section.image ? "Image selected" : "No image selected";
  elements.imagePreview.hidden = section.layout !== "image" || !section.image;
  elements.imagePreview.innerHTML = section.image
    ? `
      <div class="gallery-image-editor">
        <img src="${escapeHtml(section.image)}" alt="">
        <div>
          <p class="gallery-empty">Current image</p>
        </div>
      </div>
    `
    : "";
  elements.heroImageUploadField.hidden = section.layout !== "hero";
  elements.heroImageStatus.textContent = section.heroImage ? "Hero image selected" : "Using default image";
  elements.heroImagePreview.hidden = section.layout !== "hero" || !section.heroImage;
  elements.heroImagePreview.innerHTML = section.heroImage
    ? `
      <div class="gallery-image-editor">
        <img src="${escapeHtml(section.heroImage)}" alt="">
        <div>
          <p class="gallery-empty">Current hero image</p>
        </div>
      </div>
    `
    : "";
  elements.heroImagePositionField.hidden = section.layout !== "hero";
  elements.heroImagePositionInputs.forEach((input) => {
    input.checked = input.value === (section.heroImagePosition || "right");
  });
  elements.accordionEditor.hidden = section.layout !== "accordion";
  elements.galleryEditor.hidden = section.layout !== "gallery";
  elements.visibleToggle.checked = section.visible;
  elements.removeSectionBtn.disabled = state.sections.length <= 1;
  renderAccordionEditor(section);
  renderGalleryEditor(section);
}

function renderAccordionEditor(section) {
  elements.accordionItemEditorList.innerHTML = "";
  if (section.layout !== "accordion") return;

  accordionItemsFor(section).forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "accordion-item-editor";
    wrapper.innerHTML = `
      <label class="field">
        <span>Title</span>
        <input type="text" maxlength="80" data-accordion-title="${item.id}">
      </label>
      <label class="field">
        <span>Content</span>
        <textarea rows="3" maxlength="260" data-accordion-body="${item.id}"></textarea>
      </label>
      <button class="small-danger-button" type="button" data-remove-accordion-item="${item.id}">Remove item</button>
    `;

    wrapper.querySelector(`[data-accordion-title="${item.id}"]`).value = item.title;
    wrapper.querySelector(`[data-accordion-body="${item.id}"]`).value = item.body;

    wrapper.querySelector(`[data-accordion-title="${item.id}"]`).addEventListener("input", (event) => {
      updateAccordionItem(item.id, "title", event.target.value);
    });

    wrapper.querySelector(`[data-accordion-body="${item.id}"]`).addEventListener("input", (event) => {
      updateAccordionItem(item.id, "body", event.target.value);
    });

    wrapper.querySelector(`[data-remove-accordion-item="${item.id}"]`).addEventListener("click", () => {
      removeAccordionItem(item.id);
    });

    elements.accordionItemEditorList.append(wrapper);
  });
}

function updateAccordionItem(itemId, key, value) {
  updateSelectedSection((section) => {
    const item = accordionItemsFor(section).find((candidate) => candidate.id === itemId);
    if (item) item[key] = value;
  });
}

function removeAccordionItem(itemId) {
  updateSelectedSection((section) => {
    section.accordionItems = accordionItemsFor(section).filter((item) => item.id !== itemId);
  });
}

function renderGalleryEditor(section) {
  elements.galleryImageList.innerHTML = "";
  if (section.layout !== "gallery") return;

  const images = galleryImagesFor(section);
  if (!images.length) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = "No images yet.";
    elements.galleryImageList.append(empty);
    return;
  }

  images.forEach((image, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "gallery-image-editor";
    wrapper.innerHTML = `
      <img alt="">
      <div>
        <p class="gallery-empty">Image ${index + 1}</p>
        <button class="small-danger-button" type="button">Remove image</button>
      </div>
    `;
    wrapper.querySelector("img").src = image.src;
    wrapper.querySelector("button").addEventListener("click", () => {
      removeGalleryImage(image.id);
    });
    elements.galleryImageList.append(wrapper);
  });
}

function removeGalleryImage(imageId) {
  updateSelectedSection((section) => {
    section.galleryImages = galleryImagesFor(section).filter((image) => image.id !== imageId);
  });
}

function renderControls() {
  elements.siteTitle.value = state.siteTitle;
  elements.tagline.value = state.tagline;
  elements.audience.value = state.audience;
  elements.fontChoice.value = state.font;
  elements.secondaryFontChoice.value = state.secondaryFont || "Inter";
  elements.radiusControl.value = state.radius;
  elements.undoBtn.disabled = undoStack.length === 0;
  elements.redoBtn.disabled = redoStack.length === 0;
}

function renderPreview() {
  const palette = activePalette();
  elements.sitePreview.style.setProperty("--site-paper", palette.paper);
  elements.sitePreview.style.setProperty("--site-ink", palette.ink);
  elements.sitePreview.style.setProperty("--site-accent", palette.accent);
  elements.sitePreview.style.setProperty("--site-radius", `${state.radius}px`);
  elements.sitePreview.style.setProperty("--site-heading-font", activeFontStack());
  elements.sitePreview.style.setProperty("--site-body-font", activeSecondaryFontStack());
  elements.sitePreview.style.setProperty("--site-image", cssUrl(currentHeroImage()));
  elements.sitePreview.style.borderRadius = `${Math.min(Number(state.radius), 12)}px`;
  elements.sitePreview.innerHTML = buildSiteHtml(false);
  elements.exportCode.value = buildExportDocument();
}

function handleVideoAction(button) {
  const panel = button.closest(".video-panel");
  const frame = panel ? panel.querySelector("iframe") : null;
  if (!frame || !frame.contentWindow) return;

  const provider = frame.dataset.videoProvider;
  const action = button.dataset.videoAction;

  if (provider === "youtube") {
    const func = action === "stop" ? "stopVideo" : "pauseVideo";
    frame.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
  }

  if (provider === "vimeo") {
    frame.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
    if (action === "stop") {
      frame.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
    }
  }
}

function buildSectionHtml(section) {
  const heading = escapeHtml(section.heading);
  const body = escapeHtml(section.body);
  const buttonText = escapeHtml(buttonTextFor(section));

  if (section.layout === "hero") {
    const heroImage = escapeHtml(section.heroImage || DEFAULT_HERO_IMAGE);
    const heroAlt = heading || "Hero image";
    const imagePositionClass = (section.heroImagePosition || "right") === "left" ? " image-left" : "";

    return `
      <header class="site-hero${imagePositionClass}">
        <div class="site-hero-copy">
          <h2>${heading}</h2>
          <p>${body || escapeHtml(state.tagline)}</p>
          <a class="site-cta" href="#contact">${buttonText}</a>
        </div>
        <img class="site-hero-image" src="${heroImage}" alt="${heroAlt}">
      </header>
    `;
  }

  if (section.layout === "image") {
    const imageSrc = escapeHtml(section.image || PENN_GALLERY_CITY);
    const imageAlt = heading || "Uploaded section image";

    return `
      <section class="site-section image">
        <img class="section-image" src="${imageSrc}" alt="${imageAlt}">
        <div class="image-caption">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
      </section>
    `;
  }

  if (section.layout === "video") {
    const embed = videoEmbedFor(section.videoUrl || DEFAULT_VIDEO_URL);

    return `
      <section class="site-section video">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
        ${
          embed
            ? `<div class="video-panel">
                <div class="video-actions">
                  <button class="video-action" type="button" data-video-action="pause">Pause</button>
                  <button class="video-action" type="button" data-video-action="stop">Stop</button>
                </div>
                <div class="video-frame">
                  <iframe src="${escapeHtml(embed.src)}" title="${heading || "Embedded video"}" data-video-provider="${embed.provider}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>`
            : `<div class="video-placeholder">Add a YouTube or Vimeo URL in the studio</div>`
        }
      </section>
    `;
  }

  if (section.layout === "stats") {
    const metrics = section.body.split("|").map((metric) => metric.trim()).filter(Boolean).slice(0, 3);
    const fallback = metrics.length ? metrics : ["24 projects shipped", "8 core page types", "100% responsive"];
    return `
      <section class="site-section stats">
        ${fallback
          .map((metric) => {
            const [number, ...label] = escapeHtml(metric).split(" ");
            return `<div class="metric"><strong>${number}</strong><span>${label.join(" ") || "wins delivered"}</span></div>`;
          })
          .join("")}
      </section>
    `;
  }

  if (section.layout === "accordion") {
    const items = accordionItemsFor(section);

    return `
      <section class="site-section accordion">
        <div class="accordion-panel">
          <div class="accordion-actions">
            <button class="accordion-action" type="button" data-accordion-action="expand">Expand all</button>
            <button class="accordion-action" type="button" data-accordion-action="collapse">Collapse all</button>
          </div>
          ${items
            .map((item, index) => {
              const title = escapeHtml(item.title || `Item ${index + 1}`);
              const itemBody = escapeHtml(item.body || "");
              return `
                <details class="accordion-item">
                  <summary>${title}</summary>
                  <p>${itemBody}</p>
                </details>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.layout === "gallery") {
    const images = galleryImagesFor(section);

    return `
      <section class="site-section gallery">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
        <div class="gallery-panel">
          <div class="gallery-actions">
            <button class="gallery-action" type="button" data-gallery-action="previous">Previous</button>
            <button class="gallery-action" type="button" data-gallery-action="next">Next</button>
          </div>
          ${
            images.length
              ? `<div class="gallery-track" tabindex="0">
                  ${images
                    .map((image, index) => {
                      const imageSrc = escapeHtml(image.src);
                      return `
                        <figure class="gallery-card">
                          <img src="${imageSrc}" alt="Gallery image ${index + 1}">
                        </figure>
                      `;
                    })
                    .join("")}
                </div>`
              : `<div class="gallery-placeholder">Add images in the studio</div>`
          }
        </div>
      </section>
    `;
  }

  if (section.layout === "text") {
    return `
      <section class="site-section text">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
      </section>
    `;
  }

  if (section.layout === "quote") {
    return `
      <section class="site-section quote">
        <div class="site-copy">
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="site-section ${section.layout}">
      <h3>${heading}</h3>
      <div class="site-copy">
        <p>${body}</p>
        <a class="site-cta" href="#contact">${buttonText}</a>
      </div>
    </section>
  `;
}

function buildSiteHtml(includeHidden) {
  const visibleSections = state.sections.filter((section) => includeHidden || section.visible);

  return `
    <nav class="site-nav" id="top">
      <div class="site-logo">${escapeHtml(state.siteTitle)}</div>
      <div class="site-pill">${escapeHtml(state.audience)}</div>
    </nav>
    ${visibleSections.map(buildSectionHtml).join("")}
    ${buildFooterHtml()}
  `;
}

function buildFooterHtml() {
  return `
    <footer class="site-footer" id="contact">
      <section class="footer-equal-opportunity" aria-labelledby="footer-equal-opportunity-title">
        <h3 id="footer-equal-opportunity-title">Equal Opportunity and Nondiscrimination at Penn</h3>
        <p>The University of Pennsylvania seeks talented students, faculty, and staff with a wide variety of backgrounds, experiences, and perspectives.</p>
        <a href="https://oeop.upenn.edu/" target="_blank" rel="noreferrer">Nondiscrimination Statement</a>
      </section>
      <div class="footer-main">
        <div class="footer-brand">
          <strong>University of Pennsylvania</strong>
          <p>Philadelphia, PA 19104</p>
          <p>Telephone: (215) 898-5000</p>
          <div class="footer-inline-links" aria-label="Contact links">
            <a href="https://www.upenn.edu/contact-us" target="_blank" rel="noreferrer">Contact Us</a>
            <a href="https://www.facilities.upenn.edu/maps" target="_blank" rel="noreferrer">Maps</a>
            <a href="https://cms.business-services.upenn.edu/transportation/" target="_blank" rel="noreferrer">Parking</a>
          </div>
        </div>
        <nav class="footer-column" aria-label="Navigate">
          <h3>Navigate</h3>
          <a href="https://www.upenn.edu/admissions-and-aid" target="_blank" rel="noreferrer">Admissions &amp; Aid</a>
          <a href="https://www.alumni.upenn.edu/" target="_blank" rel="noreferrer">Alumni</a>
          <a href="https://www.pennmedicine.org/" target="_blank" rel="noreferrer">Health Care</a>
          <a href="https://www.library.upenn.edu/" target="_blank" rel="noreferrer">Libraries</a>
          <a href="https://www.publicsafety.upenn.edu/" target="_blank" rel="noreferrer">Public Safety</a>
        </nav>
        <div class="footer-column footer-heritage">
          <h3>Penn's Heritage</h3>
          <p>As America's first university, Penn has a history that dates back to 1740 and shares many ties with the colonial city of Philadelphia and the birth of our nation.</p>
          <a href="https://www.upenn.edu/about/history" target="_blank" rel="noreferrer">Our History</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal" aria-label="Legal links">
          <a href="https://www.upenn.edu/about/disclaimer" target="_blank" rel="noreferrer">Disclaimer</a>
          <a href="https://oeop.upenn.edu/" target="_blank" rel="noreferrer">Nondiscrimination</a>
          <a href="https://www.upenn.edu/about/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href="https://accessibility.web-resources.upenn.edu/get-help" target="_blank" rel="noreferrer">Report Accessibility Issues and Get Help</a>
          <a href="https://www.upenn.edu/about/report-copyright-infringement" target="_blank" rel="noreferrer">Report Copyright Infringement</a>
        </div>
        <a class="back-to-top" href="#top">Back To Top</a>
      </div>
    </footer>
  `;
}

function buildExportDocument() {
  const palette = activePalette();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(state.siteTitle)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700;800&family=Inter:wght@400;700;800;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; color: ${palette.ink}; background: ${palette.paper}; font-family: ${activeSecondaryFontStack()}; }
    h2, h3, summary, strong, .site-logo, .site-cta { overflow-wrap: anywhere; word-break: normal; hyphens: auto; }
    .site-nav, .site-section, .site-footer { padding-left: clamp(20px, 5vw, 70px); padding-right: clamp(20px, 5vw, 70px); }
    .site-nav { min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 18px; background: ${palette.paper}; border-bottom: 1px solid rgba(0,0,0,.12); }
    .site-logo { font-family: ${activeFontStack()}; font-weight: 900; font-size: 19px; }
    .site-pill { border: 1px solid ${palette.accent}; color: ${palette.accent}; border-radius: 999px; padding: 8px 12px; font-size: 12px; font-weight: 850; }
    .site-hero { min-height: 470px; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(220px, .95fr); background: ${palette.paper}; }
    .site-hero.image-left .site-hero-image { order: -1; }
    .site-hero-copy { padding: clamp(34px, 7vw, 82px) clamp(20px, 5vw, 70px); display: grid; align-content: center; gap: 18px; }
    .site-hero h2 { margin: 0; max-width: 10ch; font-family: ${activeFontStack()}; font-size: 68px; line-height: .98; letter-spacing: 0; text-wrap: balance; }
    .site-hero p, .site-section p, .site-footer p { margin: 0; line-height: 1.65; }
    .site-hero p { max-width: 54ch; color: color-mix(in srgb, ${palette.ink} 72%, transparent); font-size: 18px; }
    .site-hero-image { display: block; width: 100%; height: 100%; min-height: 360px; object-fit: cover; object-position: center; }
    .site-cta { width: fit-content; max-width: 100%; border-radius: ${state.radius}px; background: ${palette.accent}; color: #fff; padding: 13px 18px; font-family: ${activeFontStack()}; font-weight: 900; text-decoration: none; }
    .site-section { padding-top: clamp(34px, 6vw, 72px); padding-bottom: clamp(34px, 6vw, 72px); border-top: 1px solid rgba(0,0,0,.12); }
    .site-section.feature { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(22px, 5vw, 70px); align-items: start; }
    .site-section.text { display: block; }
    .site-section.text .site-copy { max-width: none; }
    .site-section.text p { width: 100%; max-width: none; font-size: 18px; }
    .site-section.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; background: color-mix(in srgb, ${palette.paper} 82%, #ffffff); }
    .site-section.quote { background: ${palette.ink}; color: ${palette.paper}; }
    .site-section.stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .site-section.accordion { display: grid; grid-template-columns: 1fr; gap: clamp(22px, 5vw, 70px); align-items: start; background: color-mix(in srgb, ${palette.paper} 88%, #ffffff); }
    .site-section.gallery { display: grid; gap: 22px; background: color-mix(in srgb, ${palette.paper} 88%, #ffffff); }
    .site-section.video { display: grid; gap: 22px; background: color-mix(in srgb, ${palette.paper} 94%, #ffffff); }
    .video-panel { display: grid; gap: 10px; width: 100%; }
    .video-actions { display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap; }
    .video-action { min-height: 34px; border: 1px solid rgba(0,0,0,.16); border-radius: ${state.radius}px; background: transparent; color: ${palette.ink}; padding: 0 11px; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 850; }
    .video-frame { width: 100%; aspect-ratio: 16 / 9; min-height: 260px; overflow: hidden; border-radius: ${state.radius}px; background: #000000; }
    .video-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
    .video-placeholder { min-height: 260px; display: grid; place-items: center; border: 1px dashed rgba(0,0,0,.22); border-radius: ${state.radius}px; color: color-mix(in srgb, ${palette.ink} 62%, transparent); font-weight: 850; }
    .accordion-panel { display: grid; gap: 10px; }
    .accordion-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
    .accordion-action { min-height: 34px; border: 1px solid rgba(0,0,0,.16); border-radius: ${state.radius}px; background: transparent; color: ${palette.ink}; padding: 0 11px; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 850; }
    .accordion-item { border: 1px solid rgba(0,0,0,.14); border-radius: ${state.radius}px; background: color-mix(in srgb, ${palette.paper} 72%, #ffffff); overflow: hidden; }
    .accordion-item summary { cursor: pointer; padding: 16px 18px; font-family: ${activeFontStack()}; font-weight: 900; list-style: none; }
    .accordion-item summary::-webkit-details-marker { display: none; }
    .accordion-item summary::after { content: "+"; float: right; color: ${palette.accent}; }
    .accordion-item[open] summary::after { content: "-"; }
    .accordion-item p { padding: 0 18px 18px; }
    .gallery-panel { display: grid; gap: 10px; }
    .gallery-actions { display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap; }
    .gallery-action { min-height: 34px; border: 1px solid rgba(0,0,0,.16); border-radius: ${state.radius}px; background: transparent; color: ${palette.ink}; padding: 0 11px; font-family: ${activeFontStack()}; font-size: 12px; font-weight: 850; }
    .gallery-track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(230px, 34%); gap: 14px; overflow-x: auto; overscroll-behavior-x: contain; padding-bottom: 8px; scroll-snap-type: x mandatory; scrollbar-width: thin; }
    .gallery-card { min-height: 280px; border-radius: ${state.radius}px; overflow: hidden; scroll-snap-align: start; background: rgba(0,0,0,.08); }
    .gallery-card img { width: 100%; height: 100%; min-height: 280px; display: block; object-fit: cover; }
    .gallery-placeholder { min-height: 220px; display: grid; place-items: center; border: 1px dashed rgba(0,0,0,.22); border-radius: ${state.radius}px; color: color-mix(in srgb, ${palette.ink} 62%, transparent); font-weight: 850; }
    .site-section.image { position: relative; min-height: 430px; padding: 0; overflow: hidden; display: grid; align-items: end; isolation: isolate; }
    .site-section.image::after { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.58)); }
    .section-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
    .image-caption { position: relative; z-index: 2; max-width: 650px; padding: clamp(26px, 5vw, 62px); color: #ffffff; }
    .image-caption p { color: rgba(255,255,255,.86); }
    .site-section h3 { margin: 0; font-family: ${activeFontStack()}; font-size: 38px; line-height: 1.08; letter-spacing: 0; overflow-wrap: anywhere; text-wrap: balance; }
    .site-copy { display: grid; gap: 14px; }
    .metric { min-height: 124px; display: grid; align-content: center; gap: 7px; border: 1px solid rgba(0,0,0,.14); border-radius: ${state.radius}px; padding: 18px; }
    .metric strong { font-family: ${activeFontStack()}; font-size: 34px; line-height: 1; }
    .metric span { color: color-mix(in srgb, ${palette.ink} 70%, transparent); font-weight: 750; }
    .site-footer { display: grid; gap: clamp(26px, 4vw, 44px); padding-top: clamp(30px, 5vw, 58px); padding-bottom: 24px; background: #011f5b; color: #ffffff; font-family: "Roboto", Arial, sans-serif; }
    .footer-equal-opportunity { display: grid; gap: 10px; max-width: 980px; }
    .footer-equal-opportunity h3, .footer-column h3 { margin: 0; font-family: inherit; font-size: 15px; line-height: 1.25; letter-spacing: 0; text-transform: none; }
    .footer-equal-opportunity p, .footer-brand p, .footer-column p { max-width: 68ch; color: rgba(255,255,255,.78); font-size: 13px; line-height: 1.6; }
    .footer-main { display: grid; grid-template-columns: minmax(220px, 1.15fr) minmax(150px, .65fr) minmax(240px, 1fr); gap: clamp(24px, 5vw, 68px); align-items: start; padding-top: clamp(24px, 4vw, 38px); border-top: 1px solid rgba(255,255,255,.22); }
    .footer-brand, .footer-column { display: grid; gap: 9px; }
    .footer-brand strong { font-family: inherit; font-size: clamp(24px, 3.4vw, 40px); line-height: 1; max-width: 10ch; }
    .footer-inline-links, .footer-legal { display: flex; flex-wrap: wrap; gap: 8px 18px; }
    .site-footer a { color: #ffffff; font-size: 13px; font-weight: 800; text-decoration: none; text-underline-offset: 4px; }
    .site-footer a:hover { text-decoration: underline; }
    .footer-bottom { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.18); }
    .footer-legal { max-width: 860px; }
    .back-to-top { white-space: nowrap; }
    @media (max-width: 760px) { .site-hero, .site-section.feature, .site-section.split, .site-section.stats, .site-section.accordion, .footer-main { grid-template-columns: 1fr; } .site-nav { align-items: flex-start; flex-direction: column; justify-content: center; } .footer-bottom { display: grid; } .site-hero h2 { font-size: 42px; } .site-section h3 { font-size: 28px; } }
  </style>
</head>
<body>
${buildSiteHtml(false)}
<script>
  function handleVideoAction(button) {
    const panel = button.closest(".video-panel");
    const frame = panel ? panel.querySelector("iframe") : null;
    if (!frame || !frame.contentWindow) return;
    const provider = frame.dataset.videoProvider;
    const action = button.dataset.videoAction;
    if (provider === "youtube") {
      const func = action === "stop" ? "stopVideo" : "pauseVideo";
      frame.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
    }
    if (provider === "vimeo") {
      frame.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
      if (action === "stop") {
        frame.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
      }
    }
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-accordion-action]");
    if (button) {
      const panel = button.closest(".accordion-panel");
      if (!panel) return;
      panel.querySelectorAll(".accordion-item").forEach((item) => {
        item.open = button.dataset.accordionAction === "expand";
      });
      return;
    }

    const videoButton = event.target.closest("[data-video-action]");
    if (videoButton) {
      handleVideoAction(videoButton);
      return;
    }

    const galleryButton = event.target.closest("[data-gallery-action]");
    if (!galleryButton) return;
    const galleryPanel = galleryButton.closest(".gallery-panel");
    if (!galleryPanel) return;
    const track = galleryPanel.querySelector(".gallery-track");
    if (!track) return;
    const direction = galleryButton.dataset.galleryAction === "next" ? 1 : -1;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  });
</script>
</body>
</html>`;
}

function render() {
  renderControls();
  renderPaletteChoices();
  renderSectionList();
  renderInspector();
  renderPreview();
}

function updateSelectedSection(updater) {
  recordChange(() => {
    const section = selectedSection();
    if (section) updater(section);
  });
}

function bindInputs() {
  window.addEventListener("pointermove", (event) => {
    if (!pointerDrag) return;

    const movedX = Math.abs(event.clientX - pointerDrag.startX);
    const movedY = Math.abs(event.clientY - pointerDrag.startY);
    if (!pointerDrag.active && Math.max(movedX, movedY) < 8) return;

    pointerDrag.active = true;
    event.preventDefault();
    updatePointerDropTarget(event);
  });

  window.addEventListener("pointerup", () => {
    if (!pointerDrag) return;

    const drag = pointerDrag;
    pointerDrag = null;
    clearDropTargets();

    if (drag.active) {
      suppressNextSectionClick = true;
      moveSection(drag.sourceId, drag.targetId, drag.dropAfter);
      window.setTimeout(() => {
        suppressNextSectionClick = false;
      }, 0);
    }
  });

  elements.siteTitle.addEventListener("input", (event) => {
    recordChange(() => {
      state.siteTitle = event.target.value;
    });
  });

  elements.tagline.addEventListener("input", (event) => {
    recordChange(() => {
      state.tagline = event.target.value;
    });
  });

  elements.audience.addEventListener("input", (event) => {
    recordChange(() => {
      state.audience = event.target.value;
    });
  });

  elements.fontChoice.addEventListener("change", (event) => {
    recordChange(() => {
      state.font = event.target.value;
    });
  });

  elements.secondaryFontChoice.addEventListener("change", (event) => {
    recordChange(() => {
      state.secondaryFont = event.target.value;
    });
  });

  elements.radiusControl.addEventListener("input", (event) => {
    recordChange(() => {
      state.radius = Number(event.target.value);
    });
  });

  elements.sectionHeading.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.heading = event.target.value;
    });
  });

  elements.sectionBody.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.body = event.target.value;
    });
  });

  elements.layoutChoice.addEventListener("change", (event) => {
    updateSelectedSection((section) => {
      section.layout = event.target.value;
      if (section.layout === "accordion") {
        accordionItemsFor(section);
      } else if (section.layout === "gallery") {
        galleryImagesFor(section);
      } else if (section.layout === "video" && !section.videoUrl) {
        section.videoUrl = DEFAULT_VIDEO_URL;
      }
    });
  });

  elements.videoUrl.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.videoUrl = event.target.value;
    });
  });

  elements.addAccordionItemBtn.addEventListener("click", () => {
    updateSelectedSection((section) => {
      accordionItemsFor(section).push({
        id: `accordion-${Date.now()}`,
        title: "New accordion item",
        body: "Add supporting detail for this item."
      });
    });
  });

  elements.sitePreview.addEventListener("click", (event) => {
    const button = event.target.closest("[data-accordion-action]");
    if (button) {
      const panel = button.closest(".accordion-panel");
      if (!panel) return;

      panel.querySelectorAll(".accordion-item").forEach((item) => {
        item.open = button.dataset.accordionAction === "expand";
      });
      return;
    }

    const videoButton = event.target.closest("[data-video-action]");
    if (videoButton) {
      const panel = videoButton.closest(".video-panel");
      const frame = panel ? panel.querySelector("iframe") : null;
      if (!frame || !frame.contentWindow) return;
      const provider = frame.dataset.videoProvider;
      const action = videoButton.dataset.videoAction;
      if (provider === "youtube") {
        const func = action === "stop" ? "stopVideo" : "pauseVideo";
        frame.contentWindow.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
      }
      if (provider === "vimeo") {
        frame.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
        if (action === "stop") {
          frame.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
        }
      }
      return;
    }

    const galleryButton = event.target.closest("[data-gallery-action]");
    if (!galleryButton) return;
    const galleryPanel = galleryButton.closest(".gallery-panel");
    if (!galleryPanel) return;
    const track = galleryPanel.querySelector(".gallery-track");
    if (!track) return;
    const direction = galleryButton.dataset.galleryAction === "next" ? 1 : -1;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  });

  elements.buttonText.addEventListener("input", (event) => {
    updateSelectedSection((section) => {
      section.buttonText = event.target.value;
    });
  });

  elements.heroImagePositionInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      updateSelectedSection((section) => {
        section.heroImagePosition = event.target.value;
      });
    });
  });

  elements.galleryUpload.addEventListener("change", (event) => {
    const files = event.target.files;
    if (!files.length) return;
    const selectedId = state.selectedId;
    const previousState = structuredClone(state);

    readImageFiles(files, (images) => {
      if (!images.length) {
        showStatus("Choose images");
        event.target.value = "";
        return;
      }

      undoStack.push(previousState);
      redoStack = [];
      const section = state.sections.find((item) => item.id === selectedId);
      if (section) {
        section.layout = "gallery";
        section.galleryImages = galleryImagesFor(section).concat(images);
        state.selectedId = selectedId;
      }
      event.target.value = "";
      persist();
      render();
    });
  });

  elements.imageUpload.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const selectedId = state.selectedId;

    if (!file.type.startsWith("image/")) {
      showStatus("Choose an image");
      event.target.value = "";
      return;
    }

    const previousState = structuredClone(state);
    readImageFile(file, (imageData) => {
      undoStack.push(previousState);
      redoStack = [];
      const section = state.sections.find((item) => item.id === selectedId);
      if (section) {
        section.image = imageData;
        section.layout = "image";
        state.selectedId = selectedId;
      }
      event.target.value = "";
      persist();
      render();
    });
  });

  elements.heroImageUpload.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const selectedId = state.selectedId;

    if (!file.type.startsWith("image/")) {
      showStatus("Choose an image");
      event.target.value = "";
      return;
    }

    const previousState = structuredClone(state);
    readImageFile(file, (imageData) => {
      undoStack.push(previousState);
      redoStack = [];
      const section = state.sections.find((item) => item.id === selectedId);
      if (section) {
        section.heroImage = imageData;
        section.layout = "hero";
        state.selectedId = selectedId;
      }
      event.target.value = "";
      persist();
      render();
    });
  });

  elements.visibleToggle.addEventListener("change", (event) => {
    updateSelectedSection((section) => {
      section.visible = event.target.checked;
    });
  });

  elements.addSectionBtn.addEventListener("click", () => {
    recordChange(() => {
      const id = `section-${Date.now()}`;
      state.sections.push({
        id,
        layout: "feature",
        heading: "A focused new section.",
        body: "Add a concise point, proof, or offer that makes the page stronger.",
        visible: true
      });
      state.selectedId = id;
    });
  });

  elements.removeSectionBtn.addEventListener("click", () => {
    if (state.sections.length <= 1) {
      showStatus("Keep one section");
      return;
    }

    recordChange(() => {
      const selectedId = state.selectedId;
      const removedIndex = state.sections.findIndex((section) => section.id === selectedId);
      if (removedIndex === -1) return;

      state.sections.splice(removedIndex, 1);
      const nextIndex = Math.min(removedIndex, state.sections.length - 1);
      state.selectedId = state.sections[nextIndex].id;
    });
  });

  elements.undoBtn.addEventListener("click", () => {
    if (!undoStack.length) return;
    redoStack.push(structuredClone(state));
    state = undoStack.pop();
    persist();
    render();
  });

  elements.redoBtn.addEventListener("click", () => {
    if (!redoStack.length) return;
    undoStack.push(structuredClone(state));
    state = redoStack.pop();
    persist();
    render();
  });

  elements.saveBtn.addEventListener("click", () => {
    persist();
  });

  elements.exportBtn.addEventListener("click", async () => {
    const html = buildExportDocument();
    elements.exportCode.value = html;
    try {
      await navigator.clipboard.writeText(html);
      showStatus("Copied");
    } catch {
      elements.exportCode.select();
      showStatus("Selected");
    }
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach((segment) => segment.classList.remove("active"));
      button.classList.add("active");
      elements.previewFrame.className = `preview-frame ${button.dataset.view}`;
    });
  });
}

bindInputs();
render();
