// const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyNH0SiwaGY7PsXpklhj4Eu1IGMh5oVbQrJAq76MNiGprE97RZOkb6WII0pHcT9VGL6/exec";
// const VISITOR_KEY = "portfolio_visitor_id";
// const SESSION_KEY = "portfolio_session";

// export type SessionData = {
//   visitorId: string;
//   startTime: number;
//   formSubmitted: boolean;
//   contactClicks: string[];
//   projectClicks: string[];
// };

// function generateId(): string {
//   return "v_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
// }

// export function getOrCreateVisitorId(): string {
//   let id = localStorage.getItem(VISITOR_KEY);
//   if (!id) {
//     id = generateId();
//     localStorage.setItem(VISITOR_KEY, id);
//   }
//   return id;
// }

// export function getSession(): SessionData {
//   const raw = sessionStorage.getItem(SESSION_KEY);
//   if (raw) {
//     try {
//       return JSON.parse(raw) as SessionData;
//     } catch {
//       // fall through
//     }
//   }
//   const session: SessionData = {
//     visitorId: getOrCreateVisitorId(),
//     startTime: Date.now(),
//     formSubmitted: false,
//     contactClicks: [],
//     projectClicks: [],
//   };
//   sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
//   return session;
// }

// function saveSession(session: SessionData) {
//   sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
// }

// export function markFormSubmitted() {
//   const s = getSession();
//   s.formSubmitted = true;
//   saveSession(s);
// }

// export function trackContactClick(label: string) {
//   const s = getSession();
//   if (!s.contactClicks.includes(label)) {
//     s.contactClicks.push(label);
//     saveSession(s);
//   }
// }

// export function trackProjectClick(name: string) {
//   const s = getSession();
//   if (!s.projectClicks.includes(name)) {
//     s.projectClicks.push(name);
//     saveSession(s);
//   }
// }

// export async function flushVisit() {
//   const s = getSession();
//   const timeSpentSeconds = Math.round((Date.now() - s.startTime) / 1000);

//   // very short visits skip (optional)
//   if (timeSpentSeconds < 2) return;

//   const payload = {
//     type: "visit",
//     visitorId: s.visitorId,
//     timeSpentSeconds,
//     formSubmitted: s.formSubmitted,
//     contactClicks: s.contactClicks,
//     projectClicks: s.projectClicks,
//     pageUrl: window.location.href,
//     userAgent: navigator.userAgent,
//     referrer: document.referrer || "",
//   };

//   try {
//     // sendBeacon is best for unload; fallback to fetch
//     const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
//     const sent = navigator.sendBeacon?.(SCRIPT_URL, blob);
//     if (!sent) {
//       await fetch(SCRIPT_URL, {
//         method: "POST",
//         body: JSON.stringify(payload),
//         keepalive: true,
//         mode: "no-cors",
//       });
//     }
//   } catch (err) {
//     console.error("Tracking flush failed", err);
//   }
// }

// export function initTracker() {
//   getSession(); // ensure visitorId + session exist

//   // flush on leave / tab hide
//   const onLeave = () => {
//     flushVisit();
//   };

//   window.addEventListener("pagehide", onLeave);
//   document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "hidden") onLeave();
//   });

//   // also flush every 60s while user is active (optional safety)
//   const interval = setInterval(() => {
//     if (document.visibilityState === "visible") {
//       // don't reset session; just send a snapshot if you want live rows
//       // for now we only send on leave to avoid many rows
//     }
//   }, 60_000);

//   return () => {
//     clearInterval(interval);
//     window.removeEventListener("pagehide", onLeave);
//   };
// }









const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyNH0SiwaGY7PsXpklhj4Eu1IGMh5oVbQrJAq76MNiGprE97RZOkb6WII0pHcT9VGL6/exec"; // same URL
const VISITOR_KEY = "portfolio_visitor_id";
const SESSION_KEY = "portfolio_session";

export type SessionData = {
  visitorId: string;
  startTime: number;
  formSubmitted: boolean;
  contactClicks: string[];
  projectClicks: string[];
};

function generateId(): string {
  return "v_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = generateId();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

export function getSession(): SessionData {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (raw) {
    try {
      return JSON.parse(raw) as SessionData;
    } catch {
      /* fall through */
    }
  }
  const session: SessionData = {
    visitorId: getOrCreateVisitorId(),
    startTime: Date.now(),
    formSubmitted: false,
    contactClicks: [],
    projectClicks: [],
  };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

function saveSession(session: SessionData) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function markFormSubmitted() {
  const s = getSession();
  s.formSubmitted = true;
  saveSession(s);
}

export function trackContactClick(label: string) {
  const s = getSession();
  if (!s.contactClicks.includes(label)) {
    s.contactClicks.push(label);
    saveSession(s);
  }
}

export function trackProjectClick(name: string) {
  const s = getSession();
  if (!s.projectClicks.includes(name)) {
    s.projectClicks.push(name);
    saveSession(s);
  }
}

let flushing = false;

export async function flushVisit() {
  if (flushing) return;
  flushing = true;

  try {
    const s = getSession();
    const timeSpentSeconds = Math.max(1, Math.round((Date.now() - s.startTime) / 1000));

    const payload = {
      type: "visit",
      visitorId: s.visitorId,
      timeSpentSeconds,
      formSubmitted: s.formSubmitted,
      contactClicks: s.contactClicks,
      projectClicks: s.projectClicks,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer || "",
    };

    // text/plain + no-cors = Apps Script ke saath sabse reliable
    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      mode: "no-cors",
      keepalive: true,
    });

    console.log("[tracker] visit flushed", payload);
  } catch (err) {
    console.error("[tracker] flush failed", err);
  } finally {
    // allow another flush after a short gap (e.g. visibility cycles)
    setTimeout(() => {
      flushing = false;
    }, 2000);
  }
}

export function initTracker() {
  getSession();
  console.log("[tracker] started", getOrCreateVisitorId());

  const onLeave = () => {
    void flushVisit();
  };

  window.addEventListener("pagehide", onLeave);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") onLeave();
  });

  // DEV helper: 8 sec baad auto-flush (test ke liye). Production me hata dena.
  const testTimer = window.setTimeout(() => {
    console.log("[tracker] test auto-flush after 8s");
    void flushVisit();
  }, 8000);

  return () => {
    clearTimeout(testTimer);
    window.removeEventListener("pagehide", onLeave);
  };
}