const STORAGE_KEY = "nsht_handouts_v16";
const PATIENT_KEY = "nsht_patient_v1";

function loadStore() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fall through */ }
  }
  const initial = { templates: STARTER_TEMPLATES.map(t => ({ ...t })), order: STARTER_TEMPLATES.map(t => t.id) };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

let store = loadStore();
let activeId = store.order[0];

function getTemplate(id) {
  return store.templates.find(t => t.id === id);
}

function getOriginal(id) {
  return STARTER_TEMPLATES.find(t => t.id === id);
}

function renderSidebarList() {
  const list = document.getElementById("templateList");
  list.innerHTML = "";
  const rendered = new Set();

  function appendTemplateButton(id) {
    const t = getTemplate(id);
    if (!t) return;
    const btn = document.createElement("button");
    btn.className = "template-item" + (id === activeId ? " active" : "");
    btn.textContent = t.title || "Untitled handout";
    btn.addEventListener("click", () => {
      activeId = id;
      renderSidebarList();
      renderPage();
    });
    list.appendChild(btn);
  }

  function appendGroup(label, ids) {
    const matching = ids.filter(id => store.order.includes(id) && getTemplate(id));
    if (!matching.length) return;
    list.appendChild(el("div", "category-label", label));
    matching.forEach(id => {
      rendered.add(id);
      appendTemplateButton(id);
    });
  }

  (typeof HANDOUT_CATEGORIES !== "undefined" ? HANDOUT_CATEGORIES : []).forEach(cat => appendGroup(cat.name, cat.ids));

  const leftover = store.order.filter(id => !rendered.has(id));
  appendGroup("Other Handouts", leftover);
}

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  return e;
}

function renderPage() {
  const t = getTemplate(activeId);
  if (!t) return;

  document.getElementById("eyebrow").textContent = t.eyebrow || "";
  document.getElementById("title").textContent = t.title || "";
  document.getElementById("intro").textContent = t.intro || "";
  document.getElementById("footerNote").textContent = t.footerNote || "";

  const sourcesWrap = document.getElementById("sourcesWrap");
  const sourcesList = document.getElementById("sourcesList");
  sourcesList.innerHTML = "";
  if (t.sources && t.sources.length) {
    sourcesWrap.style.display = "";
    t.sources.forEach(src => {
      const item = el("div", "source-item");
      item.textContent = `${src.title} (${src.authors}, ${src.year}). ${src.journal}.`;
      sourcesList.appendChild(item);
    });
  } else {
    sourcesWrap.style.display = "none";
  }

  const imgEl = document.getElementById("handoutImage");
  const removeImageBtn = document.getElementById("removeImageBtn");
  const addImageLabel = document.getElementById("addImageLabel");
  if (t.image) {
    imgEl.src = t.image;
    imgEl.style.display = "block";
    removeImageBtn.style.display = "";
    addImageLabel.style.display = "none";
  } else {
    imgEl.style.display = "none";
    imgEl.src = "";
    removeImageBtn.style.display = "none";
    addImageLabel.style.display = "";
  }

  const sectionsWrap = document.getElementById("sections");
  sectionsWrap.innerHTML = "";
  (t.sections || []).forEach((s, idx) => {
    const block = el("div", "section-block");
    const heading = el("div", "section-heading", s.heading || "");
    heading.contentEditable = "true";
    heading.addEventListener("input", () => {
      t.sections[idx].heading = heading.textContent;
      saveStore();
    });
    const list = el("ul", "section-list");
    list.contentEditable = "true";
    (s.bullets || []).forEach(bulletText => {
      const li = document.createElement("li");
      li.textContent = bulletText;
      list.appendChild(li);
    });
    list.addEventListener("input", () => {
      const bullets = [...list.querySelectorAll("li")]
        .map(li => li.textContent.trim())
        .filter(text => text.length > 0);
      t.sections[idx].bullets = bullets;
      saveStore();
    });
    block.appendChild(heading);
    block.appendChild(list);
    sectionsWrap.appendChild(block);
  });

  const exWrap = document.getElementById("exercisesWrap");
  const exList = document.getElementById("exerciseList");
  exList.innerHTML = "";
  if (t.exercises && t.exercises.length) {
    exWrap.style.display = "";
    t.exercises.forEach((ex, idx) => {
      const item = el("div", "exercise-item");
      if (ex.icon && typeof EXERCISE_ICONS !== "undefined" && EXERCISE_ICONS[ex.icon]) {
        const iconWrap = el("div", "exercise-icon");
        iconWrap.innerHTML = EXERCISE_ICONS[ex.icon];
        item.appendChild(iconWrap);
      }
      const name = el("div", "exercise-name", ex.name || "");
      name.contentEditable = "true";
      name.addEventListener("input", () => {
        t.exercises[idx].name = name.textContent;
        saveStore();
      });
      const instr = el("div", "exercise-instruction", ex.instruction || "");
      instr.contentEditable = "true";
      instr.addEventListener("input", () => {
        t.exercises[idx].instruction = instr.textContent;
        saveStore();
      });
      item.appendChild(name);
      item.appendChild(instr);
      exList.appendChild(item);
    });
  } else {
    exWrap.style.display = "none";
  }

  bindTopLevelField("eyebrow", "eyebrow");
  bindTopLevelField("title", "title");
  bindTopLevelField("intro", "intro");
  bindTopLevelField("footerNote", "footerNote");

  renderPatientMeta();
}

function bindTopLevelField(elementId, prop) {
  const node = document.getElementById(elementId);
  const fresh = node.cloneNode(true);
  node.parentNode.replaceChild(fresh, node);
  fresh.addEventListener("input", () => {
    const t = getTemplate(activeId);
    t[prop] = fresh.textContent;
    saveStore();
    if (prop === "title") renderSidebarList();
  });
}

function renderPatientMeta() {
  const name = document.getElementById("patientName").value.trim();
  const date = document.getElementById("patientDate").value;
  const therapist = document.getElementById("therapistName").value.trim();

  const metaPatient = document.getElementById("metaPatient");
  const metaDate = document.getElementById("metaDate");

  metaPatient.textContent = name ? `Prepared for ${name}` : "";
  let dateLine = "";
  if (date) {
    const d = new Date(date + "T00:00:00");
    dateLine = d.toLocaleDateString("en-NZ", { day: "numeric", month: "long", year: "numeric" });
  }
  if (therapist) dateLine = dateLine ? `${dateLine} · ${therapist}` : therapist;
  metaDate.textContent = dateLine;
}

function loadPatientFields() {
  const raw = localStorage.getItem(PATIENT_KEY);
  if (!raw) {
    document.getElementById("patientDate").value = new Date().toISOString().slice(0, 10);
    return;
  }
  try {
    const p = JSON.parse(raw);
    document.getElementById("patientName").value = p.name || "";
    document.getElementById("patientDate").value = p.date || new Date().toISOString().slice(0, 10);
    document.getElementById("therapistName").value = p.therapist || "";
  } catch (e) {
    document.getElementById("patientDate").value = new Date().toISOString().slice(0, 10);
  }
}

function savePatientFields() {
  localStorage.setItem(PATIENT_KEY, JSON.stringify({
    name: document.getElementById("patientName").value,
    date: document.getElementById("patientDate").value,
    therapist: document.getElementById("therapistName").value
  }));
}

["patientName", "patientDate", "therapistName"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    savePatientFields();
    renderPatientMeta();
  });
});

document.getElementById("imageInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  e.target.value = "";
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const maxWidth = 900;
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const t = getTemplate(activeId);
      t.image = canvas.toDataURL("image/jpeg", 0.85);
      saveStore();
      renderPage();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById("removeImageBtn").addEventListener("click", () => {
  const t = getTemplate(activeId);
  delete t.image;
  saveStore();
  renderPage();
});

document.getElementById("newTemplateBtn").addEventListener("click", () => {
  const id = "custom-" + Date.now();
  const blank = {
    id,
    eyebrow: "PATIENT INFORMATION",
    title: "New Handout",
    intro: "Write a short, warm introduction here.",
    sections: [
      { heading: "Heading", bullets: ["First point", "Second point"] }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  };
  store.templates.push(blank);
  store.order.push(id);
  activeId = id;
  saveStore();
  renderSidebarList();
  renderPage();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  const original = getOriginal(activeId);
  if (!original) {
    alert("This is a custom handout with no original to reset to. Use Delete instead if you want to remove it.");
    return;
  }
  if (!confirm(`Reset "${original.title}" back to its original text? Your edits to this handout will be lost.`)) return;
  const idx = store.templates.findIndex(t => t.id === activeId);
  store.templates[idx] = { ...original };
  saveStore();
  renderSidebarList();
  renderPage();
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  if (store.order.length <= 1) {
    alert("You need at least one handout in the list.");
    return;
  }
  const t = getTemplate(activeId);
  if (!confirm(`Delete "${t.title}"? This can't be undone.`)) return;
  store.order = store.order.filter(id => id !== activeId);
  store.templates = store.templates.filter(t => t.id !== activeId);
  activeId = store.order[0];
  saveStore();
  renderSidebarList();
  renderPage();
});

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

loadPatientFields();
renderSidebarList();
renderPage();
